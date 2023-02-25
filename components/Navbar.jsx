import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = (props) => {
  const { setDarkMode, darkMode } = props;
  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
      <h1 className="font-burtons text-2xl">mony. io</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className=" cursor-pointer text-2xl"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r uppercase from-cyan-500 text- to-[#6D67E4] text-white px-4 py-2 border-none rounded-sm shadow ml-8"
            href="/resume.pdf"
            download="resume.pdf"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
