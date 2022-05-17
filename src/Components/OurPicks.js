import React, { useState, useEffect } from 'react';
import { Account } from "./Account";
import Status from "./Status";
import { Movie } from './Movie';

import { API } from 'aws-amplify';
import { listTodos } from '../graphql/queries';
import { createTodo as createNoteMutation, deleteTodo as deleteNoteMutation } from '../graphql/mutations';

const initialFormState = { name: '', description: '' }

// let movieData = {"name": String(num), "description": String(num)}
// await API.graphql({ query: createNoteMutation, variables: { input: movieData } });
// setNotes([ ...notes, movieData ]);


export const OurPicks = () => {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [movies, setMovies] = useState([]);

  let number = 123

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listTodos });
    setNotes(apiData.data.listTodos.items);
    getMovies(apiData.data.listTodos.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }

  async function createMovie() {
    let movieData = {"name": number}
    await API.graphql({ query: createNoteMutation, variables: { input: movieData } });
    setNotes([ ...notes, movieData ]);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
  }

  function getMovies(items) {
    items.length > 0 &&
      items.map((movie) => {
        console.log(movie.name)
        let getAPI = `https://api.themoviedb.org/3/movie/${movie.name}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

        fetch(getAPI)
        .then((res) => res.json())
        .then((data) => {
          // setMovies(data);
          setMovies(movies=>[...movies, data])
          // console.log(data)
      });
    })

    cleanMovies()
  }
  let container = []

  function cleanMovies() {
    movies.length > 0 && movies.map((movie)=> {
      if(container.indexOf(movie) != -1) {
        console.log('hello')
        // container.push(movie)
      }
    })
    console.log('ww')
  }


  function printdata() {
    console.log(movies)
  }

  return (
    <>
    <Account>
    <div className="App">
      <h1 className="filterTitle">Watch/Watched List</h1>
    </div>

    {/* <button onClick={()=>printdata()}>DATA</button> */}
    <div className='movie-container'>
        {movies.length > 0 &&
            movies.map((movie) => (
              <Movie key={movie.id} {...movie} />
        ))}
    </div>

    <Status/>
    </Account>
    </>
  );
};
