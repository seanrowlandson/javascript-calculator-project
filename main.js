document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');
    const display = document.getElementById('display');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.textContent;

            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.value = '';
            } else if (value === '=') {
                if (currentInput && previousInput && operator) {
                    currentInput = eval(previousInput + operator + currentInput);
                    display.value = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    previousInput = currentInput;
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
