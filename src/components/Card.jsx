import React from "react";
import Button from "./Button";
import { WithRouter } from "../utils/Navigation";

const Card = ({ data, navigate, onClick }) => {
  return (
    <div className="flex flex-col justify-between bg-gray-600 rounded-lg text-slate-200 font-sans shadow-lg shadow-gray-600">
      <div onClick={() => navigate(`/detail/${data.id}`)}>
        <img src={data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"} alt={data.title} height="750" className="w-full rounded-t-lg" />
      </div>
      <Button label="Add to Favorites" onClick={onClick} />
    </div>
  );
};

export default WithRouter(Card);
