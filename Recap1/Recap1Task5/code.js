'use strict';

let answer = prompt('Give your score of the test:');

while (answer < 0) {
  answer = prompt('Give your score of the test:');
}
const n = parseInt(answer);

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

document.querySelector('#answer').innerHTML = sum;
