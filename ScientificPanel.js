import React from 'react';
import Button from '../Button';
import './ScientificPanel.css';

const ScientificPanel = ({ onCalculationComplete }) => {
  const scientificButtons = [
    ['sin', 'cos', 'tan', '√'],
    ['ln', 'log', 'x²', 'x³'],
    ['π', 'e', '(', ')'],
    ['^', '!', 'rad', 'deg']
  ];

  const handleScientificOperation = (operation) => {
    // Реализация научных операций
    console.log('Scientific operation:', operation);
  };

  return (
    <div className="scientific-panel">
      <div className="scientific-buttons">
        {scientificButtons.map((row, rowIndex) => (
          <div key={rowIndex} className="button-row">
            {row.map(button => (
              <Button
                key={button}
                value={button}
                onClick={handleScientificOperation}
                className="scientific-btn"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScientificPanel;