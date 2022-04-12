import React, { useEffect, useState }  from "react";

export const UserProfile = () => {
  const [movies, setMovies] = useState([]);

  return ( <>
    <div className="userPage">
      <div className="userPageContent"><img src="https://freesvg.org/img/abstract-user-flat-4.png" className="userIMG"/></div>
      <div className="userPageContent"><h1>Hello, User</h1></div>
      <div className="userPageContent">
        <div>Movies watched: </div>
        <div className="userNumber">20</div>
      </div>
      <div className="userPageContent">
        <div>Movies in watch list: </div>
        <div className="userNumber">14</div>
      </div>
    </div>
    <div className="userContent">
      <div className="flex">
        <div className="userPageContent">Watched List</div>
        <div className="userPageContent">Watch list</div>
      </div>
    </div>
  </>);
};
