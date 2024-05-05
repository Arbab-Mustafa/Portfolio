import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Diploma */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
<<<<<<< HEAD
                Software Eng Student
=======
                Software Engineering Student
>>>>>>> c4fa6f67665d56ca258f432c3f7e01d2c119f542
              </h3>
              <p className="text-sm text-neutral font-semibold">2022 - 2026</p>
            </div>
            <p className="text-sm text-neutral text-justify">
<<<<<<< HEAD
              I am presently enrolled in the Bachelor's program for Software
              Engineering at the University of Engineering and Technology
              Taxila, Pakistan (UET Taxila)
=======
              I am currently pursuing my Bachelor's degree in Software
              Engineering from the University of Engineering and Technology
              Taxila, Pakistan (UET Taxila) .
>>>>>>> c4fa6f67665d56ca258f432c3f7e01d2c119f542
            </p>
          </div>

          {/* React Developer */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
<<<<<<< HEAD
                MERN Stack Developer
=======
                React Developer
>>>>>>> c4fa6f67665d56ca258f432c3f7e01d2c119f542
              </h3>
              <p className="text-sm text-neutral font-semibold">2023</p>
            </div>
            <p className="text-sm text-neutral text-justify">
<<<<<<< HEAD
              I have successfully completed the
              <b>FullStack Developer Expert program</b> from Udemy.
=======
              I have successfully completed the{" "}
              <b>React Web Developer Expert</b> from Udemy.
>>>>>>> c4fa6f67665d56ca258f432c3f7e01d2c119f542
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
