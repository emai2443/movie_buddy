import React, {useState, useEffect, useContext,} from "react";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Movie } from "./Movie";

export const OurPicks = () => {
  let ulu = [634649 ,299536 ,414906 ,810693 ,317442 ,293660 ,324857 ,1726 ,584 ,9502 ,207703 ,607 ,284054 ,585 ,339403 ,862 ,100402 ,557 ,157336 ,118406]
  let eric = [414906,372058,238,532067,634649,647,129,756,791373,497,496450,475557,558,293670,15165,9470,14756,508965,487558,12477]
  let rich = [568012, 453395, 383498, 37165, 105, 6977, 809, 58, 631132, 324857, 470035, 11770, 50546, 424694, 168259, 9806, 38055, 310, 9928, 98 ]
  
  const [alignment, setAlignment] = React.useState('left');
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies();
  }, []);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    changeMovies(newAlignment)
  };

  function changeMovies(newAlignment) {
    if(newAlignment === "left" ) {
      getMovies("richard")
    } else if (newAlignment === "center") {
      getMovies("eric")
    } else if (newAlignment === "right") {
      getMovies("ulukbek")
    }
  }

  function getMovies(name) {
    let selected = rich
    if(name === "richard") {
      selected = rich
    } else if(name === "eric") {
      selected = eric
    } else if(name === "ulukbek") {
      selected = ulu
    }
    setMovies([])
    selected.length > 0 &&
    selected.map((movie) => {
      let getAPI = `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

      fetch(getAPI)
      .then((res) => res.json())
      .then((data) => {
        setMovies(movies=>[...movies, data])
    });
    })
  }

  return (
    <>
    <div className="filterTitle">
      
    <h1>Our Picks</h1>
    <br/>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{
          backgroundColor: "#ffffff",
          color: 'success.main',
        }}
      >
        <ToggleButton value="left" aria-label="left aligned">
          Richard
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          Eric
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          Ulukbek
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
    <div className='movie-container'>
        {movies.length > 0 &&
            movies.map((movie) => (
              <>
                <Movie key={movie.id} {...movie} />
              </>
            ))}
    </div>
    </>
  );
};
