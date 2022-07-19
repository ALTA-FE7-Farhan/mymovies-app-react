import React from "react";
import { WithRouter } from "../utils/Navigation";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Card from "../components/Card";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  return (
    <>
      <div className="w-full h-screen overflow-auto bg-white dark:bg-black">
        <Header />
        <div className="m-5 grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
          {favorites.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WithRouter(Favorites);
