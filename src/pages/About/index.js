import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";
const PdfUrl = "/Arbab-Mustafa_resume.pdf";

const About = () => {
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
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="/pic1.png"
              alt="Gilbert Hutapea"
              className="p-12 w-70 h-70 transform translate-y-[-12%]"
              title="Gilbert Hutapea"
            />
          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">
              Arbab Mustafa
            </h1>
            <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
                cursor={true}
                sequence={[
                  "Software Enginnering Student",
                  3000,
                  "React Developer",
                  2000,
                  "A Front-end  web Developer",
                  3000,
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              As a Frontend React Developer, my dedication lies in crafting
              high-quality web applications that precisely meet the requirements
              of my clients. With 2 years of hands-on experience in web
              development, I specialize in utilizing React.js, Next.js,
              TypeScript, and Node.js to develop scalable and robust web
              solutions. My focus on delivering excellence ensures that every
              project I undertake exceeds expectations and achieves optimal
              results
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              My passion for solving complex problems and creating innovative
              solutions drives me to stay up-to-date with the latest
              technologies and trends in the industry.
              {/* My next mission is how to become a Mern stack Developer. I would
              love to build some Giant Website which will shine myself. */}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>
                Arbab Mustafa
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone | Wattsapp: </span>
                +923225305671
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                arbabmachi132@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span>
                Islamabad, Pakistan
              </h2>

              <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                <button className="primary-button" onClick={handleDownload}>
                  <span>Download Resume</span>
                  <span>
                    <FaDownload />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;
