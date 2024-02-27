import React from "react";
import Project from "../Project";
import Contact from "../Contact";
import { Banner, Service } from "../../components";
import {
  BreadcrumbListSchema,
  PersonSchema,
  WebsiteSchema,
} from "../../schema/hj";

const Home = () => {
  return (
    <div className="pt-16">
      <WebsiteSchema />
      <BreadcrumbListSchema />
      <PersonSchema />
      <Banner />
      <Service />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
