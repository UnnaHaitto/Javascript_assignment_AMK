'use strict';

const numbers = [];

while (true) {
  let input = prompt("Enter a number (or 'done' to finish): ");

  if (input == 'done') {
    break;
  }

  let number = parseInt(input);
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
