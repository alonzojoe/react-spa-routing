import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <ul>
        <li>
          <Link to="/about/Us">About Us</Link>
        </li>
        <li>
          <Link to="/about/Our Team">About Our Team</Link>
        </li>
        <li>
          <Link to="/about/Our Services">About Our Services</Link>
        </li>
      </ul>
    </>
  );
};

export default About;
