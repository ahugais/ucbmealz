const { Builder, By, until } = require('selenium-webdriver');
const sqlite3 = require('sqlite3').verbose();
const schedule = require('node-schedule');
const fs = require('fs').promises;

// Database connection
const db = new sqlite3.Database('dining_hall_data.db');

// Create a list to store all data
let menuData = [];

// Function to clear the table
function clearTable() {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM scraped_data", (err) => {
            if (err) {
                console.error(`Error clearing table: ${err}`);
                reject(err);
            } else {
                console.log("Table cleared successfully");
                resolve();
            }
        });
    });
}

// Function to insert data into SQLite
function insertData(instanceData) {
    return new Promise((resolve, reject) => {
        const sql = `
            INSERT INTO scraped_data (
                dining_hall, meal_period, name, dietary_restrictions, 
                calories, fats, carbs, protein, sugar, serving_size
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            instanceData.dining_hall,
            instanceData.meal_period,
            instanceData.name,
            instanceData.dietary_restrictions.join(','),
            instanceData.calories,
            instanceData.fats,
            instanceData.carbs,
            instanceData.protein,
            instanceData.sugar,
            instanceData.serving_size
        ];

        db.run(sql, values, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

// Function to perform the scraping
async function scrapeData() {
    let driver;
    try {
        await clearTable();
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new (require('selenium-webdriver/chrome').Options)().addArguments('--headless=new'))
            .build();

        // Open the UC Berkeley dining menus page
        await driver.get('https://dining.berkeley.edu/menus/');

        // Define a list of dining halls to scrape
        const diningHalls = await driver.findElements(By.className('cafe-title'));
        const allMealPeriods = await driver.findElements(By.className('preiod-name'));

        // Loop over each dining hall
        for (let hallIndex = 0; hallIndex < diningHalls.length; hallIndex++) {
            const hall = diningHalls[hallIndex];
            const diningHallName = await diningHalls[hallIndex].getText();

            // Close modal if open
            try {
                const closeButton = await driver.wait(
                    until.elementLocated(By.className('cald-close')),
                    10000
                );
                await driver.executeScript("arguments[0].click();", closeButton);
            } catch (error) {
                // Ignore if modal isn't present
            }

            await driver.executeScript("arguments[0].scrollIntoView(true);", hall);
            await driver.executeScript("arguments[0].click();", hall);

            await new Promise(resolve => setTimeout(resolve, 2000));

            const mealsPerDay = Math.floor(allMealPeriods.length / diningHalls.length);
            const startIdx = hallIndex * mealsPerDay;
            const endIdx = startIdx + mealsPerDay;
            const mealPeriods = allMealPeriods.slice(startIdx, endIdx);

            for (const mealPeriod of mealPeriods) {
                const mealPeriodName = (await mealPeriod.getText()).split(' ').pop();
                
                try {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    await driver.wait(until.elementIsEnabled(mealPeriod), 15000);
                    await driver.executeScript("arguments[0].scrollIntoView(true);", mealPeriod);
                    await driver.executeScript("arguments[0].click();", mealPeriod);

                    await new Promise(resolve => setTimeout(resolve, 2000));

                    const mealItems = await mealPeriod.findElements(By.className('recip'));

                    for (const mealItem of mealItems) {
                        const mealName = await mealItem.findElement(By.css('span')).getText();
                        const icons = await mealItem.findElements(By.className('food-icon'));
                        const dietaryRestrictions = await Promise.all(
                            icons.map(async icon => {
                                const img = await icon.findElement(By.css('img'));
                                return img.getAttribute('alt');
                            })
                        );

                        try {
                            await driver.executeScript("arguments[0].scrollIntoView(true);", mealItem);
                            await driver.wait(until.elementIsVisible(mealItem), 15000);
                            await driver.executeScript("arguments[0].click();", mealItem);

                            const servingSizeElement = await driver.wait(
                                until.elementLocated(By.css('.title .serving-size')),
                                15000
                            );
                            const servingSizeText = await servingSizeElement.getText();
                            const servingSize = servingSizeText.match(/\d+/)[0];

                            const nutrientCard = await driver.wait(
                                until.elementLocated(By.className('nutration-details')),
                                15000
                            );
                            const nutrientList = await nutrientCard.findElements(By.css('li'));

                            const nutrients = {
                                calories: await nutrientList[0].getText().then(text => text.split(':').pop().trim()),
                                fats: await nutrientList[1].getText().then(text => text.split(':').pop().trim()),
                                carbs: await nutrientList[6].getText().then(text => text.split(':').pop().trim()),
                                protein: await nutrientList[9].getText().then(text => text.split(':').pop().trim()),
                                sugar: await nutrientList[8].getText().then(text => text.split(':').pop().trim())
                            };

                            const instanceData = {
                                dining_hall: diningHallName,
                                meal_period: mealPeriodName,
                                name: mealName,
                                dietary_restrictions: dietaryRestrictions,
                                calories: parseFloat(nutrients.calories),
                                fats: parseFloat(nutrients.fats),
                                carbs: parseFloat(nutrients.carbs),
                                protein: parseFloat(nutrients.protein),
                                sugar: parseFloat(nutrients.sugar),
                                serving_size: parseFloat(servingSize)
                            };

                            menuData.push(instanceData);
                            await insertData(instanceData);

                        } catch (error) {
                            console.error(`Error loading nutrient details for ${mealName}:`, error);
                        }

                        await new Promise(resolve => setTimeout(resolve, 1000));
                    }
                } catch (error) {
                    console.error("Element not interactable:", error);
                }
            }
        }
    } catch (error) {
        console.error("Scraping error:", error);
    } finally {
        if (driver) {
            await driver.quit();
        }
        console.log(menuData);
    }
}

// Function to run the job
async function job() {
    console.log("Running the scraping task...");
    await scrapeData();
    
    // Write data to JSON file
    try {
        await fs.writeFile(
            "src/meal_data.json",
            JSON.stringify(menuData, null, 4)
        );
    } catch (error) {
        console.error("Error writing to JSON file:", error);
    }
}

// Run job immediately
job();

// Schedule job to run daily at 12:01 AM
schedule.scheduleJob('1 0 * * *', job); 