let display = document.getElementById('display');
let currentExpression = '';

function appendCharacter(char) {
  currentExpression += char;
  updateDisplay();
}

function performOperation(operator) {
  if (currentExpression !== '') {
    currentExpression += operator;
    updateDisplay();
  }
}

function calculateResult() {
  try {
    const result = eval(currentExpression);
    currentExpression = result.toString();
    updateDisplay();
  } catch (error) {
    alert('Invalid expression');
    clearDisplay();
  }
}

function clearDisplay() {
  currentExpression = '';
  updateDisplay();
}

function deleteLastChar() {
  currentExpression = currentExpression.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  display.value = currentExpression;
}

document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (/^\d$/.test(key)) {
    appendCharacter(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    performOperation(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Backspace') {
    deleteLastChar();
  } else if (key === '.') {
    appendCharacter('.');
  } else {
    alert('Only numbers are allowed');
  }
});
