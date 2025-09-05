import React from 'react';
import Display from '../Display';
import Button from '../Button';
import { useCalculator } from '../../hooks';
import './Calculator.css';

const Calculator = () => {
  const {
    displayValue,
    clearAll,
    clearEntry,
    inputDigit,
    inputDot,
    toggleSign,
    inputPercent,
    performOperation,
    calculateResult,
  } = useCalculator();

  const handleButtonClick = (value) => {
    switch (value) {
      case 'C':
        clearAll();
        break;
      case 'CE':
        clearEntry();
        break;
      case '±':
        toggleSign();
        break;
      case '%':
        inputPercent();
        break;
      case '=':
        calculateResult();
        break;
      case '.':
        inputDot();
        break;
      case '+':
      case '-':
      case '×':
      case '÷':
        performOperation(value);
        break;
      default:
        if (/[0-9]/.test(value)) {
          inputDigit(value);
        }
    }
  };

  const buttonLayout = [
    ['C', 'CE', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['±', '0', '.', '=']
  ];

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="calculator-buttons">
        {buttonLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="button-row">
            {row.map((buttonValue) => (
              <Button
                key={buttonValue}
                value={buttonValue}
                onClick={handleButtonClick}
                isOperator={['+', '-', '×', '÷', '='].includes(buttonValue)}
                isSpecial={['C', 'CE', '±', '%'].includes(buttonValue)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;