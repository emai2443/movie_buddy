import React, { useEffect, useState } from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 6) {
        return "orange";
    } else {
        return "red";
    }
};

const setLanguage = (word) => {
    if (word == "en") {
        return "English";
    } else if (word == "ja") {
        return "Japanese";
    } else if (word == "ru") {
        return "Russian";
    } else if (word == "es") {
        return "Spanish";
    } else if (word == "hi") {
        return "Hindi";
    } else if (word == "ko") {
        return "Korean";
    } else if (word == "zh") {
        return "Mandarin";
    } else if (word == "fr") {
        return "French";
    } else {
        return word;
    }
};

const myPrint = (id) => {
    console.log(id);
};

export const RandomMovie = ({title,poster_path,overview,vote_average,id,release_date,original_language,}) => {
    const ACTOR_API = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
    const [actors, setActors] = useState([]);
    let temp = ":("

    useEffect(()=> (
        fetch(ACTOR_API).then((res) => res.json()).then((data) => {
            setActors(data.cast)
        })
    ),[])

    if(actors) {
        ceae()
    }

    function ceae() {
        let arr = []
        actors.forEach(word=> {
            arr.push(word.name)
        })
        // console.log(arr)
        temp = arr.slice(0,10).join(', ')
    }

    return(
        <>
        <div className="randomContainer">
        <div className="randomImage">
            <img
            src={
                poster_path
                ? IMG_API + poster_path
                : "https://images.unsplash.com/photo-1620177088258-c84147ee601f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt={title}
            />
        </div>
        <div className="randomInfo">
            <div className="flex">
            <div className="randomTitle">
                <h2>{title}</h2>
            </div>
            <div className="randomTitle">
                <span className={`tag ${setVoteClass(vote_average)}`}>
                {vote_average}
                </span>
            </div>
            </div>
            <p>Release date: {release_date}</p>
            <p>Language: {setLanguage(original_language)}</p>
            <p>Actors: {temp}</p>
            <p>Overview: {overview}</p>
        </div>
        <div className="randomRating">
            <div className="watchButton ratingIcon">
            <a onClick={() => myPrint(id)}>
                <button type="button" className="button-5">
                <i className="fa-solid fa-plus fa-lg"></i>
                </button>
            </a>
            </div>
            <div className="watchButton ratingIcon">
            <a onClick={() => myPrint()}>
                <button type="button" className="button-5">
                <i className="fa-solid fa-eye fa-lg"></i>
                </button>
            </a>
            </div>
        </div>
        </div>
    </>);
}