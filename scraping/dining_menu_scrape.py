from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# Set up WebDriver (you may need to provide the path to chromedriver)
driver = webdriver.Chrome()

# Open the UC Berkeley dining menus page
url = 'https://dining.berkeley.edu/menus/'
driver.get(url)

# Create a list to store all data
menu_data = []

# Define a list of dining halls to scrape
dining_halls = driver.find_elements(By.CLASS_NAME, 'cafe-title')

# Loop over each dining hall
for hall in dining_halls:
    dining_hall_name = hall.text  # Extract the name of the dining hall
    hall.click()  # Click to load the dining hall page
    
    time.sleep(2)  # Wait for the page to load
    
    # Get the meal periods (e.g., Breakfast, Lunch, Dinner)
    meal_periods = driver.find_elements(By.CLASS_NAME, 'preiod-name')
    
    for meal_period in meal_periods:
        meal_period_name = meal_period.text.split(' ')[-1]  # Extract the meal period (e.g., Breakfast)
        meal_period.click()  # Click to load the meal
        
        time.sleep(2)  # Wait for the page to load
        
        # Extract all meal items for the current meal period
        meal_items = meal_period.find_elements(By.CLASS_NAME, 'recip')
        
        for meal_item in meal_items:
            # Extract meal name
            meal_name = meal_item.find_element(By.TAG_NAME, 'span').text
            
            # Extract dietary icons
            icons = meal_item.find_elements(By.CLASS_NAME, 'food-icon')
            dietary_restrictions = [icon.find_element(By.TAG_NAME, 'img').get_attribute('alt') for icon in icons]
            
            # Store all info in the dictionary with dining hall and meal period
            menu_data.append({
                'dining_hall': dining_hall_name,
                'meal_period': meal_period_name,
                'name': meal_name,
                'dietary_restrictions': dietary_restrictions
            })
            print(menu_data)

# Close the browser
driver.quit()

# Output the scraped data (you could save it to a JSON file or send it to an API)
for item in menu_data:
    print(item)
