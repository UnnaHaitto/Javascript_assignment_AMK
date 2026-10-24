'use strict';

const answer = prompt('Give the length for 3 triangle sides (separated by ,):');
const split = answer.split(',');
const side1 = parseFloat(split[0]);
const side2 = parseFloat(split[1]);
const side3 = parseFloat(split[2]);

if (side1 === side2 && side1 === side3) {
  document.querySelector('#answer').innerHTML = 'the triangle is equilateral';
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  document.querySelector('#answer').innerHTML = 'the triangle is isosceles';
} else if (side1 !== side2 && side1 !== side3 && side3 !== side2) {
  document.querySelector('#answer').innerHTML = 'the triangle is scalene';
}
