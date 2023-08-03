"use client";
import React from "react";
import Link from "next/link";
import BackButton from "../assets/backButton";

const Contact = () => {
  return (
    <main className="md:px-0 px-8 max-w-2xl m-auto mb-20">
      <h2 className="font-bold text-3xl pt-2 md:text-5xl tracking-tight mb-4 dark:text-white">
        message sent successfully
      </h2>
      <div>
        <p className="text-[#6d6868] dark:text-[#a9a9a9] mb-4">
          Thanks. I&apos;ll get back to you as eary as possible :)
        </p>
        <Link href="/contact">
          <button className="p-2 dark:bg-blue-500 rounded-md dark:text-white bg-[#0cf2b2] flex gap-1 pr-4">
            <span className="p-1">
              <BackButton />
            </span>
            Get Back
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Contact;
