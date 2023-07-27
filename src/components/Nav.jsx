import styled from "styled-components";
import { motion } from "framer-motion";
import frog from "../img/frog.png";
import { fadeIn } from "../animations";

const Nav = () => {
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <StyledLogo>
        <motion.img
          drag
          dragConstraints={{ left: 0, top: -0, right: 0, bottom: 0 }}
          dragElastic={1}
          src={frog}
          alt="frog.png"
        />
        <h1>PeepoSuite</h1>
      </StyledLogo>

      <p>"You can literally drag me along for your next adventure!"</p>

      {/* <div className="search">
        <input type="text" />
        <button>Search</button>
      </div> */}
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  /* padding: 3rem 5rem; */
  margin-top: 3rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: coral;
    color: white;
  }
  p {
    font-size: 1rem;
    font-style: italic;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 1rem;
  }
`;

const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 7rem;
    width: 7rem;
  }
  h1 {
    font-size: 5rem;
    font-family: "Montserrat", sans-serif;
  }
  &:hover {
    text-shadow: 5px 5px 5px #96bb7c;
  }

  @media only screen and (max-width: 600px) {
    img {
      height: 3rem;
      width: 3rem;
    }
    h1 {
      font-size: 2rem;
    }
  }
`;

export default Nav;
