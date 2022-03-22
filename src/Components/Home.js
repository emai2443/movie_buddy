import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";
// import { ResultCard } from "./ResultCard";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`;
const NOW_PLAYING_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
const TOP_RATED_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const [movies3, setMovies3] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        // console.log(data.results);

        console.log(movies);
      });
  });

  useEffect(() => {
    fetch(NOW_PLAYING_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies2(data.results);
        // console.log(data.results);

        console.log(movies2);
      });
  });

  useEffect(() => {
    fetch(TOP_RATED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies3(data.results);
        // console.log(data.results);

        console.log(movies3);
      });
  });

  return (
    <>
      <h1 className="homeTitle">Popular Movies</h1>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
        ;
      </div>
      <h1 className="homeTitle">Now Playing</h1>
      <div className="movie-container">
        {movies2.length > 0 &&
          movies2.map((movie) => <Movie key={movie.id} {...movie} />)}
        ;
      </div>
      <h1 className="homeTitle">Top Rated Movies</h1>
      <div className="movie-container">
        {movies3.length > 0 &&
          movies3.map((movie) => <Movie key={movie.id} {...movie} />)}
        ;
      </div>
    </>
  );
};
