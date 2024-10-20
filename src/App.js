import React, { useState } from 'react';
import Header from './components/Header';
import SelectionPanel from './components/SelectionPanel';
import RecommendedMeal from './components/RecommendedMeal';
import './App.css';

// Import global variables from SelectionPanel.js
import { selectedData } from './components/SelectionPanel';

function App() {
  const [clearSelections, setClearSelections] = useState(false);
  const [generateMeal, setGenerateMeal] = useState(false);

  const handleMealGeneration = () => {

    // Trigger meal generation
    setGenerateMeal(true);


    // Clear all selections after generating the meal
    setClearSelections(true);

    // Reset states after a brief delay
    setTimeout(() => {
      setClearSelections(false);
      setGenerateMeal(false);
    }, 100);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="panels-container">
        <SelectionPanel
          title="Dining Halls"
          options={['Crossroads', 'Cafe 3', 'Clark Kerr', 'Foothill']}
          clearSelections={clearSelections}
        />
        <SelectionPanel
          title="Meal"
          options={['Breakfast', 'Brunch', 'Lunch', 'Dinner']}
          clearSelections={clearSelections}
        />
        <SelectionPanel
          title="Dietary Restriction"
          options={['Halal', 'Vegan', 'Vegetarian', 'Other:']}
          isInput={true}
          clearSelections={clearSelections}
        />
        <SelectionPanel
          title="Nutrients"
          options={['Calories (kcal):', 'Carbs (g):', 'Protein (g):', 'Fats (g):']}
          clearSelections={clearSelections}
        />
      </div>
      {/* Generate Meal Button */}
      <button onClick={handleMealGeneration} className="generate-meal-button">
        Generate Meal
      </button>
      <RecommendedMeal generateMeal={generateMeal} />
    </div>
  );
}

export default App;