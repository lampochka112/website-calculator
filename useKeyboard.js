import { useEffect } from 'react';

export const useKeyboard = (onKeyPress) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      
      const keyMap = {
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
        '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
        '+': '+', '-': '-', '*': '×', '/': '÷',
        '.': '.', ',': '.', 'Enter': '=', 'Escape': 'C',
        'Backspace': 'CE', '%': '%'
      };

      if (keyMap[key]) {
        event.preventDefault();
        onKeyPress(keyMap[key]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onKeyPress]);
};