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
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-neutral text-xl font-medium translate-y-[-90%] sm:translate-y-[-0%]">
          Hello, I'm
        </h2>
        <h1 className="text-4xl font-semibold mb-0 translate-y-[-50%] sm:translate-y-[-0%]">
          Arbab Mustafa
        </h1>
        <div className="my-4">
          <TypeAnimation
            className="text-2xl text-primary font-bold translate-y-[-80%] sm:translate-y-[-0%]"
            cursor={true}
            sequence={[
              "Software Engineering Student",
              3000,
              "React  Developer",
              3000,
              "A Front-end web Developer",
              3000,
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <p className="text-neutral max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%]">
          As a Frontend React Developer, my dedication lies in crafting
          high-quality web applications that precisely meet the requirements of
          my clients. With 2 years of hands-on experience in web development, I
          specialize in utilizing React.js, Next.js, TypeScript, and Node.js to
          develop scalable and robust web solutions. My focus on delivering
          excellence ensures that every project I undertake exceeds expectations
          and achieves optimal results
        </p>

        <div className="flex items-center translate-y-[-60%] sm:translate-y-[-0%]">
          <button className="primary-button" onClick={handleDownload}>
            <span>Download Resume</span>
            <span>
              <FaDownload />
            </span>
          </button>

          <Link to="/about" className="ml-4">
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
