function menu() {
const json = [
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Teriyaki Chicken Thigh",
        "dietary_restrictions": [
            "Sesame",
            "co2"
        ],
        "calories": 148.85,
        "fats": 4.86,
        "carbs": 2.4,
        "protein": 22.39,
        "sugar": 0.78,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Fried Teriyaki Tofu",
        "dietary_restrictions": [
            "Soybeans",
            "Alcohol",
            "Sesame",
            "Vegan Option",
            "co2"
        ],
        "calories": 233.66,
        "fats": 9.36,
        "carbs": 15.68,
        "protein": 22.38,
        "sugar": 5.75,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Cauliflower Tempura",
        "dietary_restrictions": [
            "Wheat",
            "Soybeans",
            "Gluten",
            "Sesame",
            "Vegan Option",
            "co2"
        ],
        "calories": 165.66,
        "fats": 9.51,
        "carbs": 14.07,
        "protein": 5.72,
        "sugar": 8.27,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Jasmice Rice",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 125.69,
        "fats": 0.0,
        "carbs": 27.91,
        "protein": 2.79,
        "sugar": 0.0,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Vegetable Eggroll",
        "dietary_restrictions": [
            "Wheat",
            "Soybeans",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 147.55,
        "fats": 10.02,
        "carbs": 13.54,
        "protein": 2.01,
        "sugar": 0.0,
        "serving_size": 2.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Jerk Baked Chicken Thigh",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 255.87,
        "fats": 11.28,
        "carbs": 0.16,
        "protein": 35.77,
        "sugar": 0.04,
        "serving_size": 7.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Jamaican Chickpea White",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 153.75,
        "fats": 3.88,
        "carbs": 26.45,
        "protein": 3.54,
        "sugar": 1.12,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Sauteed Onion and Zucchini",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 46.69,
        "fats": 2.43,
        "carbs": 5.66,
        "protein": 1.22,
        "sugar": 3.04,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Kosher Tomato Couscous Salad",
        "dietary_restrictions": [
            "Wheat",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 128.24,
        "fats": 3.05,
        "carbs": 20.82,
        "protein": 3.55,
        "sugar": 0.48,
        "serving_size": 2.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Cheese Pizza",
        "dietary_restrictions": [
            "Milk",
            "Wheat",
            "Soybeans",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 62.41,
        "fats": 2.23,
        "carbs": 8.02,
        "protein": 2.67,
        "sugar": 0.15,
        "serving_size": 0.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Vegetable Deluxe Pizza",
        "dietary_restrictions": [
            "Milk",
            "Wheat",
            "Soybeans",
            "Gluten",
            "Alcohol",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 185.23,
        "fats": 9.0,
        "carbs": 18.64,
        "protein": 7.45,
        "sugar": 0.68,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Vegan Scrambled Egg",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 89.83,
        "fats": 6.72,
        "carbs": 1.32,
        "protein": 5.69,
        "sugar": 0.06,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Sauteed Kale Onion and Mushroom",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 67.22,
        "fats": 2.22,
        "carbs": 10.13,
        "protein": 4.17,
        "sugar": 2.4,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Mini Butter Croissant",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Wheat",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 88.37,
        "fats": 4.42,
        "carbs": 10.8,
        "protein": 0.98,
        "sugar": 0.98,
        "serving_size": 0.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Mini Apple Coronet Danish",
        "dietary_restrictions": [
            "Egg",
            "Wheat",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 107.21,
        "fats": 5.77,
        "carbs": 12.36,
        "protein": 0.83,
        "sugar": 6.02,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Mini Cinnamon Swirl Danish",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Wheat",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 123.7,
        "fats": 7.42,
        "carbs": 12.36,
        "protein": 1.65,
        "sugar": 4.96,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Mini Cheese Plait Danish",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Wheat",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 124.11,
        "fats": 7.97,
        "carbs": 10.63,
        "protein": 1.77,
        "sugar": 2.37,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Mini Maple Pecan Danish",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Tree Nuts",
            "Wheat",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 136.88,
        "fats": 9.28,
        "carbs": 11.69,
        "protein": 1.49,
        "sugar": 4.25,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Macaroni and Cheese Pasta",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Wheat",
            "Soybeans",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 112.62,
        "fats": 5.63,
        "carbs": 11.6,
        "protein": 4.22,
        "sugar": 0.35,
        "serving_size": 2.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "RIgatoni Pasta",
        "dietary_restrictions": [
            "Wheat",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 213.9,
        "fats": 3.25,
        "carbs": 43.22,
        "protein": 8.88,
        "sugar": 2.26,
        "serving_size": 7.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Gluten Free Penne Pasta",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 151.29,
        "fats": 0.8,
        "carbs": 35.01,
        "protein": 3.19,
        "sugar": 1.62,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Housemade Marinara Sauce",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 104.89,
        "fats": 8.66,
        "carbs": 5.39,
        "protein": 1.09,
        "sugar": 0.94,
        "serving_size": 2.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Sauteed Mushroom",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 58.58,
        "fats": 3.42,
        "carbs": 4.72,
        "protein": 4.37,
        "sugar": 2.83,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Roasted Brussels Sprouts",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 46.88,
        "fats": 1.14,
        "carbs": 8.15,
        "protein": 3.07,
        "sugar": 2.01,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Vegan Italian \"Sausage\"",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 6205.43,
        "fats": 396.89,
        "carbs": 198.45,
        "protein": 421.7,
        "sugar": 248.06,
        "serving_size": 87.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Roasted Garlic Tomato",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 14.06,
        "fats": 0.63,
        "carbs": 2.0,
        "protein": 0.44,
        "sugar": 1.2,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Scrambled Eggs",
        "dietary_restrictions": [
            "Egg",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 190.84,
        "fats": 13.22,
        "carbs": 2.41,
        "protein": 14.48,
        "sugar": 0.0,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Spinach and Monterey Jack Eggs Scramble",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 277.56,
        "fats": 18.46,
        "carbs": 3.31,
        "protein": 19.19,
        "sugar": 0.17,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Bread Pudding with Bananas and Raisins",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Wheat",
            "Soybeans",
            "Gluten",
            "Alcohol",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 328.56,
        "fats": 6.18,
        "carbs": 57.13,
        "protein": 11.85,
        "sugar": 36.47,
        "serving_size": 7.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Chive Cream Cheese",
        "dietary_restrictions": [
            "Milk",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 8456.95,
        "fats": 840.0,
        "carbs": 196.18,
        "protein": 193.63,
        "sugar": 4.25,
        "serving_size": 100.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Oatmeal",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 93.37,
        "fats": 1.47,
        "carbs": 16.2,
        "protein": 2.94,
        "sugar": 0.0,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Chicken Breast",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 135.47,
        "fats": 3.87,
        "carbs": 0.03,
        "protein": 23.46,
        "sugar": 0.0,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Steamed Potato",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 43.69,
        "fats": 0.05,
        "carbs": 9.91,
        "protein": 1.15,
        "sugar": 0.44,
        "serving_size": 2.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Vegan Italian \"Sausage\"",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 248.22,
        "fats": 15.88,
        "carbs": 7.94,
        "protein": 16.87,
        "sugar": 9.92,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Brunch",
        "name": "Sauteed Green Beans",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 54.02,
        "fats": 2.28,
        "carbs": 6.62,
        "protein": 1.1,
        "sugar": 3.23,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Herb Roasted Tri Tip",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 300.92,
        "fats": 17.35,
        "carbs": 0.03,
        "protein": 33.68,
        "sugar": 0.0,
        "serving_size": 6.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Vegan Celebration \"Roast\"",
        "dietary_restrictions": [
            "Wheat",
            "Gluten",
            "Alcohol",
            "Vegan Option",
            "co2"
        ],
        "calories": 347.14,
        "fats": 12.52,
        "carbs": 19.79,
        "protein": 38.22,
        "sugar": 6.18,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Roasted Garlic Fries",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 145.93,
        "fats": 5.61,
        "carbs": 21.62,
        "protein": 2.58,
        "sugar": 1.74,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Mashed Yukon Potato",
        "dietary_restrictions": [
            "Milk",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 148.61,
        "fats": 7.39,
        "carbs": 18.07,
        "protein": 3.33,
        "sugar": 1.2,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Sauteed Green Beans",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 59.36,
        "fats": 1.71,
        "carbs": 8.81,
        "protein": 1.5,
        "sugar": 3.84,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Vegan Creamy Mushroom Gravy",
        "dietary_restrictions": [
            "Wheat",
            "Soybeans",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 15.37,
        "fats": 0.76,
        "carbs": 1.84,
        "protein": 0.21,
        "sugar": 0.19,
        "serving_size": 2.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Beef Marinara Sauce",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 341.88,
        "fats": 27.79,
        "carbs": 6.48,
        "protein": 15.09,
        "sugar": 1.12,
        "serving_size": 6.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Spaghetti",
        "dietary_restrictions": [
            "Wheat",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 137.4,
        "fats": 2.27,
        "carbs": 25.71,
        "protein": 4.28,
        "sugar": 1.25,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Roasted Carrot Zucchini Eggplant and Onion",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 65.45,
        "fats": 3.7,
        "carbs": 7.56,
        "protein": 1.15,
        "sugar": 3.96,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Marinated Cucumber and Tomato",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 29.77,
        "fats": 1.91,
        "carbs": 3.11,
        "protein": 0.63,
        "sugar": 1.74,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Macaroni and Cheese Pasta",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Wheat",
            "Soybeans",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 225.99,
        "fats": 11.29,
        "carbs": 23.29,
        "protein": 8.47,
        "sugar": 0.7,
        "serving_size": 6.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "RIgatoni Pasta",
        "dietary_restrictions": [
            "Wheat",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 161.03,
        "fats": 2.45,
        "carbs": 32.54,
        "protein": 6.68,
        "sugar": 1.7,
        "serving_size": 6.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Housemade Marinara Sauce",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 122.44,
        "fats": 10.11,
        "carbs": 6.29,
        "protein": 1.27,
        "sugar": 1.1,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Sauteed Mushroom",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 58.58,
        "fats": 3.42,
        "carbs": 4.72,
        "protein": 4.37,
        "sugar": 2.83,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Roasted Brussels Sprouts",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 57.53,
        "fats": 1.39,
        "carbs": 10.0,
        "protein": 3.76,
        "sugar": 2.46,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Vegan Italian \"Sausage\"",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 283.68,
        "fats": 18.14,
        "carbs": 9.07,
        "protein": 19.28,
        "sugar": 11.34,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Roasted Garlic Tomato",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 34.08,
        "fats": 1.53,
        "carbs": 4.84,
        "protein": 1.08,
        "sugar": 2.91,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Chicken Breast",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 135.47,
        "fats": 3.87,
        "carbs": 0.03,
        "protein": 23.46,
        "sugar": 0.0,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Steamed Potato",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 43.69,
        "fats": 0.05,
        "carbs": 9.91,
        "protein": 1.15,
        "sugar": 0.44,
        "serving_size": 2.0
    },
    {
        "dining_hall": "Cafe 3",
        "meal_period": "Dinner",
        "name": "Roasted Cumin Butternut Squash",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 59.36,
        "fats": 1.25,
        "carbs": 12.72,
        "protein": 1.09,
        "sugar": 2.39,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Chicken Tenders",
        "dietary_restrictions": [
            "Wheat",
            "Gluten",
            "co2"
        ],
        "calories": 371.36,
        "fats": 22.48,
        "carbs": 27.71,
        "protein": 17.59,
        "sugar": 0.0,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Vegan \"Chicken\" Tenders",
        "dietary_restrictions": [
            "Wheat",
            "Soybeans",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 580.3,
        "fats": 25.98,
        "carbs": 47.85,
        "protein": 36.97,
        "sugar": 6.53,
        "serving_size": 6.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Mashed Yukon Potato",
        "dietary_restrictions": [
            "Milk",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 93.03,
        "fats": 4.62,
        "carbs": 11.31,
        "protein": 2.09,
        "sugar": 0.75,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Steamed Carrots and Green Beans",
        "dietary_restrictions": [
            "Soybeans",
            "Vegan Option",
            "co2"
        ],
        "calories": 76.84,
        "fats": 4.08,
        "carbs": 8.43,
        "protein": 1.13,
        "sugar": 4.39,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Vegan Texas-style Breakfast Taco",
        "dietary_restrictions": [
            "Wheat",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 293.5,
        "fats": 14.6,
        "carbs": 26.82,
        "protein": 11.36,
        "sugar": 1.23,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Soyrizo with Peppers and Onion",
        "dietary_restrictions": [
            "Soybeans",
            "Vegan Option",
            "co2"
        ],
        "calories": 283.86,
        "fats": 9.08,
        "carbs": 37.7,
        "protein": 11.16,
        "sugar": 1.65,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Brown Rice",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 136.17,
        "fats": 0.0,
        "carbs": 31.11,
        "protein": 2.91,
        "sugar": 0.0,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Oatmeal",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 93.37,
        "fats": 1.47,
        "carbs": 16.2,
        "protein": 2.94,
        "sugar": 0.0,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Mini Assorted Danish",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Tree Nuts",
            "Wheat",
            "Soybeans",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 124.59,
        "fats": 6.7,
        "carbs": 13.4,
        "protein": 1.92,
        "sugar": 4.79,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Mini Butter Croissant",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Wheat",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 88.37,
        "fats": 4.42,
        "carbs": 10.8,
        "protein": 0.98,
        "sugar": 0.98,
        "serving_size": 0.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Farro Pilaf",
        "dietary_restrictions": [
            "Wheat",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 52.71,
        "fats": 0.97,
        "carbs": 9.35,
        "protein": 1.98,
        "sugar": 0.26,
        "serving_size": 2.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Roasted Cherry Tomato",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 55.64,
        "fats": 4.5,
        "carbs": 3.64,
        "protein": 0.94,
        "sugar": 2.4,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Steamed Broccoli",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 30.7,
        "fats": 0.38,
        "carbs": 5.51,
        "protein": 3.24,
        "sugar": 1.61,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Baked Diced Sweet Potato",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 108.83,
        "fats": 3.12,
        "carbs": 18.86,
        "protein": 1.47,
        "sugar": 3.92,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Halal Ground Beef",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 309.4,
        "fats": 24.93,
        "carbs": 0.26,
        "protein": 19.49,
        "sugar": 0.04,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Chicken Breast",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 135.47,
        "fats": 3.87,
        "carbs": 0.03,
        "protein": 23.46,
        "sugar": 0.0,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Texas-style Breakfast Taco",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Wheat",
            "Gluten",
            "Pork",
            "co2"
        ],
        "calories": 908.33,
        "fats": 68.72,
        "carbs": 30.21,
        "protein": 43.91,
        "sugar": 1.17,
        "serving_size": 8.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Mexican Rice",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 117.55,
        "fats": 1.14,
        "carbs": 23.88,
        "protein": 2.09,
        "sugar": 0.34,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "Refried Beans",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 133.78,
        "fats": 2.38,
        "carbs": 22.92,
        "protein": 6.68,
        "sugar": 1.03,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Brunch",
        "name": "French Toast",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Wheat",
            "Gluten",
            "Alcohol",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 272.25,
        "fats": 17.55,
        "carbs": 21.33,
        "protein": 7.09,
        "sugar": 3.87,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Pork BBQ Ribs",
        "dietary_restrictions": [
            "Gluten",
            "Pork",
            "co2"
        ],
        "calories": 974.56,
        "fats": 78.47,
        "carbs": 9.92,
        "protein": 52.79,
        "sugar": 14.91,
        "serving_size": 13.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Macaroni and Cheese Pasta",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Wheat",
            "Soybeans",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 112.62,
        "fats": 5.63,
        "carbs": 11.6,
        "protein": 4.22,
        "sugar": 0.35,
        "serving_size": 2.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Fried Onion Rings",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Wheat",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 400.35,
        "fats": 32.24,
        "carbs": 23.66,
        "protein": 1.92,
        "sugar": 5.45,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Orecchiette Pasta",
        "dietary_restrictions": [
            "Wheat",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 203.19,
        "fats": 2.3,
        "carbs": 39.16,
        "protein": 7.64,
        "sugar": 1.9,
        "serving_size": 7.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Gluten Free Penne Pasta",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 151.29,
        "fats": 0.8,
        "carbs": 35.01,
        "protein": 3.19,
        "sugar": 1.62,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Creamy Pesto",
        "dietary_restrictions": [
            "Milk",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 19781.96,
        "fats": 1840.88,
        "carbs": 432.47,
        "protein": 411.81,
        "sugar": 0.0,
        "serving_size": 270.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Marinara Sauce",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 55.92,
        "fats": 0.35,
        "carbs": 11.17,
        "protein": 1.63,
        "sugar": 1.65,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Steamed Broccolini with Lemon",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 40.64,
        "fats": 0.5,
        "carbs": 7.42,
        "protein": 4.23,
        "sugar": 2.16,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Buttered Bread Rolls",
        "dietary_restrictions": [
            "Milk",
            "Wheat",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 155.4,
        "fats": 4.34,
        "carbs": 24.0,
        "protein": 5.0,
        "sugar": 1.09,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Baked BBQ Tofu",
        "dietary_restrictions": [
            "Soybeans",
            "Vegan Option",
            "co2"
        ],
        "calories": 680.52,
        "fats": 20.44,
        "carbs": 57.15,
        "protein": 66.43,
        "sugar": 43.26,
        "serving_size": 17.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Braised Collard Greens",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 45.06,
        "fats": 0.0,
        "carbs": 5.78,
        "protein": 2.48,
        "sugar": 2.91,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Lemon Pepper Roasted Cauliflower",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 50.91,
        "fats": 3.29,
        "carbs": 4.86,
        "protein": 1.66,
        "sugar": 1.77,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Steamed Corn Cob",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 133.41,
        "fats": 0.84,
        "carbs": 33.33,
        "protein": 5.0,
        "sugar": 8.33,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Southwestern Corn Chowder",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 166.74,
        "fats": 5.56,
        "carbs": 27.76,
        "protein": 2.77,
        "sugar": 8.32,
        "serving_size": 8.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Tomato Bisque Soup",
        "dietary_restrictions": [
            "Milk",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 175.99,
        "fats": 10.18,
        "carbs": 18.51,
        "protein": 2.77,
        "sugar": 9.25,
        "serving_size": 8.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Forbidden Rice",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 109.02,
        "fats": 1.09,
        "carbs": 23.97,
        "protein": 2.9,
        "sugar": 0.0,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Garbanzo Beans",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 113.42,
        "fats": 1.75,
        "carbs": 19.18,
        "protein": 6.09,
        "sugar": 2.61,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Roasted Cherry Tomato",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 55.64,
        "fats": 4.5,
        "carbs": 3.64,
        "protein": 0.94,
        "sugar": 2.4,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Stir Fried Cabbage",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 25.99,
        "fats": 0.09,
        "carbs": 6.21,
        "protein": 1.06,
        "sugar": 3.01,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Halal Ground Beef",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 309.4,
        "fats": 24.93,
        "carbs": 0.26,
        "protein": 19.49,
        "sugar": 0.04,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Chicken Breast",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 135.47,
        "fats": 3.87,
        "carbs": 0.03,
        "protein": 23.46,
        "sugar": 0.0,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Vegan Creole Potato Salad",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 89.94,
        "fats": 4.1,
        "carbs": 11.62,
        "protein": 1.38,
        "sugar": 1.07,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Clark Kerr Campus",
        "meal_period": "Dinner",
        "name": "Awesome Blossom Sauce",
        "dietary_restrictions": [
            "Egg",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 175.22,
        "fats": 18.81,
        "carbs": 1.06,
        "protein": 0.04,
        "sugar": 0.82,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Pork Carnitas",
        "dietary_restrictions": [
            "Pork",
            "co2"
        ],
        "calories": 280.39,
        "fats": 17.89,
        "carbs": 2.57,
        "protein": 26.96,
        "sugar": 0.39,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Corn Tortilla",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 56.95,
        "fats": 0.63,
        "carbs": 12.02,
        "protein": 1.27,
        "sugar": 0.29,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Cilantro and Lime Rice",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 131.13,
        "fats": 1.74,
        "carbs": 26.15,
        "protein": 2.38,
        "sugar": 0.37,
        "serving_size": 6.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Refried Beans",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 133.78,
        "fats": 2.38,
        "carbs": 22.92,
        "protein": 6.68,
        "sugar": 1.03,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Grilled Jalapeno",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 21.78,
        "fats": 1.19,
        "carbs": 2.68,
        "protein": 0.57,
        "sugar": 1.44,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Cheese Pizza",
        "dietary_restrictions": [
            "Milk",
            "Wheat",
            "Soybeans",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 232.61,
        "fats": 8.3,
        "carbs": 29.89,
        "protein": 9.96,
        "sugar": 0.56,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Sausage Pizza",
        "dietary_restrictions": [
            "Milk",
            "Wheat",
            "Soybeans",
            "Gluten",
            "Pork",
            "co2"
        ],
        "calories": 283.27,
        "fats": 12.86,
        "carbs": 30.14,
        "protein": 11.98,
        "sugar": 0.56,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Bean Chili",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 296.4,
        "fats": 6.49,
        "carbs": 42.59,
        "protein": 12.04,
        "sugar": 6.49,
        "serving_size": 8.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Turkey and Bean Chili",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 250.09,
        "fats": 10.18,
        "carbs": 21.3,
        "protein": 18.51,
        "sugar": 4.63,
        "serving_size": 8.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Scrambled Eggs",
        "dietary_restrictions": [
            "Egg",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 190.84,
        "fats": 13.22,
        "carbs": 2.41,
        "protein": 14.48,
        "sugar": 0.0,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Pork Sausage Link",
        "dietary_restrictions": [
            "Pork",
            "co2"
        ],
        "calories": 253.29,
        "fats": 24.3,
        "carbs": 0.0,
        "protein": 7.09,
        "sugar": 0.0,
        "serving_size": 2.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Cajun Potato",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 102.07,
        "fats": 4.91,
        "carbs": 12.98,
        "protein": 1.54,
        "sugar": 1.06,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Mung Bean Patty",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 169.21,
        "fats": 11.84,
        "carbs": 1.69,
        "protein": 11.84,
        "sugar": 0.0,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Vegan Breakfast \"Sausage\" Patty",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 289.09,
        "fats": 21.0,
        "carbs": 6.01,
        "protein": 20.02,
        "sugar": 0.0,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Roasted Broccoli and Red Pepper with Turmeric",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 53.48,
        "fats": 2.66,
        "carbs": 5.92,
        "protein": 3.02,
        "sugar": 2.17,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Cheese Blintz with Mixed Berries",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Wheat",
            "Soybeans",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 254.25,
        "fats": 7.1,
        "carbs": 43.08,
        "protein": 7.2,
        "sugar": 29.34,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Oatmeal",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 93.37,
        "fats": 1.47,
        "carbs": 16.2,
        "protein": 2.94,
        "sugar": 0.0,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Brown Rice",
        "dietary_restrictions": [
            "Vegan Option",
            "Vegan Option",
            "co2"
        ],
        "calories": 136.17,
        "fats": 0.0,
        "carbs": 31.11,
        "protein": 2.91,
        "sugar": 0.0,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Mini Butter Croissant",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Wheat",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 88.37,
        "fats": 4.42,
        "carbs": 10.8,
        "protein": 0.98,
        "sugar": 0.98,
        "serving_size": 0.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Mini Apple Coronet Danish",
        "dietary_restrictions": [
            "Egg",
            "Wheat",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 107.21,
        "fats": 5.77,
        "carbs": 12.36,
        "protein": 0.83,
        "sugar": 6.02,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Mini Cinnamon Swirl Danish",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Wheat",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 123.7,
        "fats": 7.42,
        "carbs": 12.36,
        "protein": 1.65,
        "sugar": 4.96,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Mini Cheese Plait Danish",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Wheat",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 124.11,
        "fats": 7.97,
        "carbs": 10.63,
        "protein": 1.77,
        "sugar": 2.37,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Mini Maple Pecan Danish",
        "dietary_restrictions": [
            "Milk",
            "Egg",
            "Tree Nuts",
            "Wheat",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 136.88,
        "fats": 9.28,
        "carbs": 11.69,
        "protein": 1.49,
        "sugar": 4.25,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Steamed Potato",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 43.69,
        "fats": 0.05,
        "carbs": 9.91,
        "protein": 1.15,
        "sugar": 0.44,
        "serving_size": 2.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Kidney Beans",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 108.85,
        "fats": 0.0,
        "carbs": 20.09,
        "protein": 6.7,
        "sugar": 2.7,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Stir Fried Cabbage",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 25.99,
        "fats": 0.09,
        "carbs": 6.21,
        "protein": 1.06,
        "sugar": 3.01,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Brussels Sprouts",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 87.89,
        "fats": 3.29,
        "carbs": 13.0,
        "protein": 4.91,
        "sugar": 3.19,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Halal Ground Beef",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 309.4,
        "fats": 24.93,
        "carbs": 0.26,
        "protein": 19.49,
        "sugar": 0.04,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Herb Roasted Chicken",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 328.03,
        "fats": 26.26,
        "carbs": 0.73,
        "protein": 20.76,
        "sugar": 0.1,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Brown Rice",
        "dietary_restrictions": [
            "Vegan Option",
            "Vegan Option",
            "co2"
        ],
        "calories": 136.17,
        "fats": 0.0,
        "carbs": 31.11,
        "protein": 2.91,
        "sugar": 0.0,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Brunch",
        "name": "Gluten Free Penne Pasta",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 151.29,
        "fats": 0.8,
        "carbs": 35.01,
        "protein": 3.19,
        "sugar": 1.62,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Citrus Glaze Pork",
        "dietary_restrictions": [
            "Pork",
            "co2"
        ],
        "calories": 381.83,
        "fats": 23.02,
        "carbs": 5.47,
        "protein": 36.16,
        "sugar": 5.14,
        "serving_size": 6.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Ginger Pear and Raisin Relish",
        "dietary_restrictions": [
            "Alcohol",
            "co2"
        ],
        "calories": 32.31,
        "fats": 0.05,
        "carbs": 7.62,
        "protein": 0.26,
        "sugar": 5.04,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Creamed Spinach",
        "dietary_restrictions": [
            "Milk",
            "Wheat",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 95.24,
        "fats": 6.79,
        "carbs": 6.3,
        "protein": 2.52,
        "sugar": 0.43,
        "serving_size": 2.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Bell Pepper Brussel Sprout Mushroom and Zucchini",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 79.17,
        "fats": 4.8,
        "carbs": 7.8,
        "protein": 2.04,
        "sugar": 2.32,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Lemon Rice Pilaf",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 131.06,
        "fats": 2.42,
        "carbs": 24.93,
        "protein": 2.07,
        "sugar": 0.94,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Vegan Celebration \"Roast\"",
        "dietary_restrictions": [
            "Wheat",
            "Gluten",
            "Alcohol",
            "Vegan Option",
            "co2"
        ],
        "calories": 224.25,
        "fats": 8.09,
        "carbs": 12.78,
        "protein": 24.69,
        "sugar": 3.99,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Cheese Pizza",
        "dietary_restrictions": [
            "Milk",
            "Wheat",
            "Soybeans",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 62.41,
        "fats": 2.23,
        "carbs": 8.02,
        "protein": 2.67,
        "sugar": 0.15,
        "serving_size": 0.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Pepperoni Pizza",
        "dietary_restrictions": [
            "Milk",
            "Wheat",
            "Soybeans",
            "Gluten",
            "Pork",
            "co2"
        ],
        "calories": 96.36,
        "fats": 4.74,
        "carbs": 9.49,
        "protein": 3.91,
        "sugar": 0.18,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Bean Chili",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 296.4,
        "fats": 6.49,
        "carbs": 42.59,
        "protein": 12.04,
        "sugar": 6.49,
        "serving_size": 8.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Turkey and Bean Chili",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 250.09,
        "fats": 10.18,
        "carbs": 21.3,
        "protein": 18.51,
        "sugar": 4.63,
        "serving_size": 8.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Steamed Potato",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 65.53,
        "fats": 0.08,
        "carbs": 14.86,
        "protein": 1.72,
        "sugar": 0.66,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Lima Beans",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 130.54,
        "fats": 0.26,
        "carbs": 24.48,
        "protein": 8.28,
        "sugar": 3.28,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Stir Fried Cabbage",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 25.99,
        "fats": 0.09,
        "carbs": 6.21,
        "protein": 1.06,
        "sugar": 3.01,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Steamed Broccoli",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 30.7,
        "fats": 0.38,
        "carbs": 5.51,
        "protein": 3.24,
        "sugar": 1.61,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Halal Ground Beef",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 309.4,
        "fats": 24.93,
        "carbs": 0.26,
        "protein": 19.49,
        "sugar": 0.04,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Herb Roasted Chicken",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 328.03,
        "fats": 26.26,
        "carbs": 0.73,
        "protein": 20.76,
        "sugar": 0.1,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Gluten Free Penne Pasta",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 151.29,
        "fats": 0.8,
        "carbs": 35.01,
        "protein": 3.19,
        "sugar": 1.62,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Brown Rice",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 136.17,
        "fats": 0.0,
        "carbs": 31.11,
        "protein": 2.91,
        "sugar": 0.0,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Crossroads",
        "meal_period": "Dinner",
        "name": "Housemade Marinara Sauce",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 104.89,
        "fats": 8.66,
        "carbs": 5.39,
        "protein": 1.09,
        "sugar": 0.94,
        "serving_size": 2.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Fettuccine Pasta",
        "dietary_restrictions": [
            "Wheat",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 159.73,
        "fats": 1.82,
        "carbs": 31.49,
        "protein": 5.26,
        "sugar": 1.52,
        "serving_size": 6.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Gluten Free Penne Pasta",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 151.29,
        "fats": 0.8,
        "carbs": 35.01,
        "protein": 3.19,
        "sugar": 1.62,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Kale Pesto Fettuccine",
        "dietary_restrictions": [
            "Wheat",
            "Soybeans",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 341.57,
        "fats": 23.56,
        "carbs": 25.21,
        "protein": 7.89,
        "sugar": 1.46,
        "serving_size": 6.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Creamy Chipotle Shrimp Sauce",
        "dietary_restrictions": [
            "Milk",
            "Wheat",
            "Gluten",
            "co2"
        ],
        "calories": 204.79,
        "fats": 15.73,
        "carbs": 9.2,
        "protein": 4.64,
        "sugar": 3.45,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Roasted Brussels Sprouts",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 46.88,
        "fats": 1.14,
        "carbs": 8.15,
        "protein": 3.07,
        "sugar": 2.01,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Baguette with Herb Oil",
        "dietary_restrictions": [
            "Wheat",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 127.53,
        "fats": 2.34,
        "carbs": 21.83,
        "protein": 2.91,
        "sugar": 0.0,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Broccoli Cheddar Soup",
        "dietary_restrictions": [
            "Milk",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 268.64,
        "fats": 21.3,
        "carbs": 11.11,
        "protein": 10.18,
        "sugar": 0.0,
        "serving_size": 8.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Grandma Mary's Chicken Soup",
        "dietary_restrictions": [
            "Egg",
            "Wheat",
            "Gluten",
            "co2"
        ],
        "calories": 120.41,
        "fats": 1.38,
        "carbs": 15.74,
        "protein": 12.04,
        "sugar": 2.77,
        "serving_size": 8.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Honey Mustard Baked Chicken Thigh",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 150.32,
        "fats": 4.98,
        "carbs": 2.39,
        "protein": 22.29,
        "sugar": 2.27,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Steamed Potato",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 109.22,
        "fats": 0.13,
        "carbs": 24.76,
        "protein": 2.86,
        "sugar": 1.11,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Garlic Roasted Broccoli",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 53.19,
        "fats": 2.66,
        "carbs": 5.89,
        "protein": 3.29,
        "sugar": 1.68,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Gardein Strip Fajitas",
        "dietary_restrictions": [
            "Wheat",
            "Soybeans",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 139.57,
        "fats": 9.18,
        "carbs": 4.16,
        "protein": 10.2,
        "sugar": 1.44,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Scrambled Eggs",
        "dietary_restrictions": [
            "Egg",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 183.38,
        "fats": 12.7,
        "carbs": 2.32,
        "protein": 13.92,
        "sugar": 0.0,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Fried Tator Tots",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 248.19,
        "fats": 14.15,
        "carbs": 25.65,
        "protein": 2.7,
        "sugar": 1.32,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Pork Sausage Patty",
        "dietary_restrictions": [
            "Pork",
            "co2"
        ],
        "calories": 231.47,
        "fats": 22.37,
        "carbs": 0.0,
        "protein": 5.32,
        "sugar": 0.0,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Vegan \"Chicken\" Tenders",
        "dietary_restrictions": [
            "Wheat",
            "Soybeans",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 338.09,
        "fats": 15.13,
        "carbs": 27.88,
        "protein": 21.54,
        "sugar": 3.81,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Oatmeal",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 93.37,
        "fats": 1.47,
        "carbs": 16.2,
        "protein": 2.94,
        "sugar": 0.0,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Brown Rice",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 136.17,
        "fats": 0.0,
        "carbs": 31.11,
        "protein": 2.91,
        "sugar": 0.0,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Basmati Rice",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 90.78,
        "fats": 0.0,
        "carbs": 21.17,
        "protein": 1.81,
        "sugar": 0.0,
        "serving_size": 2.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Chicken Breast",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 135.47,
        "fats": 3.87,
        "carbs": 0.03,
        "protein": 23.46,
        "sugar": 0.0,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Lima Beans",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 130.54,
        "fats": 0.26,
        "carbs": 24.48,
        "protein": 8.28,
        "sugar": 3.28,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Stir Fried Cabbage",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 30.78,
        "fats": 0.1,
        "carbs": 7.36,
        "protein": 1.26,
        "sugar": 3.56,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Forbidden Rice",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 109.02,
        "fats": 1.09,
        "carbs": 23.97,
        "protein": 2.9,
        "sugar": 0.0,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Brunch",
        "name": "Roasted Cherry Tomato",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 55.64,
        "fats": 4.5,
        "carbs": 3.64,
        "protein": 0.94,
        "sugar": 2.4,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Mandarin-style Orange Chicken",
        "dietary_restrictions": [
            "Egg",
            "Wheat",
            "Soybeans",
            "Gluten",
            "co2"
        ],
        "calories": 304.5,
        "fats": 10.13,
        "carbs": 32.93,
        "protein": 18.86,
        "sugar": 26.02,
        "serving_size": 6.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Fried Orange Tofu",
        "dietary_restrictions": [
            "Soybeans",
            "Vegan Option",
            "co2"
        ],
        "calories": 194.32,
        "fats": 6.33,
        "carbs": 24.12,
        "protein": 10.65,
        "sugar": 9.82,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Jasmice Rice",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 125.69,
        "fats": 0.0,
        "carbs": 27.91,
        "protein": 2.79,
        "sugar": 0.0,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Spicy Garlic Eggplant Stir Fry",
        "dietary_restrictions": [
            "Alcohol",
            "Vegan Option",
            "co2"
        ],
        "calories": 63.46,
        "fats": 1.67,
        "carbs": 22.0,
        "protein": 1.0,
        "sugar": 6.93,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Vegetable Eggroll",
        "dietary_restrictions": [
            "Wheat",
            "Soybeans",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 147.55,
        "fats": 10.02,
        "carbs": 13.54,
        "protein": 2.01,
        "sugar": 0.0,
        "serving_size": 2.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Penne Pasta",
        "dietary_restrictions": [
            "Wheat",
            "Gluten",
            "Vegan Option",
            "co2"
        ],
        "calories": 378.04,
        "fats": 4.18,
        "carbs": 74.81,
        "protein": 12.46,
        "sugar": 3.61,
        "serving_size": 14.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Marinara Sauce",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 55.92,
        "fats": 0.35,
        "carbs": 11.17,
        "protein": 1.63,
        "sugar": 1.65,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Paprika Pepper Cream Penne Pasta",
        "dietary_restrictions": [
            "Milk",
            "Wheat",
            "Gluten",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 212.31,
        "fats": 15.14,
        "carbs": 15.02,
        "protein": 3.45,
        "sugar": 1.11,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Broccoli Cheddar Soup",
        "dietary_restrictions": [
            "Milk",
            "Vegetarian Option",
            "co2"
        ],
        "calories": 268.64,
        "fats": 21.3,
        "carbs": 11.11,
        "protein": 10.18,
        "sugar": 0.0,
        "serving_size": 8.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Grandma Mary's Chicken Soup",
        "dietary_restrictions": [
            "Egg",
            "Wheat",
            "Gluten",
            "co2"
        ],
        "calories": 120.41,
        "fats": 1.38,
        "carbs": 15.74,
        "protein": 12.04,
        "sugar": 2.77,
        "serving_size": 8.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Chili Cheese Beef Hot Dog",
        "dietary_restrictions": [
            "Milk",
            "Wheat",
            "Soybeans",
            "Gluten",
            "Sesame",
            "co2"
        ],
        "calories": 477.09,
        "fats": 35.64,
        "carbs": 26.73,
        "protein": 19.94,
        "sugar": 2.12,
        "serving_size": 5.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Vegan Chili Hot Dog",
        "dietary_restrictions": [
            "Wheat",
            "Soybeans",
            "Gluten",
            "Sesame",
            "Vegan Option",
            "co2"
        ],
        "calories": 311.96,
        "fats": 11.08,
        "carbs": 26.07,
        "protein": 25.18,
        "sugar": 4.01,
        "serving_size": 4.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Steak Fries",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 179.95,
        "fats": 7.9,
        "carbs": 24.65,
        "protein": 2.59,
        "sugar": 0.0,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Lemon Pepper Roasted Cauliflower",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 50.91,
        "fats": 3.29,
        "carbs": 4.86,
        "protein": 1.66,
        "sugar": 1.77,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Chicken Breast",
        "dietary_restrictions": [
            "co2"
        ],
        "calories": 135.47,
        "fats": 3.87,
        "carbs": 0.03,
        "protein": 23.46,
        "sugar": 0.0,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Amaranth Pilaf",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 49.92,
        "fats": 0.94,
        "carbs": 8.77,
        "protein": 1.82,
        "sugar": 0.23,
        "serving_size": 1.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Kidney Beans",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 108.85,
        "fats": 0.0,
        "carbs": 20.09,
        "protein": 6.7,
        "sugar": 2.7,
        "serving_size": 3.0
    },
    {
        "dining_hall": "Foothill",
        "meal_period": "Dinner",
        "name": "Grilled Eggplant",
        "dietary_restrictions": [
            "Vegan Option",
            "co2"
        ],
        "calories": 86.85,
        "fats": 5.91,
        "carbs": 8.44,
        "protein": 1.41,
        "sugar": 5.05,
        "serving_size": 5.0
    }
];

    const menu = JSON.stringify(json);
    return menu;
}
console.log(menu());
module.exports = { menu };