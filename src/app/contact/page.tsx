import React from "react";

const Contact = () => {
  return (
    <main className="md:px-0 px-8 max-w-2xl m-auto mb-20">
      <h2 className="font-bold text-3xl pt-2 md:text-5xl tracking-tight mb-6 dark:text-white">
        contact
      </h2>
      <div>
        <p className="text-[#6d6868] dark:text-[#a9a9a9] mb-4">
          I&apos;m always on the lookout for incredible opportunities and
          exciting connections, so don&apos;t hesitate to get in touch. My
          enthusiasm knows no bounds, and I&apos;m ready to dive headfirst into
          the next big thing that comes my way. Whether it&apos;s collaborating
          on a thrilling project or just having a chat over a cup of coffee :)
        </p>
        <div className="">
          <input
            placeholder="your name"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 mb-2"
          />
          <input
            placeholder="your email"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 mb-2"
          />
          <textarea
            placeholder="hi faisal, whatsup"
            className="px-4 py-2 h-28 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 mb-2"
          />
          <button className="text-white bg-gray-900 px-4 py-2 rounded-md w-full hover:bg-blue-500">
            Send
          </button>
        </div>
      </div>
    </main>
  );
};

export default Contact;
