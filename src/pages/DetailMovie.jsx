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
      <div className="m-3 flex gap-2">
        <img src={detailMovie.poster_path ? `https://image.tmdb.org/t/p/w500${detailMovie.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"} alt={detailMovie.title} width="300vh" />
        <div className="flex flex-col">
          <h1>{detailMovie.title}</h1>
          <p>Release Date: {detailMovie.release_date}</p>
          <p>{detailMovie.overview}</p>
        </div>
      </div>
    </>
  );
};
export default WithRouter(DetailMovie);
