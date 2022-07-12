import React, { Component } from "react";

class MymoviesCard extends Component {
  render() {
    return (
      <div className="p-3 flex flex-col justify-between bg-gray-600 rounded text-slate-200 font-sans shadow-lg shadow-gray-600 lg:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-gray-700 duration-300">
        <img src={this.props.img} alt={this.props.title} width="300vh" />
        <h4>{this.props.title}</h4>
        <p>movies</p>
        <p>Release: {this.props.release}</p>
      </div>
    );
  }
}

export default MymoviesCard;
