import React from "react";
import Image from "next/image";
import web1 from "../public/port.png";
import web2 from "../public/pos-sys.png";
import web3 from "../public/port-next.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import Link from "next/link";

const Project = () => {
  return (
    <>
      <div className="text-center md:text-left">
        <h3 className="text-3xl py-1 dark:text-white">Projects</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-[#6D67E4]"> agencies </span>
          consulted for <span className="text-[#6D67E4]">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-6 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 hover:-translate-y-2 duration-300 ease-in-out shadow hover:shadow-lg">
          <Link href="https://rysarakmony-portfolio.netlify.app">
            <Image
              className="cursor-pointer rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web1}
            />
          </Link>
        </div>
        <div className="basis-1/3 flex-1 hover:-translate-y-2 duration-300 ease-in-out shadow hover:shadow-lg">
          <Link href="https://github.com/mony-io/pos-system">
            <Image
              className="cursor-pointer rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web2}
            />
          </Link>
        </div>
        <div className="basis-1/3 flex-1 hover:-translate-y-2 duration-300 ease-in-out shadow hover:shadow-lg">
          <Image
            className="rounded-lg object-cover cursor-pointer"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web3}
          />
        </div>
        <div className="basis-1/3 flex-1 hover:-translate-y-2 duration-300 ease-in-out shadow hover:shadow-lg">
          <Image
            className="rounded-lg object-cover cursor-pointer"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web4}
          />
        </div>
        <div className="basis-1/3 flex-1 hover:-translate-y-2 duration-300 ease-in-out shadow hover:shadow-lg">
          <Image
            className="rounded-lg object-cover cursor-pointer"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web5}
          />
        </div>
        <div className="basis-1/3 flex-1 hover:-translate-y-2 duration-300 ease-in-out shadow hover:shadow-lg">
          <Image
            className="rounded-lg object-cover cursor-pointer"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web6}
          />
        </div>
      </div>
    </>
  );
};

export default Project;
