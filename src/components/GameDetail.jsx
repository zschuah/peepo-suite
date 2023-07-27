import styled from "styled-components";
import { motion } from "framer-motion";

import { useHistory } from "react-router-dom";

import angular from "../img/angular.png";
import bootstrap from "../img/bootstrap.png";
import firebase from "../img/firebase.png";
import javascript from "../img/javascript.png";
import netlify from "../img/netlify.png";
import react from "../img/react.png";
import vue from "../img/vue.png";
import web from "../img/web.png";

const GameDetail = ({ selectedGame }) => {
  const history = useHistory();
  //Exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      history.push("/");
    }
  };

  //Get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "Angular":
        return angular;
      case "Bootstrap":
        return bootstrap;
      case "Firebase":
        return firebase;
      case "Javascript":
        return javascript;
      case "Netlify":
        return netlify;
      case "React":
        return react;
      case "Vue":
        return vue;
      default:
        return web;
    }
  };

  return (
    <StyledCardShadow className="shadow" onClick={exitDetailHandler}>
      <StyledDetail layoutId={selectedGame.id}>
        <StyledStats>
          <div className="rating">
            <h3>{selectedGame.name}</h3>
            <p>Created in {selectedGame.year}</p>
          </div>

          <StyledInfo>
            <h3>Tech Stack</h3>
            <StyledPlatforms>
              {selectedGame.platforms?.map((element, i) => (
                <img
                  key={i}
                  src={getPlatform(element)}
                  alt={element}
                  title={element}
                />
              ))}
            </StyledPlatforms>
          </StyledInfo>
        </StyledStats>

        <a href={selectedGame.site} target="_blank" rel="noreferrer">
          {selectedGame.site}
        </a>

        <StyledMedia>
          <motion.img
            layoutId={`image ${selectedGame.id}`}
            src={selectedGame.imgPath}
            alt={selectedGame.name}
          />
        </StyledMedia>

        <StyledDescription>
          <p>{selectedGame.description}</p>
        </StyledDescription>

        {selectedGame.screenshot && (
          <img src={selectedGame.screenshot} alt="screenshot" />
        )}
      </StyledDetail>
    </StyledCardShadow>
  );
};

const StyledCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #96bb7c;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #184d47;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const StyledDetail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledInfo = styled(motion.div)`
  text-align: center;
`;
const StyledPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    width: 3rem;
    height: 3rem;
    margin: 0 0.5rem;
  }
`;

const StyledMedia = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const StyledDescription = styled(motion.div)`
  margin: 5rem 0;
`;

export default GameDetail;
