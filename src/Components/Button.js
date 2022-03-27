import React from 'react';
import { Filter } from './Filter';

const BASE_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_KEY}`;
var TEST_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_KEY}`;
var selectedGenre = []


const buttonFunction = (e) => {
    //console.log(e.target.id);
    if(selectedGenre.length == 0) {
        selectedGenre.push(e.target.id);
    } else {
        if(selectedGenre.includes(e.target.id)){
            selectedGenre.forEach((id, idx) => {
                if(id == e.target.id) {
                selectedGenre.splice(idx, 1);
            }
        })
        } else {
        selectedGenre.push(e.target.id);
        }
    }
    
    TEST_API += '&with_genres=' + encodeURI(selectedGenre.join(','));
    console.log(selectedGenre)
    hightlightButton()
    
}

function clearBtn() {
    selectedGenre = [];
    TEST_API = BASE_API;
    const tags = document.querySelectorAll('.genreButton');
    tags.forEach(tag => {
        tag.classList.remove('highlight');
    })
}

function hightlightButton() {
    const tags = document.querySelectorAll('.genreButton');
    tags.forEach(tag => {
        tag.classList.remove('highlight');
    })
    // clearBtn();
    if(selectedGenre !== 0) {
        selectedGenre.forEach(id=> {
            const highlightedTag = document.getElementById(id);
            highlightedTag.classList.add('highlight');
        })
    }
}


const Bttn = ({id,name}) => {
    return(
        <div className="buttonDiv">
            <button id={id} onClick={buttonFunction} className='genreButton'>{name}</button>
        </div>
    );
}

export default Bttn;
export {TEST_API, clearBtn, selectedGenre};