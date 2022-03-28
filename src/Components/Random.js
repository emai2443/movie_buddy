import React,{ useEffect, useState } from 'react'
import { Movie } from './Movie';

const LATEST_API = `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`


export const Random = () => {
  const [movies, setMovies] = useState([]);
  var latest_id = 955389;

  let random = Math.floor(Math.random() * (latest_id - 1) + 1)
  var RANDOM_API = `https://api.themoviedb.org/3/movie/${random}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

  //implementation:
  //movie details are console logged
  //couldn't figure out how to get movie vote_average
  //
  //want to get random movie -> check if movie's rating is >5
                          // -> if not -> get a new random movie




  // function randomMovie() {

  //   check()
  // }


  // function check() {

  // }

  useEffect(() => {
    fetch(RANDOM_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        // console.log(data.results);
        console.log(data)
      });
  }, []);




// const getMovies = (url) => {
//   fetch(url).then(res => res.json()).then(data => {
//     if(data.results.length !== 0) { //If there are movies with selected genre, show them
//       setMovies(data.results);
//       let v = document.getElementById('emptyResult')
//       v.innerHTML = ``;
//     } else { //If no movies with selected genre, show message "No Results"
//       setMovies(data.results);
//       let v = document.getElementById('emptyResult')
//       v.innerHTML = `<h1 class="no-result">No Results</h1>`;
//       //console.log('empty!');
//       // setMovies([])
//     }

//   })
// }


  return (<>
      <div>Random webpage</div>
      <div className="movie-container">
        <Movie {...movies} />
      </div>
    </>)
};
