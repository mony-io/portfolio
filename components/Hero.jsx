import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import deved from "../public/emo.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-center p-10 py-10">
      <h2 className="text-5xl py-2 text-[#6D67E4] font-medium dark:text-[#7c76f2de] md:text-6xl">
        Ry Sarakmony
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        Front-end developer
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        Hello World I am a Front-end Developer. I have deleloped many types of
        front-ends design and platforms.
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 cursor-pointer text-gray-600 dark:text-gray-400">
        <Link href="https://instagram.com/36mony">
          <AiFillInstagram />
        </Link>
        <Link href="https://linkedin.com/in/ry-sarakmony-597614241">
          <AiFillLinkedin />
        </Link>
        <Link href="https://github.com/mony-io">
          <AiFillGithub />
        </Link>
      </div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded shadow-lg w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
        <Image src={deved} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Hero;
