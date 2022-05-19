import React, { useEffect, useState } from "react";
// import "https://kit.fontawesome.com/afb5c9b5bb.js"; //Button Icons
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { CardMedia } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";

import { API } from "aws-amplify";
import { createTodo as createNoteMutation } from "../graphql/mutations";
import { listTodos } from "../graphql/queries";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const style = {
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "25%",
  transform: "translate(-50%, -50%)",
  width: 600,
};

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
  } else {
    return word;
  }
};

const convertDate = (date) => {
  var now = new Date(date).toUTCString();
  now = now.slice(5, now.indexOf("00:"));
  let month = now.slice(3, 6);
  let day = now.slice(0, 3);
  let year = now.slice(7, -1);
  return month + " " + day + " " + year;
};

// const myPrint = (id) => {
//   console.log(id);
// };
export const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
  id,
  release_date,
  original_language,
}) => {
  const ACTOR_API = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
  const MOVIE_API = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
  const SIMILAR_API = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
  const [actors, setActors] = useState([]);
  const [genre, setGenre] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    checkMovie();
  };
  const handleClose = () => setOpen(false);
  let actorList = ":(";
  let genreList = ">:(";

  // const [formData, setFormData] = useState(initialFormState);

  useEffect(() => (fetchActors(), fetchGenres(), fetchSimilar()), []);

  function fetchActors() {
    fetch(ACTOR_API)
      .then((res) => res.json())
      .then((data) => {
        setActors(data.cast);
      });
  }

  const [openSnack, setOpenSnack] = React.useState(false);
  const handleClickSnack = () => {
    setOpenSnack(true);
  };
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  const [openSnack2, setOpenSnack2] = React.useState(false);
  const handleClickSnack2 = () => {
    setOpenSnack2(true);
  };
  const handleCloseSnack2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack2(false);
  };

  const [movieCheck, setMovieCheck] = useState(false);

  async function checkMovie() {
    const apiData = await API.graphql({ query: listTodos });
    let movieData = apiData.data.listTodos.items;

    movieData.length > 0 &&
      movieData.map((movie) => {
        if (movie.name === id) {
          setMovieCheck(true);
        }
      });
    // if(movieCheck) {
    //   console.log('exists')
    // }
  }

  function fetchGenres() {
    fetch(MOVIE_API)
      .then((res) => res.json())
      .then((data) => {
        setGenre(data.genres);
      });
  }

  function fetchSimilar() {
    fetch(SIMILAR_API)
      .then((res) => res.json())
      .then((data) => {
        setSimilar(data.results);
      });
  }

  if (actors) {
    makeActors();
  }

  if (genre) {
    makeGenres();
  }

  async function createMovie(id, movieName) {
    const apiData = await API.graphql({ query: listTodos });
    let data = apiData.data.listTodos.items;

    var check = false;

    data.length > 0 &&
      data.map((movie) => {
        if (movie.name === id) {
          check = true;
        }
      });

    if (check === false) {
      let movieData = { name: id };
      // let movieData = {"user": "ulu@gmail.com", "movieId": id}
      await API.graphql({
        query: createNoteMutation,
        variables: { input: movieData },
      });
      // console.log(movieData)
      // await API.graphql({ query: createNoteMutation, variables: { input: movieData } });
      // setNotes([ ...notes, movieData ]);
      // console.log(movieData)
      setMovieCheck(true);
      handleClickSnack();
    } else {
      handleClickSnack2();
    }
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
    });
    genreList = arr.join(", ");
  }

  return (
    <>
      <div className="movie">
        <div className="movie-header">
          <img
            src={
              poster_path
                ? IMG_API + poster_path
                : "https://images.unsplash.com/photo-1620177088258-c84147ee601f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt={title}
            onClick={handleOpen}
          />
          <div className="movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>
              {vote_average}
            </span>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div id={id}>
              <div className="modal-content">
                <div className="randomImage">
                  <CardMedia
                    style={{
                      width: "300px",
                      height: "480px",
                    }}
                    component="img"
                    image={
                      poster_path
                        ? IMG_API + poster_path
                        : "https://images.unsplash.com/photo-1620177088258-c84147ee601f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    }
                    title={title}
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
                    <a onClick={() => createMovie(id, title)}>
                      <button type="button" className="button-5">
                        {movieCheck ? <StarIcon /> : <StarBorderIcon />}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <Snackbar
        open={openSnack}
        autoHideDuration={4000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity="success"
          sx={{ width: "100%" }}
        >
          {title} added!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSnack2}
        autoHideDuration={4000}
        onClose={handleCloseSnack2}
      >
        <Alert
          onClose={handleCloseSnack2}
          severity="info"
          sx={{ width: "100%" }}
        >
          {title} is already added!
        </Alert>
      </Snackbar>
    </>
  );
};
