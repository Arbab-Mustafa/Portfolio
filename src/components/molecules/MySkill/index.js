import React from "react";
import Lottie from "react-lottie";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiAdobephotoshop,
  SiFirebase,
  SiTypescript,
  SiRedux,
  SiGraphql,
  SiMui,
  SiFigma,
  SiDocker,
  SiKubernetes,
  SiVisualstudiocode,
  SiWebpack,
  SiBabel,
  SiEslint,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const MySkill = () => {
  const languages = [
    { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { title: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    {
      title: "JavaScript",
      icon: <SiJavascript className="text-yellow-500 rounded" />,
    },
    { title: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
    { title: "Next.js", icon: <TbBrandNextjs className="text-red-500" /> },
    { title: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { title: "Babel", icon: <SiBabel className="text-yellow-600" /> },
  ];
  const frameworks = [
    { title: "React", icon: <FaReact className="text-cyan-400" /> },
    { title: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
    { title: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { title: "ExpressJS", icon: <SiExpress className="text-neutral" /> },
    { title: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { title: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    { title: "Material-UI", icon: <SiMui className="text-blue-500" /> },
    { title: "Webpack", icon: <SiWebpack className="text-blue-600" /> },
  ];
  const tools = [
    { title: "GitHub", icon: <FaGithub className="text-black" /> },
    { title: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    {
      title: "Photoshop",
      icon: <SiAdobephotoshop className="text-cyan-800" />,
    },
    { title: "Figma", icon: <SiFigma className="text-purple-500" /> },
    { title: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { title: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
    {
      title: "VS Code",
      icon: <SiVisualstudiocode className="text-blue-600" />,
    },

    { title: "ESLint", icon: <SiEslint className="text-blue-500" /> },
  ];

  return (
    <div className="pt-24">
      <h1 className="text-4xl font-semibold drop-shadow-md text-center mb-8">
        My <span className="text-primary">Skills</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly my-8">
        <div>
          <h2 className="text-cyan-500 text-xl font-semibold">Languages:</h2>
          <div className="flex flex-wrap mb-4">
            {languages?.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-28 flex items-center justify-center text-3xl cursor-pointer shadow-lg  mx-auto hover:-translate-y-2 duration-300 hover:shadow-xl bg-[#262626] transition-transform"
                  title={skill.title}
                >
                  {skill?.icon}
                </div>
                {skill.title}
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl font-semibold">
            Library & Frameworks:
          </h2>
          <div className="flex flex-wrap mb-4">
            {frameworks?.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-28 flex items-center justify-center text-3xl cursor-pointer shadow-lg  mx-auto hover:-translate-y-2 duration-300 hover:shadow-xl bg-[#262626] transition-transform"
                  title={skill.title}
                >
                  {skill?.icon}
                </div>
                {skill.title}
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl font-semibold">
            Tools & Technologies:
          </h2>
          <div className="flex flex-wrap mb-4">
            {tools?.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-28 flex items-center justify-center text-3xl cursor-pointer shadow-lg  mx-auto hover:-translate-y-2 duration-300 hover:shadow-xl bg-[#262626] transition-transform"
                  title={skill.title}
                >
                  {skill?.icon}
                </div>
                {skill.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
