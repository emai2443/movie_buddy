import React,{useEffect,useState} from 'react';

export const OurPicks = () => {
    const [movies, setMovies] = useState([]);
    const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_KEY}&page=1&vote_average.gte=7&vote_average.lte=10`;
    
    useEffect(() => {
        getMovies(FEATURED_API)
    }, [])

    const getMovies = (url) => {
        fetch(url).then(res => res.json()).then(data => {
            setMovies(data.results);
        })
    
    }
return (
    <>  
        Our Picks<br/>
    </>
)
};