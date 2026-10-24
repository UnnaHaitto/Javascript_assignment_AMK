'use strict';

function sortArray(numbers) {
  const sortedNumbers = [];

  for (let number of numbers) {
    sortedNumbers.push(number);
  }

  sortedNumbers.sort((a, b) => a - b);

  return sortedNumbers;
}

const numbers = [2, 6, 2, 5, 8, 1, 9, 3, 6, 1, 3, 5, 2, 4, 8];

console.log('Numbers before sort function: ' + numbers);

console.log('Numbers after sort function: ' + sortArray(numbers));
