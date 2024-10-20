const { mealData } = require("./mealsData");

async function test() {
    const mealDatas = await mealData();
    const dataString = JSON.stringify(mealDatas);
    return dataString;
}
console.log(test());