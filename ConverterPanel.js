import React, { useState } from 'react';
import './ConverterPanel.css';

const ConverterPanel = () => {
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const conversionTypes = {
    length: {
      meter: 1,
      kilometer: 0.001,
      centimeter: 100,
      millimeter: 1000,
      mile: 0.000621371,
      foot: 3.28084
    },
    weight: {
      kilogram: 1,
      gram: 1000,
      pound: 2.20462,
      ounce: 35.274
    },
    temperature: {
      celsius: 'celsius',
      fahrenheit: 'fahrenheit',
      kelvin: 'kelvin'
    }
  };

  const convertValue = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) return;

    // Простая реализация конвертации
    const conversionFactors = conversionTypes.length;
    const resultValue = value * (conversionFactors[toUnit] / conversionFactors[fromUnit]);
    
    setResult(resultValue.toFixed(6));
  };

  return (
    <div className="converter-panel">
      <h3>Конвертер величин</h3>
      
      <div className="converter-inputs">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите значение"
        />
        
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          {Object.keys(conversionTypes.length).map(unit => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        
        <span>→</span>
        
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {Object.keys(conversionTypes.length).map(unit => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        
        <button onClick={convertValue}>Конвертировать</button>
      </div>
      
      {result && (
        <div className="converter-result">
          Результат: {result} {toUnit}
        </div>
      )}
    </div>
  );
};

export default ConverterPanel;