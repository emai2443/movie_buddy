import React, { useEffect, useState } from 'react'
import { Movie } from './Movie';
import BtnSlider from './BtnSlider';

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`;
export const OurPicks = () => {
    const [movies, setMovies] = useState([]);
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex < 15) {
        setSlideIndex(slideIndex+5)
        } else if(slideIndex == 16) {
        setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex === 1) {
        setSlideIndex(16)
        } else {
        setSlideIndex(slideIndex-5)
        }
    }

    useEffect(() => {
      fetch(FEATURED_API)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
          console.log(data.results);
  
          //console.log(movies);
        });
    }, []);

    return (
    <>
    <div className='container-slider'>
        {movies.map((movie,index) => {
            return(
            <div className={slideIndex == index + 1 ? "slide active-anim" : "slide movie"} key={movie.id}>
                <Movie key={movie.id} {...movie} />
                <Movie key={movie.id} {...movies[index+1]} />
                <Movie key={movie.id} {...movies[index+2]} />
                <Movie key={movie.id} {...movies[index+3]} />
                <Movie key={movie.id} {...movies[index+4]} />
            </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"}/>
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
    </div> 
    </>
)
};
