'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
  let number = prompt('Give a number: ');
  numbers.push(number);
}

document.querySelector('#array').innerHTML = '[' + numbers + ']';

let number = prompt('Give a number to be check if it is in the array: ');

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
