import React from "react";
import { useState, useEffect, useRef } from "react";
import { name } from "../constants";
import ButtonLink from "./ButtonLink";
import { motion } from "framer-motion";
import Background from "./Background";
import Footer from "./Footer";

const Home = () => {
  const ref = useRef(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText(() => text + name[ref.current - 1]);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="area relative z-0 bg-black w-screen h-screen">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div
  className="hero relative h-[calc(100vh)] flex flex-col justify-center items-center text-white"
  id="hero"
>
  <div className="pt-4 h-36 backdrop-blur-sm rounded-3xl text-center">
    <h1 className="text-6xl sm:text-7xl font-extrabold mt-2">
      Hi, I'm&nbsp;
      <span className="text-yellow-200 font-extrabold">{text}</span>
    </h1>
    <p className="mt-3 text-xl text-wrap">
    A highly motivated and passionate Full-Stack Developer with 2 years of experience in Scalable product development.
    </p>
  </div>
  <div className="mt-6"> {/* New container for the button */}
    <ButtonLink
      url="https://drive.google.com/file/d/1ADa6evu59ka8nSIaV3WYr71uq6gFLLUR/view?usp=sharing"
      text="View Resume →"
      padding="p-3"
    />
  </div>
</div>


      <Footer />
    </div>
  );
};

export default Home;
