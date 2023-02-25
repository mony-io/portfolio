import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiTailwindcss, SiTypescript, SiSass } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiVuejsFill } from "react-icons/ri";
import { data } from "../data";

const Skill = () => {
  console.log(data);
  return (
    <>
      <div className="w-full">
        <div class="grid grid-cols-6 gap-4">
          <div className="col-span-6 w-full text-center md:text-left">
            <h3 className="text-3xl py-1 dark:text-white">Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a frontend developer , I've
              done remote work for
              <span className="text-[#6D67E4]"> agencies </span>
              consulted for <span className="text-[#6D67E4]">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
          </div>
          <div className="col-span-6">
            <h3 className="bg-[#F9F9F9] dark:bg-[#fff] shadow-lg dark:shadow-none text-gray-800  p-3 text-center rounded-t-2xl">
              First Skills
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div class="grid grid-cols-6 gap-1">
          <div className="col-span-6 md:col-span-3 text-gray-800  bg-[#F9F9F9] dark:bg-[#fff] shadow-lg dark:shadow-none cursor-pointer flex justify-center items-center xl:ml-0 md:mx-0 mt-1 h-36 hover:bg-[#33333328] dark:hover:bg-[#ffffff8b] hover:text-[#fff] duration-300">
            <DiHtml5 size={60} className="text-blue-600" />
            <span className="text-3xl">HTML</span>
          </div>
          <a
            href="https://reactjs.org/"
            className="col-span-6 md:col-span-3 text-gray-800  bg-[#F9F9F9] dark:bg-[#fff] shadow-lg dark:shadow-none cursor-pointer flex justify-center items-center xl:mr-0 md:mx-0 md:mt-1 h-36 hover:bg-[#33333328] dark:hover:bg-[#ffffff8b] hover:text-[#fff] duration-300"
          >
            <DiCss3 size={60} className="text-orange-600" />
            <span className="text-3xl">CSS</span>
          </a>
          <div className="col-span-6 mb-1">
            <h3 className="bg-[#F9F9F9] dark:bg-[#fff] shadow-lg dark:shadow-none text-gray-800  p-3 text-center">
              Second Skills
            </h3>
          </div>
        </div>
      </div>
      <div class="w-full h-auto">
        {data.map((item) => (
          <div className="grid grid-cols-6 gap-1">
            <div className="col-span-3 sm:col-span-2 text-gray-800  p-3 bg-[#F9F9F9] dark:bg-[#fff] shadow-lg dark:shadow-none cursor-pointer flex justify-center items-center h-36 hover:bg-[#33333328] dark:hover:bg-[#ffffff8b] hover:text-[#fff]  duration-300">
              <DiJavascript1 className="text-4xl lg:text-5xl text-[#f9f646e8]" />
              <span className="text-xl md:text-2xl lg:text-3xl">{item.js}</span>
            </div>
            <div className="col-span-3 sm:col-span-2 text-gray-800  p-3 bg-[#F9F9F9] dark:bg-[#fff] shadow-lg dark:shadow-none cursor-pointer flex justify-center items-center h-36 hover:bg-[#33333328] dark:hover:bg-[#ffffff8b] hover:text-[#fff]  duration-300">
              <DiNodejsSmall className="text-4xl lg:text-5xl text-green-600" />
              <span className="text-xl md:text-2xl lg:text-3xl">
                {item.node}
              </span>
            </div>
            <div className="col-span-3 sm:col-span-2 text-gray-800  p-3 bg-[#F9F9F9] dark:bg-[#fff] shadow-lg dark:shadow-none cursor-pointer flex justify-center items-center h-36 hover:bg-[#33333328] dark:hover:bg-[#ffffff8b] hover:text-[#fff]  duration-300">
              <DiReact className="text-4xl lg:text-5xl text-blue-400" />
              <span className="text-xl md:text-2xl lg:text-3xl">
                {item.react}
              </span>
            </div>
            <div className="col-span-3 sm:col-span-2 lg:rounded-none text-gray-800  p-3 bg-[#F9F9F9] dark:bg-[#fff] shadow-lg dark:shadow-none cursor-pointer flex justify-center items-center h-36 hover:bg-[#33333328] dark:hover:bg-[#ffffff8b] hover:text-[#fff]  duration-300">
              <TbBrandNextjs className="text-4xl lg:text-5xl" />
              <span className="text-xl md:text-2xl lg:text-3xl">
                {item.next}
              </span>
            </div>
            <div className="col-span-3 sm:col-span-2  text-gray-800  p-3 bg-[#F9F9F9] dark:bg-[#fff] shadow-lg dark:shadow-none cursor-pointer flex justify-center items-center h-36 hover:bg-[#33333328] dark:hover:bg-[#ffffff8b] hover:text-[#fff]  duration-300">
              <DiMongodb className="text-4xl lg:text-5xl text-green-400" />
              <span className="text-xl md:text-2xl lg:text-3xl ">
                {item.mongodb}
              </span>
            </div>
            <div className="col-span-3 sm:col-span-2 sm:rounded-none text-gray-800  p-3 bg-[#F9F9F9] dark:bg-[#fff] shadow-lg dark:shadow-none cursor-pointer flex justify-center items-center h-36 hover:bg-[#33333328] dark:hover:bg-[#ffffff8b] hover:text-[#fff]  duration-300">
              <SiTailwindcss className="text-4xl lg:text-5xl text-blue-400" />
              <span className="text-xl md:text-2xl lg:text-3xl">{item.tw}</span>
            </div>
            <div className="col-span-3 sm:col-span-2 sm:rounded-bl-2xl text-gray-800  p-3 bg-[#F9F9F9] dark:bg-[#fff] shadow-lg dark:shadow-none cursor-pointer flex justify-center items-center h-36 hover:bg-[#33333328] dark:hover:bg-[#ffffff8b] hover:text-[#fff]  duration-300">
              <SiSass className="text-4xl lg:text-5xl text-pink-400" />
              <span className="text-xl md:text-2xl lg:text-3xl">
                {item.sass}
              </span>
            </div>
            <div className="col-span-3 sm:col-span-2  text-gray-800  p-3 bg-[#F9F9F9] dark:bg-[#fff] shadow-lg dark:shadow-none cursor-pointer flex justify-center items-center h-36 hover:bg-[#33333328] dark:hover:bg-[#ffffff8b] hover:text-[#fff]  duration-300">
              {/* <SiTypescript className="text-4xl lg:text-5xl text-blue-500" /> */}
              {/* <span className="text-xl md:text-2xl lg:text-3xl">{item.ts}</span> */}
            </div>
            <div className="col-span-3 sm:col-span-2 sm:rounded-br-2xl text-gray-800  p-3 bg-[#F9F9F9] dark:bg-[#fff] shadow-lg dark:shadow-none cursor-pointer flex justify-center items-center h-36 hover:bg-[#33333328] dark:hover:bg-[#ffffff8b] hover:text-[#fff]  duration-300">
              {/* <RiVuejsFill className="text-4xl lg:text-5xl text-green-300" /> */}
              {/* <span className="text-xl md:text-2xl lg:text-3xl">
                {item.vue}
              </span> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skill;
