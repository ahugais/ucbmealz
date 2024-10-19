import React, { useEffect, useState } from 'react';
import './SelectionPanel.js';

function SelectionPanel({ title, options, isInput, clearSelections }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [nutrientValues, setNutrientValues] = useState({});

  const isMultiSelect = title === 'Dietary Restriction' || title === 'Nutrients';

  useEffect(() => {
    // Clear selections and input values when clearSelections is true
    if (clearSelections) {
      setSelectedOptions([]);
      setNutrientValues({});
    }
  }, [clearSelections]);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      // Deselect the option and remove its value
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
      setNutrientValues((prevValues) => {
        const updatedValues = { ...prevValues };
        delete updatedValues[option];
        return updatedValues;
      });
    } else {
      // Select the option and add it to the selected options
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleRadioChange = (option) => {
    setSelectedOptions([option]);
  };

  const handleInputChange = (option, value) => {
    // Update the value for the specific nutrient
    if (/^\d*$/.test(value)) {  // Allow only numeric input
      setNutrientValues({
        ...nutrientValues,
        [option]: value
      });
    }
  };

  return (
    <div className="panel">
      <h2>{title}</h2>
      {options.map((option, index) => (
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

          {/* Show the input box for nutrients if selected */}
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
      ))}
      {isInput && selectedOptions.includes('Other:') && (
        <input type="text" className="other-input" placeholder="Specify here..." />
      )}
    </div>
  );
}

export default SelectionPanel;
