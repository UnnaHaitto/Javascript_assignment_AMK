'use strict';

const movies = [];

const input = prompt('Enter the amount of movies you want to rate: ');
const amount = parseInt(input);

for (let i = 0; i < amount; i++) {
  let input2 = prompt('Enter movie name and rating separated by ,: ');
  const data = input2.split(',');
  let movieName = data[0];
  let movieRating = parseInt(data[1]);
  const movie = {
    title: movieName,
    rating: movieRating,
  };
  movies.push(movie);
}

for (let movie of movies) {
  console.log(movie);
}

function sortArray(movies) {
  movies.sort((a, b) => {
    const ratingA = a.rating;
    const ratingB = b.rating;

    if (ratingA < ratingB) {
      return 1;
    } else if (ratingB < ratingA) {
      return -1;
    }

    return 0;
  });
}

sortArray(movies);

let html = '';

for (let movie of movies) {
  html += movie.title + ' ' + movie.rating + '\n';
}

document.querySelector('#sorted').innerHTML = html;

const bestMovie = movies.shift();

document.querySelector('#highest').innerHTML =
  bestMovie.title + ' ' + bestMovie.rating;
