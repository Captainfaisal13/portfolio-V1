import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <main className="w-full h-full flex justify-center align-middle">
      <div className="pb-20 flex flex-col">
        <h2 className="font-bold text-3xl pt-2 md:text-6xl tracking-tight mb-4 dark:text-white">
          404?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for might have gotten lost. Or maybe you did?
        </p>
        <Link
          href="/"
          className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
};

export default Custom404;
