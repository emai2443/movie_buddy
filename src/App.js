import React from "react";
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

import "./App.css";
import { OurPicks } from "./Components/OurPicks";
function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movie_buddy" element={<Home />} />
          <Route exact path="/watchlist" element={<Watchlist />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/watched" element={<Watched />} />
          <Route exact path="/random" element={<Random />} />
          <Route exact path="/filter" element={<Filter />} />
          <Route exact path="/ourpick" element={<OurPicks />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
