"use client";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import ProjectsContainer from "./components/projects";
import ExperienceContainer from "./components/experience";
export default function Home() {
  return (
    <main className="md:px-0 px-8 max-w-2xl m-auto ">
      <h2 className="font-bold text-3xl pt-2 md:text-5xl tracking-tight mb-4 dark:text-white">
        i'm <span className="text-[#0097e6d9] dark:text-[#0cf2b2]">faisal</span>
      </h2>
      <RoughNotationGroup show={true}>
        <p className="text-[#6d6868] dark:text-[#a9a9a9] mb-20">
          as of july 2023, i work as a{"  "}
          <RoughNotation
            animationDelay={0}
            animationDuration={1100}
            type="highlight"
            show={true}
            color="#FDE68A"
            multiline={true}
            order={"1"}
          >
            <span className="text-black px-1">software engineer intern</span>
          </RoughNotation>
          {"  "}
          <a
            href="https://hashstack.finance/"
            target="_blank"
            className="font-bold hover:text-[#0097e6d9] hover:dark:text-[#0cf2b2]"
          >
            @Hashstack
          </a>{" "}
          while also being a {"  "}
          <RoughNotation
            animationDelay={1100}
            animationDuration={1100}
            type="highlight"
            show={true}
            color="#C7D2FE"
            multiline={true}
            order={"2"}
          >
            <span className="text-black px-1">Final Year</span>
          </RoughNotation>
          {"  "}
          student{" "}
          <a
            href="https://hashstack.finance/"
            target="_blank"
            className="font-bold hover:text-[#0097e6d9] hover:dark:text-[#0cf2b2]"
          >
            @MumbaiUniversity
          </a>{" "}
          . I am passionate and skillful{"   "}
          <RoughNotation
            animationDelay={2200}
            animationDuration={1100}
            type="highlight"
            show={true}
            color="#BAE6FD"
            multiline={true}
            order={"3"}
          >
            <span className="text-black">frontend engineer</span>
          </RoughNotation>
          {"  "} . I do competitive programming and open source in my free time.
          <br></br> want to know what's up? hit me up on{" "}
          <a
            href="https://hashstack.finance/"
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
