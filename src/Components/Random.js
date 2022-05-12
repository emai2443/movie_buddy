import React, { useEffect, useState } from "react";
import { RandomMovie } from "./RandomMovie";
import { Account } from "./Account";
import Status from "./Status";

export const Random = () => {



  const [movies, setMovies] = useState([]);

  let page = Math.floor(Math.random() * 10 + 1);
  let TEST_API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=${page}&sort_by=popularity.desc&vote_average.gte=7&vote_average.lte=10`;

  useEffect(() => {
    getMovies(TEST_API);
  }, []);

  let num1 = Math.floor(Math.random() * 19 + 1);

  const reroll = () => {
    page = Math.floor(Math.random() * 10 + 1);
    num1 = Math.floor(Math.random() * 19 + 1);

    if (page === 9 && num1 === 10) {
      reroll();
      console.log("worked1");
    } else if (page === 8 && num1 === 9) {
      reroll();
      console.log("worked2");
    } else {
      getMovies(TEST_API);
    }
  };

  const getMovies = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };



  return (
    <>
      <Account>
        <Status />
        <div></div>
        <div className="movie-container">
          <RandomMovie key={num1} {...movies[num1]} />
        </div>
        <div className="refreshButton">
          <button className="applyButton" onClick={() => reroll()}>
            Refresh
          </button>
        </div>
      </Account>
    </>
  );
};
