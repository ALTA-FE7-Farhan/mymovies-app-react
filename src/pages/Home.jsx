import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import axios from "axios";
import { WithRouter } from "../utils/Navigation";
import { useDispatch } from "react-redux";
import { reduxAction } from "../utils/redux/action/action";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = async (page) => {
    setLoading(true);
    await axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((response) => {
        const { results } = response.data;
        if (results) {
          setDatas(results);
          setPage(2);
        }
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  const handleScroll = (e) => {
    let element = e.target;
    const bottom = element.scrollHeight - element.scrollTop === element.clientHeight;
    if (bottom) {
      fetchData(page + 1);
    }
  };

  const handleFav = (data) => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedmovies = JSON.parse(getMovies);
      const dataExist = parsedmovies.find((element) => element === data);
      if (dataExist) parsedmovies.push(dataExist);
      localStorage.setItem("favMovies", JSON.stringify(parsedmovies));
      dispatch(reduxAction("ADD_FAVORITE", parsedmovies));
    } else {
      localStorage.setItem("favMovies", JSON.stringify([data]));
      dispatch(reduxAction("ADD_FAVORITE", [data]));
    }
    alert("Movie added to favorites");
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full h-screen overflow-auto bg-zinc-700 dark:bg-black" onScroll={handleScroll}>
      <Header />
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3 font-mono">
        {datas.map((data) => (
          <Card
            key={data.id}
            data={data}
            onClick={() => {
              handleFav(data);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WithRouter(Home);
