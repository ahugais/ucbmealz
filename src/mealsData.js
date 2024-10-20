// sets up sql database
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

// function that creates a Promise and returns all the values of the table
    const db = new sqlite3.Database('./dining_hall_data.db');
    db.all("SELECT * FROM scraped_data",
      (err, rows) => {
        const jsonString = JSON.stringify(rows);
        fs.writeFileSync('src/menuData.json', jsonString);
        console.log(test);
        db.close();
      });
  
