import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animations";

import { Link, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Game = ({ game, setSelectedGame }) => {
  //Fix scrolling
  const history = useHistory();
  if (history.location.pathname === "/") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  //For mobile devices
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={game.id}
      onClick={() => setSelectedGame(game)}
    >
      {!isMobile ? (
        //FOR DESKTOP
        <Link to={`/peepo/${game.id}`}>
          <h3>{game.name}</h3>
          <p>{game.year}</p>
          <motion.img
            layoutId={`image ${game.id}`}
            src={game.imgPath}
            alt={game.name}
          />
        </Link>
      ) : (
        // FOR MOBILE
        <a href={game.site} target="_blank" rel="noreferrer">
          <h3>{game.name}</h3>
          <p>{game.year}</p>
          <motion.img
            layoutId={`image ${game.id}`}
            src={game.imgPath}
            alt={game.name}
          />
        </a>
      )}
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 30px black;
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: center top;
  }

  @media only screen and (max-width: 600px) {
    h3 {
      padding: 0.5rem 0;
    }
  }
`;

export default Game;
