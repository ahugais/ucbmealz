import React, { useState, useEffect } from 'react';
import './RecommendedMeal.js';
const { mealPlan } = require('../gemini_api.js');

function RecommendedMeal() {
  const [meal, setMeal] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMealPlan() {
      try {
        if (!process.env.REACT_APP_API_KEY) {
          throw new Error("API key not found in browser environment");
        }
        const result = await mealPlan();
        setMeal(result);
        setError(null);
      } catch (error) {
        console.error('Error fetching meal plan:', error);
        setMeal('Failed to load meal plan.');
        setError(error.message || 'An unknown error occurred');
      }
    }

    fetchMealPlan();
  }, []);

  return (
    <div className="recommended-meal">
      <h2>Recommended Meal</h2>
      <div className="meal-content">{meal}</div>
      {error && (
        <div className="error-message">
          Error details: {error}
          <p>Please check the console for more information.</p>
        </div>
      )}
    </div>
  );
}

export default RecommendedMeal;