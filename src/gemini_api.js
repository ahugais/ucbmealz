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
const prompt = "Create a meal plan with 50 grams of protein and 15 grams of carbs using data from this json file:" + menuData + ". Limit to around 50 words and also mention the location which is identified by 'dining_hall'.";

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