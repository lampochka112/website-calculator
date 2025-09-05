import React from 'react';
import './HistoryPanel.css';

const HistoryPanel = ({ history, onClear }) => {
  if (history.length === 0) {
    return (
      <div className="history-panel empty">
        <p>История вычислений пуста</p>
      </div>
    );
  }

  return (
    <div className="history-panel">
      <div className="history-header">
        <h3>История вычислений</h3>
        <button className="clear-history-btn" onClick={onClear}>
          Очистить
        </button>
      </div>
      
      <div className="history-list">
        {history.map((item, index) => (
          <div key={index} className="history-item">
            <div className="calculation">{item.expression}</div>
            <div className="result">= {item.result}</div>
            <div className="timestamp">{item.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPanel;