'use srtict';

const numberOfFilmes = +prompt("Сколько фильмов вы уже псмотрели ?","");

const personalMovieBD = {
    count:numberOfFilmes,
    movies: {},
    actors:{},
    genres: [],
    private: false
};
const a = prompt ("Один из последних просмотренных?" , " "),
      b = prompt ("На сколько оцените его?" , " "),
	  c = prompt ("Один из последних просмотренных?" , " "),
	  d = prompt ("На сколько оцените его?" , " ");
personalMovieBD.movies[a]=b;
personalMovieBD.movies[c]=d;
console.log(personalMovieBD);

