'use strict';

const numberOfFilms = +prompt(' Сколько фильмов вы уже посмотрели ? ', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false 
};

const movieName = prompt('Один из последних просмотренных фильмов?', ''),
 
 movieGrade = prompt('На сколько оцените его?', '');

personalMovieDB.movies[movieName] = movieGrade;

