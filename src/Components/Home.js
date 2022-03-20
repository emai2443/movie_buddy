import React, {useEffect,useState} from 'react';
import { Movie } from './Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4f2efbc6d360da7dfad19dd3d13f1d09&page=1"; 
export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(FEATURED_API).then(res => res.json())
        .then(data => {
            setMovies(data.results);
                // console.log(data.results);

                console.log(movies);
        });
    },[]);
    return(
        <div className='movie-container'>
            {movies.length > 0 && movies.map((movie)=> 
            <Movie key={movie.id} {...movie}/>)};
        </div>
    )
    
};
