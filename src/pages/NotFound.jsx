import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <main>
        <h1>404 Page Not Found</h1>
        <p>The page you&apos;re looking for is not found at this URL.</p>
        <Link to="/">Go back to Home Page.</Link>
      </main>
    </>
  );
};

export default NotFound;
