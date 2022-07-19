import React, { useState, useEffect } from "react";
import { WithRouter } from "../utils/Navigation";
import axios from "axios";
import Header from "../components/Header";

const DetailMovie = (props) => {
  const [detailMovie, setDetailMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const { movie_id } = props.params;
    await axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      .then((response) => {
        const { data } = response;
        setDetailMovie(data);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <div className="w-full h-screen overflow-auto bg-zinc-700 dark:bg-black">
        <div className="m-3 flex gap-2 text-white">
          <img src={detailMovie.poster_path ? `https://image.tmdb.org/t/p/w500${detailMovie.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"} alt={detailMovie.title} width="300vh" className="rounded-lg" />
          <div className="flex flex-col">
            <h1 className="text-3xl">{detailMovie.title}</h1>
            <p>Release Date: {detailMovie.release_date}</p>
            <p>{detailMovie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default WithRouter(DetailMovie);
