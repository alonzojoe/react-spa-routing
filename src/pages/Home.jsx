import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/about">About Page</Link>
      </p>
    </>
  );
};

export default Home;
