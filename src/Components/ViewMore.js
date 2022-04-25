import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";
// import { ResultCard } from "./ResultCard";
import { number } from "./Home";


var API = ``

export const ViewMore = () => {
    const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_KEY}&vote_average.gte=7&vote_average.lte=10`;
    const NOW_PLAYING_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&vote_average.gte=4`;
    const TOP_RATED_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;



    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(3)
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

    const getMovies = (ape) => {
        fetch(ape).then(res => res.json()).then(data => {
            setMovies(data.results);
        })
    }

    const changePage = (numb) => {
        if(numb === 1) {
            if(page-2 === 2)  {
                setPage(3)
                console.log(3)
                console.log('tess')
            }else if(page-2 != 1) {
                setPage(page-2)
                console.log(page-2)
            }
            else {
                console.log(page-2)
            }
        } else if (numb === 2) {
            if(page-1 != 2) {
                setPage(page-1)
                console.log(page-1)
            } else {
                console.log(page-1)
            }
        } else if (numb === 3) {
            console.log(page)
        } else if (numb === 4) {
            setPage(page+1)
            console.log(page+1)
        } else if (numb === 5) {
            setPage(page+2)
            console.log(page+2)
        } else if(numb === 0) {
            setPage(3)
            console.log(3)
        }
    }

    const loadPage = (numbb) => {
        if(numbb === 1) {
            if(page-2 != 1) {
                getMovies(API + `&page=${page-2}`)
                window.scroll(0,0)
            } else if(page-2 === 2){
                getMovies(API + `&page=2`)
                window.scroll(0,0)
            }
            else {
                getMovies(API + `&page=1`)
                window.scroll(0,0)
            }
        } else if(numbb === 2) {
            if(page-1 != 2) {
                getMovies(API + `&page=${page-1}`)
                window.scroll(0,0)
            } else {
                getMovies(API + `&page=2`)
                window.scroll(0,0)
            }
        } else if(numbb === 3) {
            if(page != 3) {
                getMovies(API + `&page=${page}`)
                window.scroll(0,0)
            } else {
                getMovies(API + `&page=3`)
                window.scroll(0,0)
            }
        } else if(numbb === 4) {
            getMovies(API + `&page=${page+1}`)
            window.scroll(0,0)
        } else if(numbb === 5) {
            getMovies(API + `&page=${page+2}`)
            window.scroll(0,0)
        } else if (numbb === 0) {
            getMovies(API + `&page=1`)
            window.scroll(0,0)
        }
    }

    return (
        <>
        <h1 className="homeTitle">{setTitle()}</h1>
        <div className="movie-container">
            {movies.length > 0 &&
            movies.map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>
        <div className="pages">
            <div className={"pagesNumber" + `${page}`}><button className="pageButton" onClick={()=>(changePage(0),loadPage(0))}>First</button></div>
            <div className="pagesNumber"><button className="pageButton" onClick={()=>(changePage(1),loadPage(1))}>{page-2}</button></div>
            <div className="pagesNumber"><button className="pageButton" onClick={()=>(changePage(2),loadPage(2))}>{page-1}</button></div>
            <div className="pagesNumber"><button className="pageButton" onClick={()=>(changePage(3),loadPage(3))}>{page}</button></div>
            <div className="pagesNumber"><button className="pageButton" onClick={()=>(changePage(4),loadPage(4))}>{page+1}</button></div>
            <div className="pagesNumber"><button className="pageButton" onClick={()=>(changePage(5),loadPage(5))}>{page+2}</button></div>
        </div>
        </>
    );
};