// sets up sql database
const sqlite3 = require('sqlite3').verbose();

// function that creates a Promise and returns all the values of the table
function mealData() {
  return new Promise((resolve, reject) => {

    const db = new sqlite3.Database('./dining_hall_data.db');
    db.all("SELECT * FROM scraped_data",
      (err, rows) => {
        if(err) {
          reject(err);
        } else {
          resolve(rows);
        }
        db.close();
      });
  })
}

module.exports = { mealData };
  
