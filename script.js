let currentInput = "";
let firstValue = null;
let currentOperation = null;

function add(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function subtract(...numbers) {
  return numbers.reduce((acc, curr) => acc - curr);
}

function multiply(...numbers) {
  return numbers.reduce((acc, curr) => acc * curr, 1);
}

function divide(...numbers) {
  return numbers.reduce((acc, curr) => acc / curr);
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  firstValue = null;
  currentOperation = null;
  updateDisplay();
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(operator) {
  if (currentInput === "") return;

  if (firstValue !== null) {
      compute();
  }

  firstValue = parseFloat(currentInput);
  currentOperation = operator;
  currentInput = "";
}