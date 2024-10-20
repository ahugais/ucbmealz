import React, { useEffect, useState } from 'react';

function SelectionPanel({ title, options, clearSelections }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [nutrientValues, setNutrientValues] = useState({});

  useEffect(() => {
    // Clear selections and nutrient values when clearSelections is true
    if (clearSelections) {
      setSelectedOptions([]);
      setNutrientValues({});
    }
  }, [clearSelections]);

  const handleCheckboxChange = (option) => {
    // For Dietary Restrictions and Nutrients: Multiple selections allowed
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
      setNutrientValues((prevValues) => {
        const updatedValues = { ...prevValues };
        delete updatedValues[option]; // Remove value when deselected
        return updatedValues;
      });
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleRadioChange = (option) => {
    // For Dining Halls and Meals: Only one selection allowed
    setSelectedOptions([option]);
  };

  const handleInputChange = (option, value) => {
    // Update nutrient values, allowing only numeric input
    if (/^\d*$/.test(value)) {
      setNutrientValues({
        ...nutrientValues,
        [option]: value
      });
    }
  };

  // Options for 'Includes' and 'Excludes' in Dietary Restrictions
  const includesOptions = ['Halal', 'Vegan', 'Vegetarian', 'Kosher'];
  const excludesOptions = ['Milk', 'Gluten', 'Peanuts', 'Tree nuts'];

  // Determine if the panel is for single or multiple selection
  const isMultiSelect = title === 'Dietary Restriction' || title === 'Nutrients';

  return (
    <div className="panel">
      <h2>{title}</h2>

      {title === 'Dietary Restriction' ? (
        <div className="dietary-columns">
          {/* Includes Column */}
          <div className="dietary-column">
            <h3>Includes</h3>
            {includesOptions.map((option, index) => (
              <div key={index} className="option">
                <input
                  type="checkbox"
                  id={option}
                  name="includes"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>

          {/* Excludes Column */}
          <div className="dietary-column">
            <h3>Excludes</h3>
            {excludesOptions.map((option, index) => (
              <div key={index} className="option">
                <input
                  type="checkbox"
                  id={option}
                  name="excludes"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
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
              onChange={() => 
                isMultiSelect ? handleCheckboxChange(option) : handleRadioChange(option)
              }
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
