'use strict';

let answer = prompt('Give a positive number:');

while (answer < 0) {
  answer = prompt('Give a positive number:');
}
const n = parseInt(answer);

document.querySelector('#number').innerHTML += n;

let add = 0;

let html = '';

for (let i = 1; i <= n; i++) {
  html += '<tr>';
  for (let y = 1; y <= n; y++) {
    add = i * y;
    html += '<td>' + add + '</td>';
  }
  html += '</tr>';
}

document.querySelector('#answer').innerHTML = html;
