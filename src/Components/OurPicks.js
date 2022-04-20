import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";


export const OurPicks = () => {
    const [movies, setMovies] = useState([]);
    const API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_KEY}`;

    useEffect(() => {
        getMovies(API)
    }, [])

    const getMovies = (ape) => {
        fetch(ape).then(res => res.json()).then(data => {
            setMovies(data.results);
        })
    }


    if(movies) {
        console.log(movies[0])
    }

    return (
    <>  
        Our Picks<br/>
        <button>Number</button>
        <div className="movie-container">
            {/* {movies.length > 0 &&
            movies.map((movie) => <Movie key={movie.id} {...movie} />)} */}
        </div>
    </>
)
};