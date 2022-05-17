import React, { useEffect, useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import { API } from 'aws-amplify';
import { createTodo as createNoteMutation} from '../graphql/mutations';
import { listTodos } from '../graphql/queries';

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

const setLanguage = (word) => {
  if (word === "en") {
    return "English";
  } else if (word === "ja") {
    return "Japanese";
  } else if (word === "ru") {
    return "Russian";
  } else if (word === "es") {
    return "Spanish";
  } else if (word === "hi") {
    return "Hindi";
  } else if (word === "ko") {
    return "Korean";
  } else if (word === "zh") {
    return "Mandarin";
  } else if (word === "fr") {
    return "French";
  } else if (word === "th") {
    return "Thai";
  } 
  
  else {
    return word;
  }
};

const convertDate = (date) => {
  var now = new Date(date).toUTCString()
  now = now.slice(5,now.indexOf('00:'))
  let month = now.slice(3,6)
  let day = now.slice(0,3)
  let year = now.slice(7,-1)
  return month + " " + day + " " + year
}

const myPrint = (id) => {
  console.log(id);
};

export const RandomMovie = ({title, poster_path, overview, vote_average, id, release_date, original_language}) => {
  const ACTOR_API = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
  const MOVIE_API = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  const [actors, setActors] = useState([]);
  const [genre, setGenre] = useState([]);
  let actorList = ":("; 
  let genreList = ">:(";

  useEffect(() => (
    fetchActors(),
    fetchGenres()), []
  );

  function fetchActors() {
    fetch(ACTOR_API).then((res) => res.json()).then((data) => {
      setActors(data.cast);
    })
  }

  function fetchGenres() {
    fetch(MOVIE_API).then((res) => res.json()).then((data)=> {
      setGenre(data.genres);
    })
  }

  if (actors) {
    makeActors();
  }

  if (genre) {
    makeGenres();
  }

  function makeActors() {
    let arr = [];
    actors.forEach((word) => {
      arr.push(word.name);
    });
    actorList = arr.slice(0, 10).join(", ");
  }

  function makeGenres() {
    let arr = [];
    genre.forEach((word) => {
      arr.push(word.name);
    })
    genreList = arr.join(', ')
  }

  async function createMovie(id,movieName) {
    const apiData = await API.graphql({ query: listTodos });
    let data = apiData.data.listTodos.items
    var check = false

    data.length > 0 &&
    data.map((movie) => {
        if(movie.name === id) {
          check = true
        }
      })
    
    if(check === false) {
      let movieData = {"name": id}
      await API.graphql({ query: createNoteMutation, variables: { input: movieData } });
      // setNotes([ ...notes, movieData ]);
      alert(movieName + " added")
    } else {
      alert("Movie already added")
    }
  }

  return (
    <>
      <div className="randomContainer">
        <div className="randomImage">
          <img
            src={
              poster_path
                ? IMG_API + poster_path
                : "https://images.unsplash.com/photo-1620177088258-c84147ee601f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt={title}
          />
        </div>
        <div className="randomInfo">
          <div className="flex margin">
            <div className="randomTitle">
              <h2>{title}</h2>
            </div>
            <div className="randomTitle">
              <span className={`tag ${setVoteClass(vote_average)}`}>
                {vote_average}
              </span>
            </div>
          </div>
          <p>Release date: {convertDate(release_date)}</p>
          <p>Language: {setLanguage(original_language)}</p>
          <p>Genres: {genreList}</p>
          <p>Actors: {actorList}</p>
          <p>Overview: {overview}</p>
        </div>
        <div className="randomRating">
          <div className="watchButton ratingIcon">
            <a onClick={() => myPrint(id)}>
              <button type="button" className="button-5">
                {/* <i className="fa-solid fa-plus fa-lg"></i> */}
                <AddIcon/>
              </button>
            </a>
          </div>
          <div className="watchButton ratingIcon">
            <a onClick={() => createMovie(id,title)}>
              <button type="button" className="button-5">
                {/* <i className="fa-solid fa-eye fa-lg"></i> */}
                
                <VisibilityIcon/>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
