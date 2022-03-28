import React,{useEffect,useState} from 'react';
import { Movie } from './Movie';
import {genres} from './Genres';
import ButtonList from './ButtonList';
import { TEST_API, clearBtn } from './Button';



export const Filter = () => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    clearBtn()
    filter()
  }, [])

  const getMovies = (url) => {
    fetch(url).then(res => res.json()).then(data => {
      if(data.results.length !== 0) { //If there are movies with selected genre, show them
        setMovies(data.results);
        let v = document.getElementById('emptyResult')
        v.innerHTML = ``;
      } else { //If no movies with selected genre, show message "No Results"
        setMovies(data.results);
        let v = document.getElementById('emptyResult')
        v.innerHTML = `<h1 class="no-result">No Results</h1>`;
        //console.log('empty!');
        // setMovies([])
      }

    })
  }

  const filter = () => {
    getMovies(TEST_API)
  }

  return (<div>
    <h1 className='filterTitle'>Filters</h1>
    <ButtonList genres={genres} />
    <div className='filterACButton'>
      <div className='filterButton'><button onClick={() => filter()} className='applyButton'>Apply</button></div>
      <div className='filterButton'><button onClick={() => (clearBtn(),filter())} className='applyButton'>Clear x</button></div>
    </div>
    <div id='emptyResult'></div>
    <div className='movie-container'>
      {movies.length > 0 && movies.map((movie)=> 
      <Movie key={movie.id} {...movie}/>)}
    </div>
  </div>);
}