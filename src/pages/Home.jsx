import React, { Component } from "react";
import MymoviesCard from "../component/MymoviesCard";
import Header from "../component/Header";
import axios from "axios";

class Home extends Component {
  state = { datas: [] };

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    this.setState({ loading: true });
    await axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      .then((response) => {
        const { results } = response.data;
        console.log(results);
        this.setState({ datas: results });
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <>
        <Header />
        <div className="w-full h-screen">
          <div className="m-5 grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
            {this.state.datas.map((data) => (
              <MymoviesCard key={data.id} title={data.title} img={data.poster_path} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
