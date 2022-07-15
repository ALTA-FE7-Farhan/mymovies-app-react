import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import DetailMovie from "../pages/DetailMovie.jsx";
import Favorites from "../pages/Favorites.jsx";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:movie_id" element={<DetailMovie />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<div>404 Error Not Found</div>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
