import React, { useState } from 'react';
import ScientificPanel from '../ScientificPanel';
import HistoryPanel from '../HistoryPanel';
import ConverterPanel from '../ConverterPanel';
import Calculator from '../Calculator';
import './AdvancedCalculator.css';

const AdvancedCalculator = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [calculationHistory, setCalculationHistory] = useState([]);
  const [theme, setTheme] = useState('dark');

  const addToHistory = (calculation) => {
    setCalculationHistory(prev => [calculation, ...prev].slice(0, 10));
  };

  const clearHistory = () => {
    setCalculationHistory([]);
  };

  const tabs = [
    { id: 'basic', label: 'Базовый', icon: '🧮' },
    { id: 'scientific', label: 'Научный', icon: '🔬' },
    { id: 'converter', label: 'Конвертер', icon: '🔄' },
    { id: 'history', label: 'История', icon: '📊' }
  ];

  return (
    <div className={`advanced-calculator ${theme}`}>
      <div className="calculator-header">
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>
        
        <div className="theme-switcher">
          <button
            className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
            onClick={() => setTheme('light')}
          >
            ☀️
          </button>
          <button
            className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}
          >
            🌙
          </button>
        </div>
      </div>

      <div className="calculator-content">
        {activeTab === 'basic' && (
          <Calculator onCalculationComplete={addToHistory} />
        )}
        {activeTab === 'scientific' && (
          <ScientificPanel onCalculationComplete={addToHistory} />
        )}
        {activeTab === 'converter' && (
          <ConverterPanel />
        )}
        {activeTab === 'history' && (
          <HistoryPanel 
            history={calculationHistory} 
            onClear={clearHistory}
          />
        )}
      </div>
    </div>
  );
};

export default AdvancedCalculator;