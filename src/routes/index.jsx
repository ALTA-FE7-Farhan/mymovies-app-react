import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import DetailMovie from "../pages/DetailMovie.jsx";
import Favorites from "../pages/Favorites.jsx";
import { useDispatch } from "react-redux";
import { reduxAction } from "../utils/redux/action/action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      dispatch(reduxAction("ADD_FAVORITE", JSON.parse(getMovies)));
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:movie_id" element={<DetailMovie />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<div>404 Error Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
