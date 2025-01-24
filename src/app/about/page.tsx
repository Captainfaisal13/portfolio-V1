"use client";
import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";
import { MyContext } from "../components/globalContext";
import MentionLogo from "../assets/mentionLogo";
import ResumeLogo from "../assets/resumeLogo";
const About = () => {
  const { setCurrentNav }: any = useContext(MyContext);
  return (
    <main className="md:px-0 px-8 max-w-2xl m-auto min-h-screen pb-20">
      <h2 className="font-bold text-3xl pt-2 md:text-5xl tracking-tight mb-6 dark:text-white">
        who am i?
      </h2>
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 mb-2">
        <div className="m-auto">
          <div className="rounded-full overflow-hidden w-48">
            <Image
              height={600}
              width={600}
              className=""
              alt="my-image"
              src="/assets/images/faisal-profile.jpg"
            />
          </div>
        </div>
        <div>
          <p className="text-[#6d6868] dark:text-[#a9a9a9] my-2">
            If you&apos;ve reached this point, chances are you already know what
            I do, where I work, and where I study. Now that we&apos;ve got the
            formalities out of the way, let&apos;s dive into discovering more
            about me. <br></br>In case you&apos;re not familiar, just click{" "}
            <Link
              href="/"
              className="font-bold underline"
              onClick={() => {
                setCurrentNav(0);
              }}
            >
              here
            </Link>{" "}
            .
          </p>
          <p className="text-[#6d6868] dark:text-[#a9a9a9]">
            As you may have already gathered, I am Faisal – yes, the very same
            person mentioned in bold on this website&apos;s homepage.
          </p>
        </div>
      </div>
      <p className="text-[#6d6868] dark:text-[#a9a9a9]">
        I&apos;m a twenty-two-year-old with a passion for a wide range of
        interests, from sports and technology. Additionally, I find joy in
        watching movies and visiting different amazing places.
      </p>
      <div>
        <h2 className="font-bold text-2xl md:text-3xl tracking-tight mt-10 mb-4 text-black dark:text-white">
          for the professionals
        </h2>
        <div className="flex justify-evenly">
          <a
            href="mailto:shaikhfaisal3412@gmail.com"
            className="text-[#6d6868] dark:text-white px-4 md:px-20 py-4 bg-gray-200 dark:bg-gray-900 rounded-md flex gap-1 text-md font-bold hover:text-[#0097e6d9] hover:dark:text-[#0cf2b2]"
          >
            <span>
              <MentionLogo />
            </span>
            Contact
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            className="text-[#6d6868] dark:text-white px-4 md:px-20 py-4 bg-gray-200 dark:bg-gray-900 rounded-md flex gap-1 text-md font-bold hover:text-[#0097e6d9] hover:dark:text-[#0cf2b2]"
          >
            <span>
              <ResumeLogo />
            </span>
            Résumé
          </a>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-4">
          <h2 className="font-bold text-2xl md:text-3xl tracking-tight mt-10 text-black dark:text-white">
            skills & interests
          </h2>
          <p className="text-[#6d6868] dark:text-[#a9a9a9] pl-4 border-l-4 border-gray-300 dark:border-gray-500">
            I love learning and trying new things in technology and most
            importantly in programming, which has led me to develop a
            considerable array of skills and interests. Check out some of the
            most notable ones below!
          </p>
        </div>
        <div className="space-y-1">
          <h4 className="font-semibold text-lg text-black dark:text-white">
            Languages and Frameworks
          </h4>
          <p className="text-[#6d6868] dark:text-[#a9a9a9]">
            When it comes to UI, I rely mostly on my favorite combo i.e{" "}
            <b>Next.js</b> + <b>TailwindCSS</b> + <b>Typescript</b> for super
            fast frontend development also i sometimes use component libraries
            if i find good fit such as <b>Headless UI</b>, <b>ShadCN</b>,{" "}
            <b>Radix UI</b> etc. for query management and caching i prefer{" "}
            <b>Tanstack/React-Query</b>. for state management <b>Redux</b> or{" "}
            <b>Zustand</b>
            <br />
            For backend development, I use <b>Node.js</b> + <b>Express.js</b> +{" "}
            <b>Typescript</b>. for database i use <b>MongoDB(mongoose)</b> and{" "}
            <b>GraphQL</b> for database query.
            <br />
            In competitive programming or &quot;leetcoding,&quot; I tend go with{" "}
            <b>C++</b>. Additionally, I have knowledge of <b>Java</b>,{" "}
            <b>Python</b>, and more.
          </p>
        </div>
        <div className="space-y-1">
          <h4 className="font-semibold text-lg text-black dark:text-white">
            Programming Drills
          </h4>
          <p className="text-[#6d6868] dark:text-[#a9a9a9]">
            Even with the ongoing online debate between DSA/CP vs Dev, I&apos;m
            an enthusiast of both worlds. In my free time, I enjoy indulging in
            competitive programming and leetcoding. These activities encourage
            me to think efficiently, especially when dealing with challenging
            edge cases. Feel free to explore my{" "}
            <a
              href="https://leetcode.com/captainFaisal/"
              target="_blank"
              className="font-bold hover:text-[#0097e6d9] hover:dark:text-[#0cf2b2]"
            >
              @leetcode
            </a>{" "}
            profile to see my progress and achievements!
          </p>
        </div>
        <div className="space-y-1">
          <h4 className="font-semibold text-lg text-black dark:text-white">
            Favorites
          </h4>
          <p className="text-[#6d6868] dark:text-[#a9a9a9]">
            📺 - The Godfather I and II, Breaking Bad, inglourious basterds and
            almost all tarantino movies ;)
          </p>
          <p className="text-[#6d6868] dark:text-[#a9a9a9]">
            🏏 - Team India(ftw) and Chennai Super Kings.
          </p>
          <p className="text-[#6d6868] dark:text-[#a9a9a9]">
            🎵 - Mohit Chauhan, KK.
          </p>
        </div>

        <div className="space-y-1">
          <h4 className="font-semibold my-1 text-lg text-black dark:text-white">
            What I&apos;m Up To
          </h4>
          <p className="text-[#6d6868] dark:text-[#a9a9a9]">
            Learning - Sockets, System designs, Blockchain, Finance Managment.
          </p>
          <p className="text-[#6d6868] dark:text-[#a9a9a9]">
            Watching - Better Call Saul.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
