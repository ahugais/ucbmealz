import React, { useState, useEffect } from 'react';
import './RecommendedMeal.js';
const { mealPlan } = require('../gemini_api.js');

function RecommendedMeal({ generateMeal }) {
  const [meal, setMeal] = useState('Meal will be generated here when button is clicked!');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (generateMeal) {
      fetchMealPlan();
    }
  }, [generateMeal]);

  async function fetchMealPlan() {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="recommended-meal">
      <h2>Recommended Meal</h2>
      <div className="meal-content">
        {isLoading ? 'Generating meal...' : meal}
      </div>
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