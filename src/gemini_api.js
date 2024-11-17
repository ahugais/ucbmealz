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
const prompt = "create a meal using this json file: " + menuData + ". Where you get only the food in the location: " + diningHall + " which are located under the key dining_hall and where the key meal_period is only equal to " + mealPeriod + ". Finally include what in their dietary_restrictions is in:" + dietaryIncludes + 
" and exclude whatever is in " + dietaryExcludes + ". After these filterings, the meal should be around " + calories + " calories and around " + protein + " grams of protein and " + carbs + " grams of carbs and " +
fats + " grams of fat. format your answer using html styling like headers and bullet points etc. don't output all 4 dining halls, ONLY the one that has a dining_hall value of " + diningHall + ". also answer this question: why do you always output cafe 3 menu even though i don't ask for cafe 3?"
  
/*
const prompt = "Create a couple of meals from items only in this json file: " + menuData + ". The meal should be made using items offered only at the dining halls mentioned in the parenthesis, do not mention meal items that are not from the halls in parenthesis or dining halls that are not in the parenthesis (" + diningHall + 
                ") which are represented as the dining_hall variable in the json. It should be for only items in the json file that say their meal_period is " + mealPeriod + ". Every item has to include in their dietary_restrioctions what is in these parenthesis (" + dietaryIncludes +
                ") and cannot include in their dietary_restrictions anything in these parenthesis (" + dietaryExcludes + "). The meal should be around " + calories + 
                " calories (kcal), should have around " + protein + " grams of protein, " + carbs + " grams of carbs, and " + fats + 
                " grams of fats. Always format your answer using html styling that would work within a div. Always use html stylings using only using html tags like for headers and lists etc. in a way that would work if its inserted in a div. Again, only ouput meals that are associated with the dining halls given and the meal period given.";
         */       
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