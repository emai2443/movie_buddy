import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";
import { Link } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { ResultCard } from "./ResultCard";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_KEY}&page=1&vote_average.gte=7&vote_average.lte=10`;
const NOW_PLAYING_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;
const TOP_RATED_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;

export let number = 1;
export const Home = () => {

  const [movies1, setMovies1] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const [movies3, setMovies3] = useState([]);

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


  function testing(num) {
    // console.log(num)
    number = num
  }

  return (
    <>
      <h1 className="homeTitle">Popular</h1>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >
        {movies1.length > 0 && movies1.map((movie)=> 
        <SwiperSlide><Movie key={movie.id} {...movie}/></SwiperSlide>)}
      </Swiper>
      
      <h2 className="viewMore"><Link to={"/viewmore"} onClick={() => testing(1)}>View More...</Link></h2>
      <br/>


      <h1 className="homeTitle">Now Playing</h1>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >
        {movies2.length > 0 && movies2.map((movie)=> 
        <SwiperSlide><Movie key={movie.id} {...movie}/></SwiperSlide>)}
      </Swiper>
      
      <h2 className="viewMore"><Link to={"/viewmore"} onClick={() => testing(2)}>View More...</Link></h2>
      <br/>
      

      <h1 className="homeTitle">Top Rated</h1>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >

        {movies3.length > 0 && movies3.map((movie)=> 
        <SwiperSlide><Movie key={movie.id} {...movie}/></SwiperSlide>)}
      </Swiper>
      
      <h2 className='viewMore'><Link to={"/viewmore"} onClick={() => testing(3)}>View More...</Link></h2>
      
    </>
  );
}; 