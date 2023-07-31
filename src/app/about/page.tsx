"use client";
import Image from "next/image";
import React, { useContext } from "react";
import MyImage from "../images/WhatsApp Image 2023-07-27 at 10.33.49 (1).jpeg";
import Link from "next/link";
import { MyContext } from "../components/globalContext";
import MentionLogo from "../assets/mentionLogo";
import ResumeLogo from "../assets/resumeLogo";
const About = () => {
  const { setCurrentNav }: any = useContext(MyContext);
  return (
    <main className="md:px-0 px-8 max-w-2xl m-auto min-h-screen pb-24">
      <h2 className="font-bold text-3xl pt-2 md:text-5xl tracking-tight mb-6 dark:text-white">
        who am i?
      </h2>
      <div className="flex flex-col md:flex-row gap-12 mb-2">
        <div className="m-auto">
          <div className="rounded-full overflow-hidden w-48">
            <Image
              height={600}
              width={600}
              className=""
              alt="my-image"
              src={MyImage}
            />
          </div>
        </div>
        <div>
          <p className="text-[#6d6868] dark:text-[#a9a9a9] my-2">
            If you've reached this point, chances are you already know what I
            do, where I work, and where I study. Now that we've got the
            formalities out of the way, let's dive into discovering more about
            me. <br></br>In case you're not familiar, just click{" "}
            <Link
              href="/"
              className="font-bold"
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
            person mentioned in bold on this website's homepage.
          </p>
        </div>
      </div>
      <p className="text-[#6d6868] dark:text-[#a9a9a9]">
        I'm a twenty-year-old with a passion for a wide range of interests, from
        sports and technology. Additionally, I find joy in watching Movies,
        spending time with Family, and visiting different amazing places.
      </p>
      <div>
        <h2 className="font-bold text-2xl md:text-3xl tracking-tight mt-10 mb-4 text-black dark:text-white">
          for the professionals
        </h2>
        <div className="flex justify-evenly">
          <a
            href="mailto:shaikhfaisal3412@gmail.com"
            className="text-[#6d6868] dark:text-white px-4 md:px-20 py-4 bg-gray-200 dark:bg-gray-900 rounded-md flex text-md font-bold"
          >
            <span>
              <MentionLogo />
            </span>
            Contact
          </a>
          <a className="text-[#6d6868] dark:text-white px-4 md:px-20 py-4 bg-gray-200 dark:bg-gray-900 rounded-md flex text-md font-bold">
            <span>
              <ResumeLogo />
            </span>
            Résumé
          </a>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-2xl md:text-3xl tracking-tight mt-10 mb-4 text-black dark:text-white">
          skills & interests
        </h2>
        <p className="text-[#6d6868] dark:text-[#a9a9a9] pl-4 border-l-4 border-gray-300 dark:border-gray-500">
          I love learning and trying new things in technology and most
          importantly in programming, which has led me to develop a considerable
          array of skills and interests. Check out some of the most notable ones
          below!
        </p>
        <h4 className="font-semibold my-1 text-lg text-black dark:text-white">
          Languages
        </h4>
        <p className="text-[#6d6868] dark:text-[#a9a9a9]">
          When it comes to UI, I rely on JavaScript (mainly React/Next +
          Tailwind, sometimes using Chakra UI). For backend development, I use
          Typescript/Javascript. In "competitive programming" or "leetcoding," I
          tend go with C++. Additionally, I have knowledge of Java, Python, and
          more.
        </p>
        <h4 className="font-semibold my-1 text-lg text-black dark:text-white">
          Programming Drills
        </h4>
        <p className="text-[#6d6868] dark:text-[#a9a9a9]">
          Even with the ongoing online debate between CP vs Dev, I'm an
          enthusiast of both worlds. In my free time, I enjoy indulging in
          competitive programming and leetcoding. These activities encourage me
          to think efficiently, especially when dealing with challenging edge
          cases. Feel free to explore my{" "}
          <a
            href="https://leetcode.com/captainFaisal/"
            target="_blank"
            className="font-bold"
          >
            @leetcode
          </a>{" "}
          profile to see my progress and achievements!
        </p>
        <h4 className="font-semibold my-1 text-lg text-black dark:text-white">
          Favorites
        </h4>
        <p className="text-[#6d6868] dark:text-[#a9a9a9]">
          📺 - The Godfather I and II, Breaking Bad, Goodfellas.
        </p>
        <p className="text-[#6d6868] dark:text-[#a9a9a9]">
          🏏 - Chennai Super Kings
        </p>
        <p className="text-[#6d6868] dark:text-[#a9a9a9]">
          🎵 - Mohit Chauhan, KK.
        </p>
        <h4 className="font-semibold my-1 text-lg text-black dark:text-white">
          What I'm Up To
        </h4>
        <p className="text-[#6d6868] dark:text-[#a9a9a9]">
          Learning - DSA, Docker, Javascript(always)
        </p>
        <p className="text-[#6d6868] dark:text-[#a9a9a9]">
          Watching - The last of us
        </p>
      </div>
    </main>
  );
};

export default About;
