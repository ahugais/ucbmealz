const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.API_KEY || process.env.REACT_APP_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Create a meal plan with 50 grams of protein and 15 grams of carbs. Limit to around 50 words.";
async function mealPlan() {
    const result = await model.generateContent(prompt);
    const output = result.response.text();
    console.log(output);
    return output;
}

mealPlan();
module.exports = { mealPlan };