import React from "react";
import Experiences from "../assets/experiences.json";
import Image from "next/image";

const ExperienceContainer = () => {
  return (
    <div className="mb-20">
      <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
        experiences
      </h2>
      <div>
        {Experiences &&
          Experiences?.map((curr: any, index) => {
            return (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-800 rounded mb-4 text-[#6d6868] dark:text-[#a9a9a9]"
              >
                <div className="flex flex-col space-y-4 md:flex-row justify-between p-4 items-start">
                  <div className="flex gap-2">
                    <div>
                      <Image
                        width={36}
                        height={32}
                        alt={`${curr.company_name}-logo`}
                        src={curr.company_logo}
                        className="w-full mt-1 rounded-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-md font-bold text-black dark:text-white">
                        {curr.company_name}
                      </h3>
                      <div className="text-xs">{curr.duration}</div>
                    </div>
                  </div>
                  <h4
                    className={`my-auto text-xs font-semibold text-center py-1 px-3 rounded-md
                     ${
                       curr.type !== "full-time"
                         ? "text-yellow-600 bg-yellow-100"
                         : "text-green-500 bg-green-100 "
                     }`}
                  >
                    {curr.job_role}
                  </h4>
                </div>
                <div className="px-4">
                  {/* <h1 className="text-sm">{curr.job_role}</h1> */}
                  <div className="flex flex-wrap gap-1">
                    {curr.techstack.map((stack: string, index: number) => {
                      return (
                        <p
                          key={index}
                          className="text-xs px-2 py-1 text-black bg-[#d7d7d7] dark:text-white dark:bg-[#3f3f3f] rounded-md"
                        >
                          {stack}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="py-4">
                  {curr.summary?.map((sum: any, index: any) => {
                    return (
                      <p
                        key={index}
                        className="px-4 text-sm flex gap-1 md:gap-2 mb-1"
                      >
                        <span className="text-black dark:text-[#a9a9a9]">
                          •
                        </span>{" "}
                        <span dangerouslySetInnerHTML={{ __html: sum }} />
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ExperienceContainer;
