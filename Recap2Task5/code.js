'use strict';

function sortArray(numbers, order) {
  if (order == 'asc') {
    numbers.sort((a, b) => a - b);
  } else if (order == 'desc') {
    numbers.sort((a, b) => b - a);
  } else {
    console.log('sortment incorrect');
  }
}

const numbers = [2, 6, 2, 5, 8, 1, 9, 3, 6, 1, 3, 5, 2, 4, 8];
const numbers2 = [9, 4, 5, 2, 1, 2, 1, 3, 5];
const numbers3 = [4, 2, 4, 6, 8, 4, 2, 3, 4];

const asc = 'asc';
const desc = 'desc';

sortArray(numbers, asc);

console.log('Numbers after sort function (asc): ' + numbers);

sortArray(numbers, desc);

console.log('Numbers after sort function (desc): ' + numbers);

sortArray(numbers2, asc);

console.log('Numbers after sort function (asc): ' + numbers2);

sortArray(numbers2, desc);

console.log('Numbers after sort function (desc): ' + numbers2);

sortArray(numbers3, asc);

console.log('Numbers after sort function (asc): ' + numbers3);

sortArray(numbers3, desc);

console.log('Numbers after sort function (desc): ' + numbers3);
