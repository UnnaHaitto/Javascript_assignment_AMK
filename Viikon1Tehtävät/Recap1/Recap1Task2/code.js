'use strict';

const answer = prompt(
  'Give the x values for first and second coordinates (separated by ,):'
);
const answer2 = prompt(
  'Give the y values for first and second coordinates (separated by ,):'
);
const split = answer.split(',');
const split2 = answer2.split(',');
const x = parseFloat(split[0]);
const x2 = parseFloat(split[1]);
const y = parseFloat(split2[0]);
const y2 = parseFloat(split2[1]);

console.log(x);
console.log(y);
console.log(x2);
console.log(y2);

const distance = Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));

document.querySelector('#answer').innerHTML = distance;
