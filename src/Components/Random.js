import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";


export const Random = () => {
  const [movies, setMovies] = useState([]);
  var latest_id = 600000;

  let random = Math.floor(Math.random() * (latest_id - 1) + 500000);
  var RANDOM_API = `https://api.themoviedb.org/3/movie/${random}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&adult=false`;
  
  let page = Math.floor(Math.random() * (10) + 1)
  let TEST_API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=${page}&sort_by=popularity.desc`

  useEffect(() => {
    getMovies(TEST_API)
  }, []);

  const getMovies = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        // console.log(data.results);
        // console.log(data.results);
      });
  }


  var arr = [];
  while(arr.length < 8){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
  }


  let num1 = Math.floor(Math.random() * (19) + 1)
  let num2 = Math.floor(Math.random() * (19) + 1)
  let num3 = Math.floor(Math.random() * (19) + 1)
  let num4 = Math.floor(Math.random() * (19) + 1)
  let num5 = Math.floor(Math.random() * (19) + 1)

  num1 = arr[0]
  num1 = arr[1]
  num1 = arr[2]
  num1 = arr[3]
  num1 = arr[4]



  return (
    <>
      <div>Random webpage</div>
      <div className="movie-container">
      {/* {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
        ; */}
        {/* {movies.map((movie) => <Movie key={movie.id}{...movie}/>)} */}
        <Movie key={num1} {...movies[num1]}/>
        <Movie key={num2} {...movies[num2]}/>
        <Movie key={num3} {...movies[num3]}/>
        <Movie key={num4} {...movies[num4]}/>
        <Movie key={num5} {...movies[num5]}/>
      </div>
    </>
  );
};
