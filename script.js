// Variables para almacenar los números y operaciones
let num1 = "";
let num2 = "";
let operator = "";

// Función para agregar un número al campo de texto
function appendNumber(number) {
  document.getElementById('result').value += number;
}

// Función para agregar un operador al campo de texto
function appendOperator(op) {
  num1 = document.getElementById('result').value;
  operator = op;
  document.getElementById('result').value = '';
}

// Función para realizar el cálculo y mostrar el resultado
function calculate() {
  num2 = document.getElementById('result').value;
  
  let result;
  
  switch (operator) {
    case '+':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case '-':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case '*':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case '/':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      return;
  }
  
  document.getElementById('result').value = result;
  
  // Reiniciar las variables para futuros cálculos
  num1 = '';
  num2 = '';
  operator = '';
}

// Función para limpiar el campo de texto y reiniciar las variables
function clear() {
  document.getElementById('result').value = '';
  num1 = '';
  num2 = '';
  operator = '';
}
