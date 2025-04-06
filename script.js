function appendToDisplay(value) {
    const display = document.getElementById("display");
    
    // Обработка квадратного корня
    if (value === '√') {
        const currentValue = display.value ? display.value : '0';
        const result = Math.sqrt(eval(currentValue));
        addHistory(`√${currentValue} = ${result}`);
        display.value = result; 
        return; 
    }

    // Обработка логарифма
    if (value === 'log') {
        const currentValue = display.value ? display.value : '0';
        const result = Math.log10(eval(currentValue));
        addHistory(`log(${currentValue}) = ${result}`);
        display.value = result; 
        return; 
    }

    // Обработка тригонометрических функций
    if (value === 'sin' || value === 'cos' || value === 'tan') {
        const currentValue = display.value ? display.value : '0';
        let result;

        switch(value) {
            case 'sin':
                result = Math.sin(eval(currentValue));
                break;
            case 'cos':
                result = Math.cos(eval(currentValue));
                break;
            case 'tan':
                result = Math.tan(eval(currentValue));
                break;
        }
        
        addHistory(`${value}(${currentValue}) = ${result}`);
        display.value = result; 
        return; 
    }

    // Если есть оператор возведения в степень, то добавляем число после него
    if (display.value.includes('**')) {
        const parts = display.value.split('**');
        if (parts.length === 2) { 
            const base = parts[0];
            const exponent = value === '1' || value === '2' || value === '3' ? value : '';
            display.value += exponent; 
            return; 
        }
    }

    display.value += value; 
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById("display");
    
    try {
        const result = eval(display.value.replace(/\*\*/g, '^')); // Заменяем '**' на '^'
        addHistory(display.value + ' = ' + result);
        display.value = result; 
    } catch (error) { 
        display.value = 'Ошибка'; 
        setTimeout(clearDisplay, 1500); // Очистить через 1.5 секунды
    }
}

// Вычисление процентов
function calculatePercentage() { 
    const display = document.getElementById("display");
    
    try { 
         const currentValue = eval(display.value); // Получаем текущее значение
         const percentageResult = currentValue / 100; // Вычисляем процент
         addHistory(`${currentValue} % = ${percentageResult}`); // Добавляем в историю
         display.value = percentageResult; // Отображаем результат
     } catch (error) { 
         display.value = 'Ошибка'; 
         setTimeout(clearDisplay, 1500); // Очистить через 1.5 секунды
     }
}

// Добавление записи в историю вычислений
function addHistory(entry) { 
     const historyList = document.getElementById("history");
     
     const listItem = document.createElement("li"); 
     listItem.textContent = entry;

     historyList.appendChild(listItem); 
}

// Очистка истории вычислений
function clearHistory() {  
     document.getElementById("history").innerHTML = '';  
}

// Переключение тем
function toggleTheme() {  
     document.body.classList.toggle("dark-mode");  
}