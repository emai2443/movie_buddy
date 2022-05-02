import React, { useState } from "react";
import { ResultCard } from "./ResultCard";
import { Account } from "./Account";
import Status from "./Status";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
          console.log(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <Account>
      <Status />
      <div className="add-page">
        <div className="container">
          <div className="add-content">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        {movies.length > 0 && (
          <div className="movie-container">
            {movies.map((movie) => (
              <div key={movie.id}>
                <ResultCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Account>
  );
};
