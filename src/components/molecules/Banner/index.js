import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import coding from "../../../assets/coding.json";
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";
const PdfUrl = "/Arbab-Mustafa_resume.pdf";

const Banner = () => {
  const Downloadfile = (url) => {
    const fileName = url.split("/").pop();
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  const handleDownload = () => {
    Downloadfile(PdfUrl);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center sm:justify-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-neutral text-xl font-medium translate-y-[-90%] sm:translate-y-[-0%]">
          Hello, I'm
        </h2>
        <h1 className="text-4xl font-semibold mb-0 translate-y-[-50%] sm:translate-y-[-0%] ">
          Arbab Mustafa
        </h1>
        <div className="my-8">
          <TypeAnimation
            className="text-2xl text-primary my-4    font-bold text-center translate-y-[-100%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
            cursor={true}
            sequence={[
              "Software Eng Student",
              3000,
<<<<<<< HEAD
              "MERN Stack Developer",
              3000,
              "Next.js Developer",
              3000,
              "Fullstack Developer",
              2000,
              "React Developer",
=======
              "Node js Developer",
              3000,
              "Next js Developer",
              3000,
              "React Developer",
              2000,
              "Frontend Developer",
>>>>>>> c4fa6f67665d56ca258f432c3f7e01d2c119f542
              3000,
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <p className="text-neutral max-w-xl sm:mt-4 mt-3 mb-6  font-medium translate-y-[-20%] sm:translate-y-[-0%]">
<<<<<<< HEAD
          As an experienced MERN Stack Developer proficient in both frontend and
          backend development, I specialize in crafting high-performance web
          applications that meet industry standards. With 2+ years of proven
          expertise, I leverage cutting-edge technologies like React.js,
          Next.js, TypeScript, Node.js, MongoDB, Express, and Mongoose to
          deliver robust and scalable solutions. My commitment to excellence
          ensures that every project exceeds expectations, providing optimal
          results and exceptional user experiences. With a deep understanding of
          frontend and backend intricacies, I drive innovation and overcome
          complex challenges in today's dynamic business landscape.
=======
          As a Frontend React Developer, my dedication lies in crafting
          high-quality web applications that precisely meet the requirements of
          my clients. With 2 years of hands-on experience in web development, I
          specialize in utilizing React.js, Next.js, TypeScript, and Node.js
          Mongo Db , Express and Mongoss to develop scalable and robust web
          solutions. My focus on delivering excellence ensures that every
          project I undertake exceeds expectations and achieves optimal results
>>>>>>> c4fa6f67665d56ca258f432c3f7e01d2c119f542
        </p>

        <div className="flex items-center translate-y-[-60%] sm:translate-y-[-0%]">
          <button
            className="primary-button w-[50%] font-normal"
            onClick={handleDownload}
          >
            <span>Download Resume</span>
            <span>
              <FaDownload />
            </span>
          </button>

          <Link to="/about" className="ml-4 w-[50%]">
            <SecondaryBtn>
              <span>About Me</span>
              <span>
                <RiFolderInfoFill />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie options={defaultOptions} height="90%" width="90%" />
      </motion.div>
    </div>
  );
};

export default Banner;
