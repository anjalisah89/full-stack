import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="dark:dark_gradient pt-24">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Book Now
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 lg:px-48 dark:text-white">
            Booking
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900"
            >
              Get Started
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="/"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="container px-32 mx-auto">
          <div className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="/images/hero.png"
                  width={1064}
                  height={832}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
                  Book Now
                </h1>
                <p className="mb-8 text-gray-900 dark:text-white text-justify leading-relaxed">
                  Book in few clicks!
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900">
                    {" "}
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
