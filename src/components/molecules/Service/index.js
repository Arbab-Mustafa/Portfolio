import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiPalette } from "react-icons/bi";
import { DiAtom } from "react-icons/di";
import { FiServer } from "react-icons/fi";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
    {
<<<<<<< HEAD
      id: 2,
      title: "MERN Stack Development",
      icon: <FiServer />,
      description:
        "I excel in Node.js, Express.js, and MongoDB/Mongoose, facilitating seamless development of full-stack applications within the MERN environment",
    },
    {
=======
>>>>>>> c4fa6f67665d56ca258f432c3f7e01d2c119f542
      id: 1,
      title: "Front End Development",
      icon: <DiAtom />,
      description:
        "As a Front-end developer, I would love to develope any front-end application using  Nextjs , React js  and its libraries.",
    },
<<<<<<< HEAD

    {
      id: 3,
      title: "API Integration",
      icon: <BiPalette />,
      description:
        "As an API Integration specialist, I optimize system connections using RESTful APIs for industry-level efficiency and growth",
    },
    {
      id: 4,
      title: "Fix Bugs and Manage Website",
      icon: <FiServer />,
      description:
        "Proficient in bug resolution and website management, ensuring seamless functionality and optimal performance..",
    },
    {
      id: 5,
      title: "Responsive Design",
      icon: <BiPalette />,
      description:
        "Crafting flexible layouts for optimal viewing across all devices",
=======
    {
      id: 2,
      title: "MERN Development",
      icon: <FiServer />,
      description:
        "I am very familiar with NodeJS, Express JS, and MongoDB/Mongoose. So I can build full-stack application with MERN.",
    },
    {
      id: 3,
      title: "Web Design and Mantenance",
      icon: <BiPalette />,
      description:
        "I also provide Fully Responsive Static Website Design with Next js , React js ,Node js , Mongo Db  HTML, CSS, Bootstrap, Tailwind,  Matrial Ui , Chakra",
    },
    {
      id: 4,
      title: "Web Management",
      icon: <FiServer />,
      description:
        "I will manage any kinds of website. Data Management, Component management, Bug Fixes and  Service management and so on.",
>>>>>>> c4fa6f67665d56ca258f432c3f7e01d2c119f542
    },
  ];
  return (
    <div
      className="py-20 parent"
      // style={{ backgroundColor: "#313131" }}
    >
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">What I Provide</h3>
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Services</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <div
            key={service.id}
            className={`${
              service.id % 2 === 0
                ? "bg-accent shadow-lg"
                : "bg-[#313131] shadow-md"
            } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="mb-4 text-center">
              <span className="inline-block text-5xl text-primary">
                {service.icon}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {service.title}
            </h2>
            <p className="text-neutral">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
