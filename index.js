'use strict';

const numberOfFilms = +prompt(' Сколько фильмов вы уже посмотрели ? ', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false 
};

// const firstName = prompt('Один из последних просмотренных фильмов?', ''),
//       firstGrade = +prompt('На сколько оцените его?', ''),
//       secondName = prompt('Один из последних просмотренных фильмов?', ''),
//       stcondGrade = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[firstName] = firstGrade;
// personalMovieDB.movies[secondName] = stcondGrade;

for( let i = 0; i < 2; i++){
    const a= prompt('Один из последних просмотренных фильмов?', ''),
       b= +prompt('На сколько оцените его?', '');

        if(a != null && b != null && a!= '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        }else{
            console.log('error');
            i--;
        }

}


// console.log(personalMovieDBr);
if(personalMovieDB.count<10){
    alert("просмотрено довольно мало фильмов");
} else if(personalMovieDB.count>=10 && personalMovieDB.count<=30){
    alert("Вы классический зритель");
}else if(personalMovieDB.count>30){
    alert('вы киноман');
}else {
    alert('Произошла ошибка');
}