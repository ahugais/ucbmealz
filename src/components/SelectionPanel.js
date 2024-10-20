import React, { useEffect, useState } from 'react';

// Global variables to store selections and nutrient values
export const selectedData = {
  diningHall: '',
  meal: '',
  dietaryIncludes: [],
  dietaryExcludes: [],
  nutrients: {}
};

function SelectionPanel({ title, options, isInput, clearSelections }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [nutrientValues, setNutrientValues] = useState({});

  const isMultiSelect = title === 'Dietary Restriction' || title === 'Nutrients';

  useEffect(() => {
    // Clear selections and input values when clearSelections is true
    if (clearSelections) {
      setSelectedOptions([]);
      setNutrientValues({});
      resetGlobalVariables();
    }
  }, [clearSelections]);

  const resetGlobalVariables = () => {
    if (title === 'Dining Halls') selectedData.diningHall = '';
    if (title === 'Meal') selectedData.meal = '';
    if (title === 'Dietary Restriction') {
      selectedData.dietaryIncludes = [];
      selectedData.dietaryExcludes = [];
    }
    if (title === 'Nutrients') selectedData.nutrients = {};
  };

  const handleCheckboxChange = (option, type) => {
    if (selectedOptions.includes(option)) {
      // Deselect the option
      setSelectedOptions(selectedOptions.filter((item) => item !== option));

      // Update global variables for dietary restrictions
      if (title === 'Dietary Restriction') {
        if (type === 'includes') {
          selectedData.dietaryIncludes = selectedData.dietaryIncludes.filter((item) => item !== option);
        } else {
          selectedData.dietaryExcludes = selectedData.dietaryExcludes.filter((item) => item !== option);
        }
      }

      // Update global variables for nutrients
      if (title === 'Nutrients') {
        const updatedNutrients = { ...nutrientValues };
        delete updatedNutrients[option];
        selectedData.nutrients = updatedNutrients;
        setNutrientValues(updatedNutrients);
      }
    } else {
      // Select the option
      setSelectedOptions([...selectedOptions, option]);

      // Update global variables for dietary restrictions
      if (title === 'Dietary Restriction') {
        if (type === 'includes') {
          selectedData.dietaryIncludes.push(option);
        } else {
          selectedData.dietaryExcludes.push(option);
        }
      }
    }
  };

  const handleRadioChange = (option) => {
    setSelectedOptions([option]);
    if (title === 'Dining Halls') selectedData.diningHall = option;
    if (title === 'Meal') selectedData.meal = option;
  };

  const handleInputChange = (option, value) => {
    // Update the value for nutrients, allowing only numeric input
    if (/^\d*$/.test(value)) {
      const updatedNutrients = { ...nutrientValues, [option]: value };
      setNutrientValues(updatedNutrients);
      selectedData.nutrients = updatedNutrients;
    }
  };

  return (
    <div className="panel">
      <h2>{title}</h2>
      {title === 'Dietary Restriction' ? (
        <div className="dietary-columns">
          {/* Includes Column */}
          <div className="dietary-column">
            <h3>Includes</h3>
            {['Halal', 'Vegan', 'Vegetarian', 'Kosher'].map((option, index) => (
              <div key={index} className="option">
                <input
                  type="checkbox"
                  id={option}
                  name="includes"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option, 'includes')}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>

          {/* Excludes Column */}
          <div className="dietary-column">
            <h3>Excludes</h3>
            {['Milk', 'Gluten', 'Peanuts', 'Tree nuts'].map((option, index) => (
              <div key={index} className="option">
                <input
                  type="checkbox"
                  id={option}
                  name="excludes"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option, 'excludes')}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        </div>
      ) : (
        options.map((option, index) => (
          <div key={index} className="option">
            <input
              type={isMultiSelect ? 'checkbox' : 'radio'}
              id={option}
              name={title}
              checked={selectedOptions.includes(option)}
              onChange={() => isMultiSelect ? handleCheckboxChange(option) : handleRadioChange(option)}
            />
            <label htmlFor={option}>{option}</label>

            {/* Display nutrient input box when selected */}
            {title === 'Nutrients' && selectedOptions.includes(option) && (
              <input
                type="text"
                className="nutrient-input"
                placeholder="Enter amount"
                value={nutrientValues[option] || ''}
                onChange={(e) => handleInputChange(option, e.target.value)}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default SelectionPanel;
