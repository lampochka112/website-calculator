import { useState, useCallback } from 'react';
import { performOperation, isValidInput } from '../utils/calculatorOperations';
import { validateInput } from '../utils/validations';

export const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const clearAll = useCallback(() => {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  }, []);

  const clearEntry = useCallback(() => {
    setDisplayValue('0');
  }, []);

  const inputDigit = useCallback((digit) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  }, [displayValue, waitingForOperand]);

  const inputDot = useCallback(() => {
    if (waitingForOperand) {
      setDisplayValue('0.');
      setWaitingForOperand(false);
    } else if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  }, [displayValue, waitingForOperand]);

  const toggleSign = useCallback(() => {
    const newValue = parseFloat(displayValue) * -1;
    setDisplayValue(String(newValue));
  }, [displayValue]);

  const inputPercent = useCallback(() => {
    const currentValue = parseFloat(displayValue);
    const newValue = currentValue / 100;
    setDisplayValue(String(newValue));
  }, [displayValue]);

  const performOperation = useCallback((nextOperation) => {
    const inputValue = parseFloat(displayValue);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = performOperation(currentValue, inputValue, operation);

      setPreviousValue(newValue);
      setDisplayValue(String(newValue));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  }, [displayValue, operation, previousValue]);

  const calculateResult = useCallback(() => {
    const inputValue = parseFloat(displayValue);

    if (previousValue !== null && operation) {
      const currentValue = previousValue || 0;
      const newValue = performOperation(currentValue, inputValue, operation);

      setDisplayValue(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  }, [displayValue, operation, previousValue]);

  return {
    displayValue,
    previousValue,
    operation,
    clearAll,
    clearEntry,
    inputDigit,
    inputDot,
    toggleSign,
    inputPercent,
    performOperation,
    calculateResult,
  };
};