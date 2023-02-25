import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 text-gray-800 dark:text-[#fff]">
        <div className="col-span-4 w-full text-center md:text-left">
          <h3 className="text-3xl py-1 dark:text-white">Contact Me</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-[#6D67E4]"> agencies </span>
            consulted for <span className="text-[#6D67E4]">startups </span>
            and collaborated with talanted people to create digital products for
            both business and consumer use.
          </p>
        </div>
        <div className="col-span-4 lg:col-span-1 md:mt-6">
          <div className="flex flex-col mb-3">
            <h3 className="font-semibold my-1">Have a question</h3>
            <p>I am here to help you.</p>
            <p>
              Email me at{" "}
              <span className="underline text-[#6D67E4]">
                rysarakmony6101@gmail.com
              </span>{" "}
            </p>
          </div>
          <div>
            <h3 className="font-semibold my-1">Current Location</h3>
            <p>Battambang, Cambodia</p>
            <p>Serving clients worldwide</p>
          </div>
        </div>
        <form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/rysarakmony6101@gmail.com"
          method="POST"
          className="col-span-4 lg:col-span-3 dark:text-[#222] lg:ml-9"
        >
          <div className="flex w-full flex-col">
            <div className="flex flex-col my-6">
              <input
                type="text"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
                placeholder="Your name"
                className="w-full h-9 md:h-12 lg:h-14 border outline-none p-6 rounded-sm shadow"
              />
              {errors.name && (
                <p className="text-red-600 mt-2">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "MaxLength is 100 char."}
                </p>
              )}
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                placeholder="Your email"
                className="w-full h-9 md:h-12 lg:h-14 border mt-6 outline-none p-6 rounded-sm shadow"
              />
              {errors.email && (
                <p className="text-red-600 mt-2">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid Email"}
                </p>
              )}
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="9"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
              placeholder="Your message"
              className="w-full border outline-none mb-2 p-6 rounded-sm shadow"
            />
            {errors.message && (
              <p className="text-red-600 mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
            <button
              type="submit"
              className="text-center w-[160px] mt-6 p-[10px] font-semibold bg-[#6D67E4] text-[#fff] rounded-sm shadow"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center flex-col my-9 mt-28 py-6 text-[#222] dark:text-[#fff]">
        <p>
          Released by
          <Link href="https://www.facebook.com/ry.sarakmony.90/">
            <span className="cursor-pointer text-[#6D67E4] duration-300 hover:opacity-60 hover:underline ml-1">
              Ry Sarakmony
            </span>
          </Link>
        </p>
        <p>Copyright &copy; 2022-present</p>
      </div>
    </div>
  );
};

export default Contact;
