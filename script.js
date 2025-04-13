function appendToDisplay(value) {
    const display = document.getElementById("display");
    
    
    if (value === '√') {
        const currentValue = display.value ? display.value : '0';
        const result = Math.sqrt(eval(currentValue));
        addHistory(`√${currentValue} = ${result}`);
        display.value = result; 
        return; 
    }

  
    if (value === 'log') {
        const currentValue = display.value ? display.value : '0';
        const result = Math.log10(eval(currentValue));
        addHistory(`log(${currentValue}) = ${result}`);
        display.value = result; 
        return; 
    }

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
        const result = eval(display.value.replace(/\*\*/g, '^')); 
        addHistory(display.value + ' = ' + result);
        display.value = result; 
    } catch (error) { 
        display.value = 'Ошибка'; 
        setTimeout(clearDisplay, 1500); 
    }
}


function calculatePercentage() { 
    const display = document.getElementById("display");
    
    try { 
         const currentValue = eval(display.value); 
         const percentageResult = currentValue / 100; 
         addHistory(`${currentValue} % = ${percentageResult}`);ию
         display.value = percentageResult; 
     } catch (error) { 
         display.value = 'Ошибка'; 
         setTimeout(clearDisplay, 1500); 
     }
}

function addHistory(entry) { 
     const historyList = document.getElementById("history");
     
     const listItem = document.createElement("li"); 
     listItem.textContent = entry;

     historyList.appendChild(listItem); 
}


function clearHistory() {  
     document.getElementById("history").innerHTML = '';  
}

function toggleTheme() {  
     document.body.classList.toggle("dark-mode");  
}