let display = document.getElementById('display');
let operator = '';
let operand1 = '';
let operand2 = '';

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
  operator = '';
  operand1 = '';
  operand2 = '';
}

function calculate() {
  let expression = display.value;

  // Finding the operator
  if (expression.includes('+')) {
    operator = '+';
  } else if (expression.includes('-')) {
    operator = '-';
  } else if (expression.includes('*')) {
    operator = '*';
  } else if (expression.includes('/')) {
    operator = '/';
  }

  // Splitting the expression into operands based on operator
  let operands = expression.split(operator);
  operand1 = parseFloat(operands[0]);
  operand2 = parseFloat(operands[1]);

  // Performing calculation based on operator
  switch (operator) {
    case '+':
      display.value = operand1 + operand2;
      break;
    case '-':
      display.value = operand1 - operand2;
      break;
    case '*':
      display.value = operand1 * operand2;
      break;
    case '/':
      if (operand2 === 0) {
        display.value = "Error: Division by zero";
      } else {
        display.value = operand1 / operand2;
      }
      break;
    default:
      break;
  }
}
