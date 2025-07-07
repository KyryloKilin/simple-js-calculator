"use strict";

var currentInput = '0';
var previousInput = '0';
var operation = null;

function updateDisplay() {
  document.getElementById('result').innerText = currentInput;
}

function inputDigit(digit) {
  if (currentInput === '0') {
    currentInput = digit;
  } else {
    currentInput += digit;
  }

  updateDisplay();
}

function clear() {
  currentInput = '0';
  previousInput = '0';
  operation = null;
  updateDisplay();
}

function setOperation(op) {
  if (operation !== null) {
    calculate();
  }

  previousInput = currentInput;
  currentInput = '0';
  operation = op;
}

function calculate() {
  var result;
  var prev = parseFloat(previousInput);
  var current = parseFloat(currentInput);

  switch (operation) {
    case '+':
      result = prev + current;
      break;

    case '-':
      result = prev - current;
      break;

    case 'x':
      result = prev * current;
      break;

    case '/':
      result = prev / current;
      break;

    default:
      return;
  }

  currentInput = result.toString();
  operation = null;
  previousInput = '0';
  updateDisplay();
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('button').forEach(function (button) {
    button.addEventListener('click', function () {
      var value = button.textContent.trim();

      if (/^\d$/.test(value)) {
        inputDigit(value);
      } else if (value === 'C') {
        clear();
      } else if (value === '=') {
        calculate();
      } else {
        setOperation(value);
      }
    });
  });
  updateDisplay();
});