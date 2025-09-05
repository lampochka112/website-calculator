import React from 'react';
import AdvancedCalculator from './components/AdvancedCalculator';
import { CalculatorProvider } from './context/CalculatorContext';
import './App.css';

function App() {
  return (
    <CalculatorProvider>
      <div className="App">
        <header className="App-header">
          <h1>🚀 Продвинутый Калькулятор</h1>
          <p>Мощные вычисления в вашем браузере</p>
        </header>
        <main>
          <AdvancedCalculator />
        </main>
      </div>
    </CalculatorProvider>
  );
}

export default App;