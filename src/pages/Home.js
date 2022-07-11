import React from "react";
import MymoviesCard from "../component/MymoviesCard";
import movies from "../data/movies.json";
import "../App.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="topnav">
            <a class="active" style={{ backgroundColor: "#333" }} href="#home">
              MyMovies
            </a>
            <a class="active" href="#home">
              Home
            </a>
            <a href="#favorites">Favorites</a>
          </div>
        </header>
        <div className="home">
          <MymoviesCard movies={movies[0]} />
          <MymoviesCard movies={movies[1]} />
          <MymoviesCard movies={movies[2]} />
        </div>
      </>
    );
  }
}

export default Home;
