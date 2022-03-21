import React, {useEffect,useState} from 'react';
import { Movie } from './Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4f2efbc6d360da7dfad19dd3d13f1d09&page=1"; 
const KIDS_MOVIES_API = "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=4f2efbc6d360da7dfad19dd3d13f1d09&page=1"
export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [movies2, setMovies2] = useState([]);

    useEffect(() => {
        fetch(FEATURED_API).then(res => res.json())
        .then(data => {
            setMovies(data.results);
                // console.log(data.results);

                console.log(movies);
        }
        
        );
    }
    
    ,[]);

    useEffect(() => {
        fetch(KIDS_MOVIES_API).then(res => res.json())
        .then(data => {
            setMovies2(data.results);
                console.log(data.results);

                console.log(movies2);
        }
        
        );
    }
    
    ,[]);

    return(
        <>
        <h1 className='homeTitle'>Popular Movies</h1>
            <div className='movie-container'>
                {movies.length > 0 && movies.map((movie)=> 
                <Movie key={movie.id} {...movie}/>)};
            </div>
        <h1 className='homeTitle'>Kids Movies</h1>
            <div className='movie-container'>
                {movies2.length > 0 && movies2.map((movie)=> 
                <Movie key={movie.id} {...movie}/>)};
            </div>
        </>
    )
    
};
