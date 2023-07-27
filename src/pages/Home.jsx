import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import data from "../data";

import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../animations";

import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

import angular from "../img/angular.png";
import vue from "../img/vue.png";
import react from "../img/react.png";

const Home = () => {
  //For mobile devices
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const history = useHistory();

  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const [peepoData] = useState(data());
  const [selectedGame, setSelectedGame] = useState({
    id: 123456,
    name: "PeepoNotFound",
    year: 2099,
    framework: "React",
    site: "",
    description:
      "Oh my, you tried to find Peepo, but he is not here. This part of the suite is still empty. Try to find another room!",
    imgPath:
      "https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    platforms: ["Javascript"],
  });

  useEffect(() => {
    if (isMobile) {
      //Redirect ANY path from mobile back to the homepage
      history.push("/");
    } else if (pathId) {
      //Note that game.id is a NUMBER and pathId is a STRING
      const foundGame = peepoData.find((game) => game.id.toString() === pathId);
      if (foundGame) {
        setSelectedGame(foundGame);
      }
    }
    // eslint-disable-next-line
  }, [isMobile]);

  return (
    <StyledGameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail selectedGame={selectedGame} />}
        </AnimatePresence>

        <h2>
          PeepoAngular <img src={angular} alt="angular" />
        </h2>
        <StyledGames>
          {peepoData
            .filter((element) => element.framework === "Angular")
            .sort((a, b) => b.id - a.id)
            .map((game) => (
              <Game
                key={game.id}
                game={game}
                setSelectedGame={setSelectedGame}
              />
            ))}
        </StyledGames>

        <h2>
          PeepoVue <img src={vue} alt="vue" />
        </h2>
        <StyledGames>
          {peepoData
            .filter((element) => element.framework === "Vue")
            .sort((a, b) => b.id - a.id)
            .map((game) => (
              <Game
                key={game.id}
                game={game}
                setSelectedGame={setSelectedGame}
              />
            ))}
        </StyledGames>

        <h2>
          PeepoReact <img src={react} alt="react" />
        </h2>
        <StyledGames>
          {peepoData
            .filter((element) => element.framework === "React")
            .sort((a, b) => b.id - a.id)
            .map((game) => (
              <Game
                key={game.id}
                game={game}
                setSelectedGame={setSelectedGame}
              />
            ))}
        </StyledGames>
      </AnimateSharedLayout>

      <div style={{ marginTop: "100px" }}></div>
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
    img {
      display: inline;
      height: 3rem;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 0;
    h2 {
      text-align: center;
      font-size: 2rem;
      padding: 2rem 0;
      img {
        height: 2rem;
      }
    }
  }
`;

const StyledGames = styled(motion.div)`
  min-height: 40vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export default Home;
