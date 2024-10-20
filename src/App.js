import React, { useState } from 'react';
import Header from './components/Header';
import SelectionPanel from './components/SelectionPanel';
import RecommendedMeal from './components/RecommendedMeal';
import './App.css';

// Global variables to store selections and nutrient values
export const selectedData = {
  diningHall: '',
  meal: '',
  dietaryIncludes: [],
  dietaryExcludes: [],
  calories: '',
  carbs: '',
  protein: '',
  fats: ''
};

function App() {
  const [clearSelections, setClearSelections] = useState(false);
  const [diningHall, setDiningHall] = useState('');
  const [meal, setMeal] = useState('');
  const [dietaryIncludes, setDietaryIncludes] = useState([]);
  const [dietaryExcludes, setDietaryExcludes] = useState([]);
  const [calories, setCalories] = useState('');
  const [carbs, setCarbs] = useState('');
  const [protein, setProtein] = useState('');
  const [fats, setFats] = useState('');

  const handleMealGeneration = () => {
    // Update global variables only when the button is clicked
    selectedData.diningHall = diningHall;
    selectedData.meal = meal;
    selectedData.dietaryIncludes = dietaryIncludes;
    selectedData.dietaryExcludes = dietaryExcludes;
    selectedData.calories = calories;
    selectedData.carbs = carbs;
    selectedData.protein = protein;
    selectedData.fats = fats;

    console.log('Selected Data:', selectedData); // For debugging

    // Clear all selections after generating the meal
    setClearSelections(true);

    // Reset states after a brief delay
    setTimeout(() => setClearSelections(false), 100);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="panels-container">
        <SelectionPanel
          title="Dining Halls"
          options={['Crossroads', 'Cafe 3', 'Clark Kerr', 'Foothill']}
          clearSelections={clearSelections}
          onChange={setDiningHall}
          isMultiSelect={false}
        />
        <SelectionPanel
          title="Meal"
          options={['Breakfast', 'Brunch', 'Lunch', 'Dinner']}
          clearSelections={clearSelections}
          onChange={setMeal}
          isMultiSelect={false}
        />
        <SelectionPanel
          title="Dietary Restriction"
          options={['Halal', 'Vegan', 'Vegetarian', 'Kosher']}
          excludes={['Milk', 'Gluten', 'Peanuts', 'Tree nuts']}
          clearSelections={clearSelections}
          onChangeIncludes={setDietaryIncludes}
          onChangeExcludes={setDietaryExcludes}
          isMultiSelect={true}
        />
        <SelectionPanel
          title="Nutrients"
          options={['Calories (kcal):', 'Carbs (g):', 'Protein (g):', 'Fats (g):']}
          clearSelections={clearSelections}
          onChangeCalories={setCalories}
          onChangeCarbs={setCarbs}
          onChangeProtein={setProtein}
          onChangeFats={setFats}
          isMultiSelect={true}
        />
      </div>

      {/* Generate Meal Button */}
      <button onClick={handleMealGeneration} className="generate-meal-button">
        Generate Meal
      </button>

      <RecommendedMeal />
    </div>
  );
}

export default App;
