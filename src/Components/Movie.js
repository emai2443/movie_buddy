import React from "react";
import "https://kit.fontawesome.com/afb5c9b5bb.js"; //Button Icons

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const myPrint = () => {
  console.log("test");
};
// const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

export const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    <div className="movie-header">
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : "https://images.unsplash.com/photo-1620177088258-c84147ee601f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
    </div>

    <div className="movie-over">
      <h2>Summary:</h2>
      <p>{overview}</p>
      <div className="buttons">
        <div className="watchButton">
          <a onClick={() => myPrint()}>
            <button type="button" className="button-5">
              <i className="fa-solid fa-plus fa-lg"></i>
            </button>
          </a>
        </div>
        <div className="watchButton">
          <a onClick={() => myPrint()}>
            <button type="button" className="button-5">
              <i className="fa-solid fa-eye fa-lg"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);
