import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";

export const Random = () => {
  const [movies, setMovies] = useState([]);
  var latest_id = 600000;

  let random = Math.floor(Math.random() * (latest_id - 1) + 500000);
  var RANDOM_API = `https://api.themoviedb.org/3/movie/${random}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&adult=false`;

  let page = Math.floor(Math.random() * 10 + 1);
  let TEST_API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=${page}&sort_by=popularity.desc`;

  useEffect(() => {
    getMovies(TEST_API);
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

  let num = Math.floor(Math.random() * (19) + 1)
  console.log(movies[num])



  return (
    <>
      <div></div>
      <div className="movie-container">
        {/* {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
        ; */}
        {/* {movies.map((movie) => <Movie key={movie.id}{...movie}/>)} */}
        <Movie key={num} {...movies[num]}/>
      </div>
    </>
  );
};
