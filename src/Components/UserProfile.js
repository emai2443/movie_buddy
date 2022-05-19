import React, { useState, useEffect } from 'react';
import { Account } from "./Account";
import Status from "./Status";
import { Favorites } from './Favorites';

import { API } from 'aws-amplify';
import { listTodos } from '../graphql/queries';

export const UserProfile = () => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listTodos });
    getMovies(apiData.data.listTodos.items);
  }

  function getMovies(items) {
    items.length > 0 &&
      items.map((movie) => {
        let getAPI = `https://api.themoviedb.org/3/movie/${movie.name}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

        fetch(getAPI)
        .then((res) => res.json())
        .then((data) => {
          setMovies(movies=>[...movies, data])
      });
    })
  }

  let total = 0
  if(movies) {
    total = movies.length
  }

  return ( <>
    <Account>
      <Status />
    <div className="userPage">
      <div className="userPageContent"><img src="https://freesvg.org/img/abstract-user-flat-4.png" className="userIMG"/></div>
      <div className="userPageContent"><h1>Hello, User</h1></div>
      <div className="userPageContent">
        <div>Favorites: </div>
        <div className="userNumber">{total}</div>
      </div>
    </div>
    <div className="userContent">
    <div className='movie-container'>
        {movies.length > 0 &&
            movies.map((movie) => (
              <>
                <Favorites key={movie.id} {...movie} />
              </>
            ))}
    </div>

    </div>
    
    </Account>
  </>);
};
