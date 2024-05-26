import React from "react";
import { useParams } from "react-router-dom";
const AboutDetails = () => {
  const params = useParams();
  return (
    <>
      <h1>Details {params.type}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        laudantium, quae, architecto recusandae nostrum dignissimos beatae dolor
        ut delectus impedit placeat provident pariatur quas atque perspiciatis
        ex repudiandae! Recusandae, commodi!
      </p>
    </>
  );
};

export default AboutDetails;
