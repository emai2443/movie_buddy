import React, { useEffect, useContext, useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Watchlist } from "./Components/Watchlist";
import { Watched } from "./Components/Watched";
import { User } from "./Components/User";
import { Home } from "./Components/Home";
import { Random } from "./Components/Random";
import { Filter } from "./Components/Filter";
import { Search } from "./Components/Search";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
import Register from "./Components/Register";
import Signin from "./Components/SignIn";
import { LandingPage } from "./Components/LandingPage";
import { userContext } from "./Components/UserContext";
import "./App.css";
import { OurPicks } from "./Components/OurPicks";
import { UserProfile } from "./Components/UserProfile";
import { ViewMore } from "./Components/ViewMore";

// import Amplify, { API } from 'aws-amplify';
// import awsconfig from './aws-exports';
// import Amplify, { Auth, API } from 'aws-amplify';




function App() {
  const [value, setValue] = useState(false);

  // Amplify.configure(awsconfig);
  // API.configure(awsconfig);

  return (
    <userContext.Provider value={{ value, setValue }}>
      <GlobalProvider>
        <Router>
          {value ? (
            <>
              <Header />
              <Routes>
                {console.log(value)}
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/movie_buddy" element={<LandingPage />} />
                <Route exact path="/watchlist" element={<Watchlist />} />
                <Route exact path="/user" element={<User />} />
                <Route exact path="/watched" element={<Watched />} />
                <Route exact path="/random" element={<Random />} />
                <Route exact path="/filter" element={<Filter />} />
                <Route exact path="/ourpick" element={<OurPicks />} />
                <Route exact path="/search" element={<Search />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/signin" element={<Signin />} />
                <Route exact path="/landing" element={<LandingPage />} />
                <Route exact path="/viewmore" element={<ViewMore />} />
                <Route exact path="/userprofile" element={<UserProfile />} />
              </Routes>
            </>
          ) : (
            <Routes>
              {console.log(value)}
              <Route exact path="/home" element={<Home />} />
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/movie_buddy" element={<LandingPage />} />
                <Route exact path="/watchlist" element={<Watchlist />} />
                <Route exact path="/user" element={<User />} />
                <Route exact path="/watched" element={<Watched />} />
                <Route exact path="/random" element={<Random />} />
                <Route exact path="/filter" element={<Filter />} />
                <Route exact path="/ourpick" element={<OurPicks />} />
                <Route exact path="/search" element={<Search />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/signin" element={<Signin />} />
                <Route exact path="/landing" element={<LandingPage />} />
                <Route exact path="/viewmore" element={<ViewMore />} />
                <Route exact path="/userprofile" element={<UserProfile />} />
            </Routes>
          )}
        </Router>
      </GlobalProvider>
    </userContext.Provider>
  );
}

export default App;
