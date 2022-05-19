import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
// import { Watchlist } from "./Watchlist";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

// const myPrint = (id) => {
//   console.log(id)
// };

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);
  let storedMovie = watchlist.find((o) => o.id === movie.id);
  const watchlistDisabled = storedMovie ? true : false;
  return (
    <div className="movie">
      <div className="movie-header">
        <div className="poster_wrapper">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          ) : (
            <div>
              <img src="https://images.unsplash.com/photo-1620177088258-c84147ee601f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
          )}
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <span className={`tag ${setVoteClass(movie.vote_average)}`}>
            {movie.vote_average}
          </span>
        </div>
      </div>
      <div className="movie-over">
        <h2>Summary:</h2>
        <p>{movie.overview}</p>
        <div className="buttons">
          <div className="watchButton">
            <button
              type="button"
              className="button-5"
              disabled={watchlistDisabled}
            >
              <i className="fa-solid fa-plus fa-lg"></i>
            </button>
          </div>
          <div className="watchButton">
            <button type="button" className="button-5">
              <i className="fa-solid fa-eye fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
