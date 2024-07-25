"use client" ;
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isnav, setIsnav] = useState(false);

  return (
    <div className="bg-black resize w-screen max-w-screen ">
      <div className="text-white justify-center align-center lg:justify-start md:justify-start md:flex flex-end">
        <Link href="/">
          {" "}
          <div className="text-white  mr-[100px]">
            <Image width={140} height={140} src="/assets/logo.svg" alt="logo" />
          </div>
        </Link>
        <div className="top-10 right-5 absolute lg:hidden">
          <button
            onClick={() => setIsnav(!isnav)}
            className="text-white focus:outline-none focus:text-white"
          >
            {!isnav ? (
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 19.707a1 1 0 0 1-1.414-1.414L10.586 12 2.293 3.707a1 1 0 1 1 1.414-1.414L12 10.586l8.293-8.293a1 1 0 1 1 1.414 1.414L13.414 12l8.293 8.293a1 1 0 0 1-1.414 1.414L12 13.414l-8.293 8.293z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden lg:block lg:absolute top-0 right-0">
          <div className="lg:visible">
            <ul className="bg-cover bg-local lg:h-[6.4rem] flex flex-col lg:flex-row mt-[0.25rem] max-w-[87.5rem] w-screen justify-end md:bg-[url('/nav.svg')] lg:md:bg-[url('/nav.svg')] lg:w-[87.5rem]">
              <div className="flex flex-col lg:flex-row items-center text-black">
                <li className="bg-[url('/nav.svg')] md:bg-none">
                  {" "}
                  <Link
                    href="/"
                    className='p-2 font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/Event"
                    className='p-2 font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'
                  >
                    EVENTS
                  </Link>
                </li>
                
                <li>
                  {" "}
                  <Link
                    href="/Art"
                    className='p-2 font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'
                  >
                    ART
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/Literature"
                    className='p-2 font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'
                  >
                    LITERARY
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/Team"
                    className='p-2 font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'
                  >
                    TEAM
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/Alumni"
                    className='p-2 font-["Coluna"] p-[0.125rem 0.5rem] m-[1.875rem] font-semibold rounded hover:rounded-full hover:border-[0.25rem] border-black hover:font-extrabold'
                  >
                    ALUMNI
                  </Link>
                </li>
                <li>
                  <Link href="/Contact">
                    <button
                      type="button"
                      href="/"
                      className="text-black text-lg font-bold p-[0.1rem 0.5rem] p-2 h-[3.2rem] text-[1.25rem] w-[8.2rem] font-['Coluna']  mr-16 bg-[#F4B24E] hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm text-center 2 dark:focus:ring-yellow-900 hover:border-[0.005rem] border-black "
                    >
                      Join Us
                    </button>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>

        {isnav && (
          <div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-90 z-50 flex justify-center items-center lg:hidden">
            <button
              onClick={() => setIsnav(!isnav)}
              className="text-white focus:outline-none fixed top-10 right-10"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 19.707a1 1 0 0 1-1.414-1.414L10.586 12 2.293 3.707a1 1 0 1 1 1.414-1.414L12 10.586l8.293-8.293a1 1 0 1 1 1.414 1.414L13.414 12l8.293 8.293a1 1 0 0 1-1.414 1.414L12 13.414l-8.293 8.293z"
                />
              </svg>
            </button>
            <ul className="space-y-6">
              {[
                { href: "/", text: "Home" },
                { href: "/Event", text: "Event" },
                { href: "/Art", text: "Art" },
                { href: "/Literature", text: "Literature" },
                { href: "/Team", text: "Team" },
                { href: "/Alumni", text: "Alumni" },
                { href: "/Contact", text: "Join Us" },
              ].map((item, index) => (
                <li key={index} className="group relative">
                  <Link href={item.href} onClick={() => setIsnav(false)}>
                    <p className="nav-link font-semibold text-lg font-coluna m-2 transition duration-300 group-hover:text-yellow-700">
                      {item.text}
                    </p>
                    <hr className="w-40 mt-1 border-t-2 border-gray-300 transition duration-300 transform group-hover:translate-x-2 group-hover:border-yellow-700" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
