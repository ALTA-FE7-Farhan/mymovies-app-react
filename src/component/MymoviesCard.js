import React from "react";
import "../App.css";

class MymoviesCard extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.movies.img} alt="poster" style={{ width: "100%" }} />
        <div className="container">
          <h4>{this.props.movies.title}</h4>
          <p>movies</p>
          <p>Release: {this.props.movies.release_date}</p>
        </div>
      </div>
    );
  }
}

export default MymoviesCard;
