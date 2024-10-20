import React, { useState, useEffect } from 'react';
import './RecommendedMeal.js';
const { mealPlan } = require('../gemini_api.js');

function RecommendedMeal({ generateMeal }) {
  const [meal, setMeal] = useState('Meal will be generated here when button is clicked!');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // text generation func is called when button is clicked
    if (generateMeal) {
      fetchMealPlan();
    }
  }, [generateMeal]);

  async function fetchMealPlan() {
    setIsLoading(true);
    try {
      if (!process.env.REACT_APP_API_KEY) { // checks if api key exists
        throw new Error("API key not found in browser environment");
      }
      const result = await mealPlan(); // result is declared with generate text
      setMeal(result); // sets meal variable to result
      setError(null);
    } catch (error) { // error checking if fetching was unsuccessful
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
        {isLoading ? 'Generating meal...' : (
          <div dangerouslySetInnerHTML={{ __html: meal }} /> // Renders HTML from the meal string
        )}
      </div>
      {error && (
        <div className="error-message"> {/* prints error details if error occurs */}
          Error details: {error}
          <p>Please check the console for more information.</p>
        </div>
      )}
    </div>
  );
}

export default RecommendedMeal;