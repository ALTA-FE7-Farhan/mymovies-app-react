import React, { Component } from "react";
import MymoviesCard from "../component/MymoviesCard";
import Header from "../component/Header";

class Home extends Component {
  state = [
    {
      id: 1,
      title: "Doctor Strange in the Multiverse of Madness",
      release_date: "4 May 2022 (US)",
      duration: "2 hour 6 minute",
      detail: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
      genre: "Fantasy,Action,Adventure",
      img: "./image/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    },
    {
      id: 2,
      title: "Jurassic World Dominion",
      release_date: "1 June 2022 (US)",
      duration: "2 hour 27 minute",
      detail:
        "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history's most fearsome creatures.",
      genre: "Adventure,Action,Science Fiction",
      img: "./image/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    },
    {
      id: 3,
      title: "Thor: Love and Thunder",
      release_date: "6 July 2022 (US)",
      duration: "1 hour 59 minute",
      detail:
        "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
      genre: "Action,Adventure,Fantasy",
      img: "./image/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    },
  ];
  render() {
    return (
      <>
        <Header />
        <div className="w-full h-screen">
          <div className="m-5 grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
            {this.state.map((data) => (
              <MymoviesCard key={data.id} title={data.title} img={data.img} release={data.release_date} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
