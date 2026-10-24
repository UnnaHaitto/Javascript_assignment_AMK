'use strict';

let answer = prompt('Give a positive number to count the sum of:');

while (answer < 0) {
  answer = prompt('Give a positive number to count the sum of:');
}
const n = parseInt(answer);

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

document.querySelector('#answer').innerHTML = sum;
