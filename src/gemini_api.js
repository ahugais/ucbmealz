import './App.js'
import { selectedData } from './data.js';
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { menu } = require("./jsonData.js");


// setting up API to generate text
const API_KEY = process.env.API_KEY || process.env.REACT_APP_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


function variable(str) {
    if (!str) {
        return str
    }
    else {
        return "any"
    }
}

// converting JSON to string
const menuData = menu();
const diningHall = variable(selectedData.diningHall.toString())
const mealPeriod = variable(selectedData.meal)
const dietaryIncludes = !selectedData.dietaryIncludes.toString() ? selectedData.dietaryIncludes.toString() : "nothing has to be included"
const dietaryExcludes = !selectedData.dietaryExcludes.toString() ? selectedData.dietaryExcludes.toString() : "nothing has to be excluded"
const calories = variable(selectedData.calories)
const carbs = variable(selectedData.carbs)
const protein = variable(selectedData.protein)
const fats = variable(selectedData.fats)


// prompt that is sent to Gemini
const prompt = "Sort the data in this file: " + menuData + "based on where the dining_hall is one of (" + diningHall +
 ") and where dietary restrictions contain all (" + dietaryIncludes + "). Sort the data so that their meal_period is " + mealPeriod +
 ". Now that u have a smaller subset of the data based only on what we are looking for, Create a couple of meals from the items where the meal is around " + calories + 
 " calories (kcal), and has around " + protein + " grams of protein, around " + carbs + " grams of carbs, and " + fats + 
 " grams of fats. Simply output the meals created by a combonation of the items offered, where they are and what meal_period they are, and their nutritional information. Always format your answer using html styling that would work within a div. Always use html stylings using only using html tags like for headers and lists etc. in a way that would work if its inserted in a div. Dont put html in the beginning and return meals" 
                
console.log(prompt)

// function that creates the text generation output
async function mealPlan() {
    const result = await model.generateContent(prompt);
    const output = result.response.text();
    console.log(output);
    return output;
}

mealPlan();

// export mealPlan() function to be used in other files
export { mealPlan };