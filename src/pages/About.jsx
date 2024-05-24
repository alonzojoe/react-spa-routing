import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <p>
        Go to <Link to="/">Home Page</Link>
      </p>
    </>
  );
};

export default About;
