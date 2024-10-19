import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Create a meal plan that has 50 grams of protein and 10 grams of carbs.";

const result = await model.generateContent(prompt);
console.log(result.response.text());