import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { WithRouter } from "../utils/Navigation";

const Card = ({ data, navigate }) => {
  return (
    <div className="p-3 flex flex-col justify-between bg-gray-600 rounded text-slate-200 font-sans shadow-lg shadow-gray-600 lg:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-gray-700 duration-300">
      <Link to={`detail/${data.id}`}>
        <img src={data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"} alt={data.title} width="300vh" />
        <h4>{data.title}</h4>
      </Link>
      <Button label="Add to Favorites" onClick={() => navigate(`detail/${data.id}`)} />
    </div>
  );
};

export default WithRouter(Card);
