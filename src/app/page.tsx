"use client";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import ProjectsContainer from "./components/projects";
import ExperienceContainer from "./components/experience";
import { useEffect, useState } from "react";
export default function Home() {
  const [myColors, setMyColors] = useState<string[]>([]);

  const colors = ["#FDE68A", "#C7D2FE", "#A7F3D0", "#BAE6FD"];
  const generateRandomColors = (colors: string[], n: number) => {
    const temp: string[] = [];
    if (n > colors.length) return undefined;
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      temp.push(colors[randomIndex]);

      colors = colors
        .slice(0, randomIndex)
        .concat(colors.slice(randomIndex + 1));
    }
    setMyColors(temp);
  };

  useEffect(() => {
    generateRandomColors(colors, 3);
  }, []);
  return (
    <main className="md:px-0 px-8 max-w-2xl m-auto ">
      <h2 className="font-bold text-3xl pt-2 md:text-5xl tracking-tight mb-4 dark:text-white">
        i&apos;m{" "}
        <span className="text-[#0097e6d9] dark:text-[#0cf2b2]">faisal</span>
      </h2>
      <RoughNotationGroup show={true}>
        <p className="text-[#6d6868] dark:text-[#a9a9a9] mb-20">
          as of 2025, i work as a{"  "}
          <RoughNotation
            animationDelay={100}
            animationDuration={1100}
            type="highlight"
            show={true}
            color={myColors[0]}
            multiline={true}
            order={"1"}
          >
            <span className="text-black px-1">software engineer</span>
          </RoughNotation>
          {"  "}
          <a
            href="https://trikon.io/"
            target="_blank"
            className="font-bold hover:text-[#0097e6d9] hover:dark:text-[#0cf2b2]"
          >
            @Trikon
          </a>{" "}
          handling all the frontend stuff, previously i worked as a{" "}
          <RoughNotation
            animationDelay={1100}
            animationDuration={1100}
            type="highlight"
            show={true}
            color={myColors[1]}
            multiline={true}
            order={"2"}
          >
            <span className="text-black px-1">software engineer intern</span>
          </RoughNotation>{" "}
          {"  "}
          <a
            href="https://trikon.io/"
            target="_blank"
            className="font-bold hover:text-[#0097e6d9] hover:dark:text-[#0cf2b2]"
          >
            @Trikon
          </a>
          , {"  "}
          <a
            href="https://hashstack.finance/"
            target="_blank"
            className="font-bold hover:text-[#0097e6d9] hover:dark:text-[#0cf2b2]"
          >
            @Hashstack
          </a>
          . <br />
          as a dedicated {"   "}
          <RoughNotation
            animationDelay={2200}
            animationDuration={1100}
            type="highlight"
            show={true}
            color={myColors[2]}
            multiline={true}
            order={"3"}
          >
            <span className="text-black">fullstack developer</span>
          </RoughNotation>
          {"  "}, i am passionate about crafting impactful web applications and
          exploring emerging technologies. want to know what&apos;s up? hit me
          up on{" "}
          <a
            href="https://www.linkedin.com/in/shaikhfaisal13/"
            target="_blank"
            className="font-bold hover:text-[#0097e6d9] hover:dark:text-[#0cf2b2]"
          >
            LinkedIn
          </a>
        </p>
      </RoughNotationGroup>
      <ExperienceContainer />
      <ProjectsContainer />
    </main>
  );
}
