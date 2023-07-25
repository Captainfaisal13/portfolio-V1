"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Experiences from "./assets/experiences.json";
import Projects from "./assets/projects.json";
import HashstackLogo from "./images/hashstack-logo.png";
import ACMLogo from "./images/acm-logo.png";
import LinkButton from "./assets/linkButton";
import { MdMovieFilter } from "react-icons/md";
import { SiBitcoinsv } from "react-icons/si";
import { GiPoloShirt } from "react-icons/gi";
export default function Home() {
  const companyLogos = [HashstackLogo, ACMLogo];
  const projectIcons = [
    <MdMovieFilter size={40} />,
    <SiBitcoinsv size={40} />,
    <GiPoloShirt size={40} />,
  ];
  return (
    <main className=" max-w-2xl m-auto">
      <h2 className="font-bold text-3xl pt-2 md:text-5xl tracking-tight mb-4 text-darkMode">
        i'm <span className="text-[#0097e6d9]">faisal</span>
      </h2>
      <p className="text-[#6d6868] mb-20">
        as of july 2023, i work as a{"  "}
        <RoughNotation
          type="highlight"
          show={true}
          color="#FDE68A"
          multiline={true}
        >
          <span className="text-black px-1">software engineer intern</span>
        </RoughNotation>
        {"  "}
        <a href="www.google.com" className="font-bold">
          @Hashstack
        </a>{" "}
        and am a{"  "}
        <RoughNotation
          type="highlight"
          show={true}
          color="#C7D2FE"
          multiline={true}
        >
          <span className="text-black px-1">Final Year</span>
        </RoughNotation>
        {"  "}
        student{" "}
        <a href="www.google.com" className="font-bold">
          @MumbaiUniversity
        </a>{" "}
        . I am passionate and skillful{"   "}
        <RoughNotation
          type="highlight"
          show={true}
          color="#BAE6FD"
          multiline={true}
        >
          <span className="text-black">frontend engineer</span>
        </RoughNotation>
        {"  "}. I do competitive programming and open source in my free time.
        <br></br> want to know what's up? hit me up on{" "}
        <a href="www.google.com" className="font-bold">
          Twitter
        </a>
      </p>
      <div className="mb-20">
        <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
          experiences
        </h2>
        <div>
          {Experiences &&
            Experiences?.map((curr: any, index) => {
              return (
                <div className="border border-gray-200 rounded mb-4 text-[#6d6868]">
                  <div className="flex justify-between p-4 ">
                    <div className="flex gap-2">
                      <div>
                        <Image
                          width={36}
                          height={32}
                          alt="logo"
                          src={companyLogos[index]}
                          className="rounded-full w-full mt-1"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="text-md font-bold text-black">
                          {curr.company_name}
                        </h3>
                        <div className="text-xs">{curr.duration}</div>
                      </div>
                    </div>
                    <h4 className="my-auto text-xs text-green-500 bg-green-100 font-bold text-center p-1">
                      {curr.type}
                    </h4>
                  </div>
                  <div className="py-4">
                    {curr.summary?.map((sum: any) => {
                      return (
                        <p className="px-4 text-sm flex gap-1">
                          <span>•</span> <span>{sum}</span>
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="mb-20">
        <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
          projects
        </h2>
        <div>
          {Projects &&
            Projects?.map((curr: any, index) => {
              return (
                <div className="border border-gray-200 rounded mb-4 text-[#6d6868] p-4 flex flex-col gap-2">
                  <div className="flex gap-2">
                    <div className="text-black">{projectIcons[index]}</div>
                    <div className="my-auto text-xl text-black font-bold">
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
    </main>
  );
}
