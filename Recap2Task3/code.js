'use strict';

const numbers = [];

let number = prompt("Enter a number (or 'done' to finish): ");
numbers.push(number);

while (number !== 'done') {
  number = prompt("Enter a number (or 'done' to finish): ");
  numbers.push(number);
}

let noEven = true;

for (let number of numbers) {
  if (number % 2 == 0) {
    noEven = false;
    document.querySelector('#even').innerHTML += number + '\n';
  }
}

if (noEven) {
  document.querySelector('#even').innerHTML += 'None';
}
