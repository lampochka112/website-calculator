import React, { createContext, useContext, useReducer } from 'react';

const CalculatorContext = createContext();

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DISPLAY':
      return { ...state, displayValue: action.payload };
    case 'SET_HISTORY':
      return { ...state, history: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const CalculatorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, {
    displayValue: '0',
    history: [],
    theme: 'dark'
  });

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculatorContext must be used within CalculatorProvider');
  }
  return context;
};