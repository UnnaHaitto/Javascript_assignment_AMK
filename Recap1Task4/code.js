'use strict';

let answer = prompt('Give your score of the test:');

while (answer < 0 || answer > 100) {
  answer = prompt('Give your score of the test:');
}
const n = parseFloat(answer);

if (0 <= n && n <= 39) {
  document.querySelector('#answer').innerHTML = 'your grade is 0';
} else if (40 <= n && n <= 51) {
  document.querySelector('#answer').innerHTML = 'your grade is 1';
} else if (52 <= n && n <= 63) {
  document.querySelector('#answer').innerHTML = 'your grade is 2';
} else if (64 <= n && n <= 75) {
  document.querySelector('#answer').innerHTML = 'your grade is 3';
} else if (76 <= n && n <= 87) {
  document.querySelector('#answer').innerHTML = 'your grade is 4';
} else if (88 <= n && n <= 100) {
  document.querySelector('#answer').innerHTML = 'your grade is 5';
}
