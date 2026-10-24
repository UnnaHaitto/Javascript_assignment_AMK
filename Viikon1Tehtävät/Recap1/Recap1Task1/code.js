'use strict';
const answer = prompt('Give a celsius temperature: ');

const celcius = parseFloat(answer);
const kelvin = +celcius + 273.15;
const fahrenheit = celcius * (9 / 5) + 32;

document.querySelector('#answer').innerHTML =
  'Celsius ' +
  celcius +
  ' is in fahrenheit: ' +
  fahrenheit +
  ' and in kelvin: ' +
  kelvin +
  '.';
