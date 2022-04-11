import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";
// import { ResultCard } from "./ResultCard";
import { number } from "./Home";



export const ViewMore = () => {
    const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_KEY}`;
    const NOW_PLAYING_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
    const TOP_RATED_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;

    const [movies, setMovies] = useState([]);
    let API = ``
    function setAPI () {
        if(number === 1) {
            API = FEATURED_API
        } else if(number === 2) {
            API = NOW_PLAYING_API
        } else if(number === 3) {
            API = TOP_RATED_API
        }
    }
    function setTitle() {
        if(number === 1) {
            return 'Popular'
        } else if(number === 2) {
            return 'Now Playing'
        } else if(number === 3) {
            return 'Top Rated'
        }
    }

    useEffect(() => {
        setAPI()
        setTitle()
        getMovies(API)
    }, [])

    const setPage = (num) => {
        let pageNumber = num
        console.log(number)
        if(number === 1) {
            getMovies(FEATURED_API + `&page=${pageNumber}`)
            window.scroll(0,0)
        } else if (number === 2) {
            getMovies(NOW_PLAYING_API + `&page=${pageNumber}`)
            window.scroll(0,0)
        } else if (number === 3) {
            getMovies(TOP_RATED_API + `&page=${pageNumber}`)
            window.scroll(0,0)
        }
    }

    const getMovies = (ape) => {
        fetch(ape).then(res => res.json()).then(data => {
            setMovies(data.results);
        })
    }

    return (
        <>
        <h1 className="homeTitle">{setTitle()}</h1>
        <div className="movie-container">
            {movies.length > 0 &&
            movies.map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>
        <div className="pages">
            <div className="pagesNumber"><button onClick={() => setPage(1)}>1</button></div>
            <div className="pagesNumber"><button onClick={() => setPage(2)}>2</button></div>
            <div className="pagesNumber"><button onClick={() => setPage(3)}>3</button></div>
            <div className="pagesNumber"><button onClick={() => setPage(4)}>4</button></div>
            <div className="pagesNumber"><button onClick={() => setPage(5)}>5</button></div>
        </div>
        </>
    );
};