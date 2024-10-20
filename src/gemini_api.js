const { GoogleGenerativeAI } = require("@google/generative-ai");
const { menu } = require("./jsonData.js");

// setting up API to generate text
const API_KEY = process.env.API_KEY || process.env.REACT_APP_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// converting JSON to string
//const menuData = JSON.stringify(menu());
const menuData = menu();
// prompt that is sent to Gemini
const prompt = "create a few healthy meals from the food using data from this json file:" + menuData + ". Limit to around 50 words and also mention the location which is identified by 'dining_hall'. always use html stylings using only using html tags like for headers and lists etc. in a way that would work if its inserted in a div";

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