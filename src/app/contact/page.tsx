"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

const Contact = () => {
  const form: any = useRef();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log("form values", name, email, message);
    if (name === "" || email === "" || message === "") {
      return;
    }
    console.log("success");
    router.push("/success");
    emailjs
      .sendForm(
        "service_o4ch7nl",
        "template_ar0vomq",
        form.current,
        "Ptg5D4662LMNGA4LG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className="md:px-0 px-8 max-w-2xl m-auto mb-20">
      <h2 className="font-bold text-3xl pt-2 md:text-5xl tracking-tight mb-4 dark:text-white">
        contact
      </h2>
      <form ref={form} onSubmit={sendEmail}>
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
            type="text"
            name="user_name"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="your email"
            type="email"
            name="user_email"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="hi faisal, whatsup"
            name="message"
            className="px-4 py-2 h-28 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 mb-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            value="Send"
            className="text-white bg-gray-900 px-4 py-2 rounded-md w-full hover:bg-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
