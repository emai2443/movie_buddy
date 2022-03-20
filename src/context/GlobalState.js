import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};
//create the context
export const GlobalContext = createContext(initialState);
//provider component  which allows us to access the global context
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState); //const of state and we wneed to put it in dispatch We will use a reducer

  //actions:when we click the button we give an action to tell it what to do upon clicking.
  const addMovieToWatchlist = (movie) => {
    //we will make a function that is provided with our movie data
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie }); //we will dispatch a type which is ADD_MOVIE_TO_WATCHLIST with payload being movie data.
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
