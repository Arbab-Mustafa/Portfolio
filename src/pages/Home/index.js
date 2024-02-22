import React from "react";
import Project from "../Project";
import Contact from "../Contact";
import { Banner, Service } from "../../components";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Service />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
