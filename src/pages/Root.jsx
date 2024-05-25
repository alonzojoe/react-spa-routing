import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import classes from "./Root.module.css";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
