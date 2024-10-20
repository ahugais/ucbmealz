/*import React, { useState } from 'react';
import Header from './components/Header';
import SelectionPanel from './components/SelectionPanel';
import RecommendedMeal from './components/RecommendedMeal';
import './App.css';



function App() {
  const [clearSelections, setClearSelections] = useState(false);
  const [generateMeal, setGenerateMeal] = useState(false);

  const handleMealGeneration = () => {
    // Placeholder for meal generation logic
    alert("Meal generated based on your selections!");

    // Clear all selections after generating the meal
    setClearSelections(true);

    // Reset clearSelections state after a brief delay
    setTimeout(() => setClearSelections(false), 0);
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
          options={['Calories:', 'Carbs/g:', 'Protein/g:', 'Fats/g:']}
          clearSelections={clearSelections}
        />
      </div>*/

      {/* Generate Meal Button */}
      /*
      <button onClick={handleMealGeneration} className="generate-meal-button">
        Generate Meal
      </button>
      <RecommendedMeal generateMeal={generateMeal} />
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';
import Header from './components/Header';
import SelectionPanel from './components/SelectionPanel';
import RecommendedMeal from './components/RecommendedMeal';
import './App.css';

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
          options={['Calories:', 'Carbs/g:', 'Protein/g:', 'Fats/g:']}
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