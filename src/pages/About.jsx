import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const sections = [
    { id: 1, type: "Us", title: "About Us" },
    { id: 2, type: "Our Team", title: "About Our Team" },
    { id: 3, type: "Our Services", title: "About Services" },
  ];

  return (
    <>
      <h1>About Page</h1>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <Link to={`/about/${section.type}`}>{section.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default About;
