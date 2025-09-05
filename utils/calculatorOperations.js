export const performOperation = (firstValue, secondValue, operation) => {
  const first = parseFloat(firstValue);
  const second = parseFloat(secondValue);

  switch (operation) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '×':
      return first * second;
    case '÷':
      if (second === 0) {
        throw new Error('Деление на ноль');
      }
      return first / second;
    default:
      return second;
  }
};

export const isValidInput = (value) => {
  return /^-?\d*\.?\d*$/.test(value);
};

export const formatDisplayValue = (value) => {
  const number = parseFloat(value);
  if (isNaN(number)) return value;
  
  // Форматирование больших чисел
  if (Math.abs(number) > 999999999) {
    return number.toExponential(6);
  }
  
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};