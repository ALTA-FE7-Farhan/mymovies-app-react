import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import axios from "axios";
import { WithRouter } from "../utils/Navigation";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = async (page) => {
    setLoading(true);
    await axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((response) => {
        const { results } = response.data;
        setDatas(results);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Header />
      <div className="w-full h-screen">
        <div className="m-5 grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
          {datas.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WithRouter(Home);
