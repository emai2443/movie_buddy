import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";
import BtnSlider from './BtnSlider';
import { Link } from "react-router-dom";
// import { ResultCard } from "./ResultCard";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`;
const NOW_PLAYING_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
const TOP_RATED_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;

export let number = 1;
export const Home = () => {
  const [movies1, setMovies1] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const [movies3, setMovies3] = useState([]);

  
  const [slideIndex1, setSlideIndex1] = useState(1)
  const [slideIndex2, setSlideIndex2] = useState(1)
  const [slideIndex3, setSlideIndex3] = useState(1)

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies1(data.results);
        // console.log(data.results);
      })
    fetch(NOW_PLAYING_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies2(data.results);
    });
    fetch(TOP_RATED_API)
    .then((res) => res.json())
    .then((data) => {
      setMovies3(data.results);
    });
  }, []);


  const nextSlide1 = () => {
    if(slideIndex1 < 15) {
      setSlideIndex1(slideIndex1+5)
      } else if(slideIndex1 === 16) {
      setSlideIndex1(1)
    }
  }

  const prevSlide1 = () => {
    if(slideIndex1 === 1) {
      setSlideIndex1(16)
      } else {
      setSlideIndex1(slideIndex1-5)
    }
  }

  const nextSlide2 = () => {
    if(slideIndex2 < 15) {
      setSlideIndex2(slideIndex2+5)
      } else if(slideIndex2 === 16) {
      setSlideIndex2(1)
    }
  }

  const prevSlide2 = () => {
    if(slideIndex2 === 1) {
      setSlideIndex2(16)
      } else {
      setSlideIndex2(slideIndex2-5)
    }
  }

  const nextSlide3 = () => {
    if(slideIndex3 < 15) {
      setSlideIndex3(slideIndex3+5)
      } else if(slideIndex3 === 16) {
      setSlideIndex3(1)
    }
  }

  const prevSlide3 = () => {
    if(slideIndex3 === 1) {
      setSlideIndex3(16)
      } else {
      setSlideIndex3(slideIndex3-5)
    }
  }

  function testing(num) {
    console.log(num)
    number = num
  }

  return (
    <>
      <h1 className="homeTitle">Popular</h1>
      <div className='container-slider'>
          {movies1.map((movie,index) => {
              return(
              <div className={slideIndex1 === index + 1 ? "slide active-anim" : "slide movie"} key={movie.id}>
                  <Movie {...movie} />
                  <Movie {...movies1[index+1]} />
                  <Movie {...movies1[index+2]} />
                  <Movie {...movies1[index+3]} />
                  <Movie {...movies1[index+4]} />
              </div>
              )
          })}
          <BtnSlider moveSlide={nextSlide1} direction={"next"}/>
          <BtnSlider moveSlide={prevSlide1} direction={"prev"}/>
      </div>
      
      <h3 className="viewMore"><Link to={"/viewmore"} onClick={() => testing(1)}>View More...</Link></h3>
      <br/>
      


      <h1 className="homeTitle">Now Playing</h1>
      <div className='container-slider'>
        {movies2.map((movie,index) => {
            return(
            <div className={slideIndex2 === index + 1 ? "slide active-anim" : "slide movie"} key={movie.id}>
                <Movie {...movie} />
                <Movie {...movies2[index+1]} />
                <Movie  {...movies2[index+2]} />
                <Movie  {...movies2[index+3]} />
                <Movie  {...movies2[index+4]} />
            </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide2} direction={"next"}/>
        <BtnSlider moveSlide={prevSlide2} direction={"prev"}/>
      </div> 
      
      <h3 className="viewMore"><Link to={"/viewmore"} onClick={() => testing(2)}>View More...</Link></h3>
      <br/>
      

      <h1 className="homeTitle">Top Rated</h1>
        <div className='container-slider'>
        {movies3.map((movie,index) => {
            return(
            <div className={slideIndex3 === index + 1 ? "slide active-anim" : "slide movie"} key={movie.id}>
                <Movie {...movie} />
                <Movie {...movies3[index+1]} />
                <Movie  {...movies3[index+2]} />
                <Movie  {...movies3[index+3]} />
                <Movie {...movies3[index+4]} />
            </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide3} direction={"next"}/>
        <BtnSlider moveSlide={prevSlide3} direction={"prev"}/>
      </div> 
      
      <h3 className='viewMore'><Link to={"/viewmore"} onClick={() => testing(3)}>View More...</Link></h3>
      
    </>
  );
}; 