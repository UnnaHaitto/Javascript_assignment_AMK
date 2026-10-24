'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
  let input = prompt('Give a number: ');
  let number = parseInt(input);
  numbers.push(number);
}

document.querySelector('#array').innerHTML = '[' + numbers + ']';

let input = prompt('Give a number to be check if it is in the array: ');
let number = parseInt(input);

if (numbers.includes(number)) {
  document.querySelector('#answer').innerHTML =
    'The number ' + number + ' is in the array!';
} else {
  document.querySelector('#answer').innerHTML =
    'The number ' + number + ' is NOT in the array!';
}

numbers.pop();

document.querySelector('#arrayafter').innerHTML = '[' + numbers + ']';

numbers.sort((a, b) => a - b);

document.querySelector('#arraysort').innerHTML = '[' + numbers + ']';
