import { useNavigate } from "react-router-dom";
import React from "react";

const Home = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <>
      <h1>My Home Page</h1>
      <button onClick={goToAbout}>Navigate To About</button>
    </>
  );
};

export default Home;
