const { GoogleGenerativeAI } = require("@google/generative-ai");
const { menu } = require("./test.js");

// setting up API to generate text
const API_KEY = process.env.API_KEY || process.env.REACT_APP_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// converting JSON to string
//const menuData = JSON.stringify(menu());
const menuData = menu();
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
module.exports = { mealPlan };