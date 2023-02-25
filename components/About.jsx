import React from "react";
import {
  BsBoxSeam,
  BsFillPenFill,
  BsFillLightbulbFill,
  BsFillLightningChargeFill,
  BsFillMapFill,
  BsKeyFill,
} from "react-icons/bs";

const About = () => {
  return (
    <div className="grid grid-cols-6 gap-2 md:gap-3 w-full">
      <div className="col-span-6 w-full text-center md:text-left">
        <h3 className="text-3xl py-1 dark:text-white">About Me</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I am a Front-end Developer located in Battambang. I have seroius
          passion for client side.
          <span className="text-[#6D67E4]"> Well-organised </span>
          person <span className="text-[#6D67E4]">problem-solver </span>
          independent employee with high attention detail.
        </p>
      </div>
      <div className="col-span-6 sm:col-span-3 md:col-span-2 sm:ml-6 md:ml-0 mt-8">
        <div className=" bg-[#ffffff] shadow-lg p-6 rounded-2xl h-48 sm:h-[13rem] md:h-[15rem] lg:h-[13rem]">
          <BsFillLightbulbFill
            className="bg-[#222] p-3 rounded-lg text-orange-300"
            size={50}
          />
          <h3 className="text-gray-800 dark:text-gray-600 text-xl my-2 sm:text-[1rem] lg:text-xl">
            Responsive Design
          </h3>
          <p className="text-gray-800 dark:text-gray-600 mb-3 ">
            I am serious with HTML and CSS and I build many responsive website.
          </p>
        </div>
      </div>
      <div className="col-span-6 sm:col-span-3 md:col-span-2 sm:mr-6 block md:mr-0 sm:mt-8">
        <div className=" bg-[#ffffff] shadow-lg p-6 rounded-2xl h-48 sm:h-[13rem] md:h-[15rem] lg:h-[13rem]">
          <BsFillLightningChargeFill
            className="bg-[#222] p-3 rounded-lg text-orange-600"
            size={50}
          />
          <h3 className="text-gray-800 dark:text-gray-600 text-xl my-2 sm:text-[1rem] lg:text-xl  ">
            Dynamic
          </h3>
          <p className="text-gray-800 dark:text-gray-600 mb-3 ">
            I use JavaScript for making my website dynamic and scalable.
          </p>
        </div>
      </div>
      <div className="col-span-6 sm:col-span-3 md:col-span-2 sm:ml-6 md:ml-0 md:mt-8">
        <div className=" bg-[#ffffff] shadow-lg p-6 rounded-2xl h-48 sm:h-[13rem] md:h-[15rem] lg:h-[13rem]">
          <BsFillPenFill
            className="bg-[#222] p-3 rounded-lg text-[#D5CEA3]"
            size={50}
          />
          <h3 className="text-gray-800 dark:text-gray-600 text-xl my-2 sm:text-[1rem] lg:text-xl  ">
            Framework
          </h3>
          <p className="text-gray-800 dark:text-gray-600 mb-3">
            I use many frameworks for making my project faster and look good.
          </p>
        </div>
      </div>
      <div className="col-span-6 sm:col-span-3 md:col-span-2 sm:mr-6 md:mr-0">
        <div className=" bg-[#ffffff] shadow-lg p-6 rounded-2xl h-48 sm:h-[13rem] md:h-[15rem] lg:h-[13rem]">
          {/* <BsBoxSeam
            className="bg-[#222] p-3 rounded-lg text-[#dbbca4]"
            size={50}
          />
          <h3 className="text-gray-800 dark:text-gray-600 text-xl my-2 sm:text-[1rem] lg:text-xl  "></h3>
          <p className="text-gray-800 dark:text-gray-600 mb-3"></p> */}
        </div>
      </div>
      <div className="col-span-6 sm:col-span-3 md:col-span-2 sm:ml-6 md:ml-0">
        <div className=" bg-[#ffffff] shadow-lg p-6 rounded-2xl h-48 sm:h-[13rem] md:h-[15rem] lg:h-[13rem]">
          {/* <BsFillMapFill
            className="bg-[#222] p-3 rounded-lg text-[#F3EFE0]"
            size={50}
          />
          <h3 className="text-gray-800 dark:text-gray-600 text-xl my-2 sm:text-[1rem] lg:text-xl  ">
            About React
          </h3>
          <p className="text-gray-800 dark:text-gray-600 mb-3">
            good. I started to learn ReactJs basic and learn the ReactJs
            advanced concept
          </p> */}
        </div>
      </div>
      <div className="col-span-6 sm:col-span-3 md:col-span-2 sm:mr-6 md:mr-0">
        <div className=" bg-[#ffffff] shadow-lg p-6 rounded-2xl h-48 sm:h-[13rem] md:h-[15rem] lg:h-[13rem]">
          {/* <BsKeyFill
            className="bg-[#222] p-3 rounded-lg text-yellow-400"
            size={50}
          />
          <h3 className="text-gray-800 dark:text-gray-600 text-xl my-2 sm:text-[1rem] lg:text-xl  ">
            Another Thing
          </h3>
          <p className="text-gray-800 dark:text-gray-600 mb-3">
            I am interested on React framwork like NextJs and many more
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
