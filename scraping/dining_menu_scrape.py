from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, ElementNotInteractableException
from selenium.common.exceptions import TimeoutException
import time
import re
import sqlite3

conn = sqlite3.connect('dining_hall_data.db')
cursor = conn.cursor()

# Function to insert data into SQLite
def insert_data(instance_data):
    sql = """
    INSERT INTO scraped_data (dining_hall, meal_period, name, dietary_restrictions, calories, fats, carbs, protein, sugar, serving_size)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """
    values = (
        instance_data['dining_hall'],
        instance_data['meal_period'],
        instance_data['name'],
        ','.join(instance_data['dietary_restrictions']),  # Convert list to comma-separated string
        instance_data['calories'],
        instance_data['fats'],
        instance_data['carbs'],
        instance_data['protein'],
        instance_data['sugar'],
        instance_data['serving_size']
    )
    # Execute the query with the given values
    cursor.execute(sql, values)
    conn.commit()  # Commit the transaction

# Function to perform the scraping
def scrape_data():
    # Set up WebDriver
    driver = webdriver.Chrome()

    # Open the UC Berkeley dining menus page
    url = 'https://dining.berkeley.edu/menus/'
    driver.get(url)

    # Create a list to store all data
    menu_data = []

    # Define a list of dining halls to scrape
    dining_halls = driver.find_elements(By.CLASS_NAME, 'cafe-title')

    # Get the meal periods (e.g., Breakfast, Lunch, Dinner)
    all_meal_periods = driver.find_elements(By.CLASS_NAME, 'preiod-name')

    # Loop over each dining hall
    for hall_index in range(len(dining_halls)):
        hall = dining_halls[hall_index]
        dining_hall_name = dining_halls[hall_index].text  # Extract the name of the dining hall

        # Close the modal if it's open before clicking the next dining hall
        try:
            close_button = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.CLASS_NAME, 'cald-close'))
            )
            driver.execute_script("arguments[0].click();", close_button)  # Click via JavaScript
        except TimeoutException:
            pass

        driver.execute_script("arguments[0].scrollIntoView(true);", hall)  # Scroll to the element
        driver.execute_script("arguments[0].click();", hall)

        time.sleep(2)  # Wait for the page to load
        meals_per_day = len(all_meal_periods) // len(dining_halls)

        # Calculate the start and end indices for the current hall's meal periods
        start_idx = hall_index * meals_per_day
        end_idx = start_idx + meals_per_day

        # Get the meal periods specific to this dining hall
        meal_periods = all_meal_periods[start_idx:end_idx]

        # Loop over these meal periods
        for meal_period in meal_periods:
            meal_period_name = meal_period.text.split(' ')[-1]  # Extract the meal period
            try:
                time.sleep(1)
                WebDriverWait(driver, 15).until(EC.element_to_be_clickable(meal_period))
                driver.execute_script("arguments[0].scrollIntoView(true);", meal_period)
                driver.execute_script("arguments[0].click();", meal_period)

                time.sleep(2)  # Wait for the page to load

                # Extract all meal items for the current meal period
                meal_items = meal_period.find_elements(By.CLASS_NAME, 'recip')

                for meal_item in meal_items:
                    meal_name = meal_item.find_element(By.TAG_NAME, 'span').text

                    # Extract dietary icons
                    icons = meal_item.find_elements(By.CLASS_NAME, 'food-icon')
                    dietary_restrictions = [icon.find_element(By.TAG_NAME, 'img').get_attribute('alt') for icon in icons]

                    # Attempt to click the meal item using JavaScript
                    try:
                        driver.execute_script("arguments[0].scrollIntoView(true);", meal_item)
                        WebDriverWait(driver, 15).until(EC.visibility_of(meal_item))
                        driver.execute_script("arguments[0].click();", meal_item)

                        # Wait for the recipe card to load
                        serving_size_text = WebDriverWait(driver, 15).until(
                            EC.visibility_of_element_located((By.CLASS_NAME, 'title'))
                        ).find_element(By.CLASS_NAME, 'serving-size').text

                        serving_size = re.search(r'\d+', serving_size_text).group()

                        # Get the card containing all the nutrients
                        nutrient_card = WebDriverWait(driver, 15).until(
                            EC.visibility_of_element_located((By.CLASS_NAME, 'nutration-details'))
                        )
                        nutrient_list = nutrient_card.find_elements(By.TAG_NAME, 'li')

                        # Extract nutrient information by index
                        nutrients = {
                            'calories': nutrient_list[0].text.split(":")[-1].strip(),
                            'fats': nutrient_list[1].text.split(":")[-1].strip(),
                            'carbs': nutrient_list[6].text.split(":")[-1].strip(),
                            'protein': nutrient_list[9].text.split(":")[-1].strip(),
                            'sugar': nutrient_list[8].text.split(":")[-1].strip()
                        }

                        # Grab all nutrient data about specific instance
                        instance_data = {
                            'dining_hall': dining_hall_name,
                            'meal_period': meal_period_name,
                            'name': meal_name,
                            'dietary_restrictions': dietary_restrictions,
                            'calories': float(nutrients['calories']),  # Convert to integer
                            'fats': float(nutrients['fats']),          # Convert to integer
                            'carbs': float(nutrients['carbs']),        # Convert to integer
                            'protein': float(nutrients['protein']),    # Convert to integer
                            'sugar': float(nutrients['sugar']),        # Convert to integer
                            'serving_size': float(serving_size)        # Convert to integer
                        }

                        # Add nutrient info to the menu data
                        menu_data.append(instance_data)
                        # Insert data into the SQLite database
                        insert_data(instance_data)

                    except (NoSuchElementException, ElementNotInteractableException) as e:
                        print(f"Error loading nutrient details for {meal_name}: {e}")

                    time.sleep(1)  # Wait a bit before moving to the next meal item

            except ElementNotInteractableException as e:
                print(f"Element not interactable: {e}")

    # Close the browser
    driver.quit()
    print(menu_data)

# Call the scraping function
scrape_data()


