import React, { useEffect, useState } from 'react';

function SelectionPanel({ 
  title, 
  options, 
  excludes, 
  clearSelections, 
  onChange, 
  onChangeIncludes, 
  onChangeExcludes, 
  onChangeCalories, 
  onChangeCarbs, 
  onChangeProtein, 
  onChangeFats, 
  isMultiSelect 
}) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [calories, setCalories] = useState('');
  const [carbs, setCarbs] = useState('');
  const [protein, setProtein] = useState('');
  const [fats, setFats] = useState('');

  useEffect(() => {
    // Clear selections and input values when clearSelections is true
    if (clearSelections) {
      setSelectedOptions([]);
      setCalories('');
      setCarbs('');
      setProtein('');
      setFats('');
    }
  }, [clearSelections]);

  const handleCheckboxChange = (option, type) => {
    let updatedOptions;
    if (selectedOptions.includes(option)) {
      updatedOptions = selectedOptions.filter((item) => item !== option);
    } else {
      updatedOptions = [...selectedOptions, option];
    }
    setSelectedOptions(updatedOptions);

    // Update includes/excludes selections
    if (title === 'Dietary Restriction') {
      if (type === 'includes') {
        onChangeIncludes && onChangeIncludes(updatedOptions);
      } else {
        onChangeExcludes && onChangeExcludes(updatedOptions);
      }
    } else {
      onChange && onChange(updatedOptions[0]);
    }
  };

  const handleRadioChange = (option) => {
    setSelectedOptions([option]);
    onChange && onChange(option);
  };

  const handleInputChange = (option, value) => {
    // Update the value for nutrients, allowing only numeric input
    if (/^\d*$/.test(value)) {
      if (option === 'Calories (kcal):') {
        setCalories(value);
        onChangeCalories && onChangeCalories(value);
      } else if (option === 'Carbs (g):') {
        setCarbs(value);
        onChangeCarbs && onChangeCarbs(value);
      } else if (option === 'Protein (g):') {
        setProtein(value);
        onChangeProtein && onChangeProtein(value);
      } else if (option === 'Fats (g):') {
        setFats(value);
        onChangeFats && onChangeFats(value);
      }
    }
  };

  return (
    <div className="panel">
      <h2>{title}</h2>
      {title === 'Dietary Restriction' ? (
        <div className="dietary-columns">
          <div className="dietary-column">
            <h3>Includes</h3>
            {options.map((option, index) => (
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
          <div className="dietary-column">
            <h3>Excludes</h3>
            {excludes.map((option, index) => (
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
                value={
                  option === 'Calories (kcal):' ? calories : 
                  option === 'Carbs (g):' ? carbs : 
                  option === 'Protein (g):' ? protein : 
                  fats
                }
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
