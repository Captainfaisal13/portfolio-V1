import React from "react";
import Projects from ".././assets/projects.json";
import LinkButton from "../assets/linkButton";
import ProjectButton from "../assets/projectButton";
import RokketBinge from "../assets/rokketBinge";
import CoinTrace from "../assets/coinTrace";
import Matalino from "../assets/matalino";
const ProjectsContainer = () => {
  const projectIcons = [<RokketBinge />, <CoinTrace />, <Matalino />];

  return (
    <div className="pb-14">
      <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
        projects
      </h2>
      <div>
        {Projects &&
          Projects?.map((curr: any, index) => {
            return (
              <div
                className={`border border-gray-200 dark:border-gray-800 rounded ${
                  index !== Projects.length - 1 ? "mb-4" : "mb-0"
                } text-[#6d6868] dark:text-[#a9a9a9] p-4 flex flex-col gap-4`}
              >
                <div className="flex gap-3">
                  <div className="text-black dark:text-white">
                    {projectIcons[index]}
                  </div>
                  <div className="my-auto text-xl text-black dark:text-white font-bold">
                    {curr.project_name}
                  </div>
                </div>
                <div className="flex gap-3">
                  <div>
                    <LinkButton />
                  </div>
                  <div className="my-auto text-sm">{curr.description}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectsContainer;
