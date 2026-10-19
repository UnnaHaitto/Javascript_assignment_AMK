'use strict';

let answer = prompt('Give your score of the test:');

while (answer < 0) {
  answer = prompt('Give your score of the test:');
}
const n = parseFloat(answer);

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
