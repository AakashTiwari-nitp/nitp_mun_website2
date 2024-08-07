"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isnav, setIsnav] = useState(false);

  return (
    <div
      className="bg-[#000829] w-full font-extrabold min-h-32"
      style={{
        backgroundImage: `url('navbar.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `right`,
        backgroundSize: 'cover',
        margin: 0, // Ensure no extra margins
        padding: 0, // Ensure no extra padding
      }}
    >
      <div className="flex justify-between items-center text-[#000829] p-0 mx-auto max-w-screen-xl">
        <Link href="/">
          <div className="cursor-pointer align-center ml-8 text-[#000829] lg:text-white">
            <Image width={120} height={120} src="/logomun2.png" alt="logo" />
          </div>
        </Link>
        <div className="lg:hidden">
          <button
            onClick={() => setIsnav(!isnav)}
            className="text-[#000829] focus:outline-none focus:text-white mr-8 sm:mr-16"
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
        <div className="hidden lg:flex lg:items-center lg:w-full lg:justify-end">
          <ul className="flex space-x-4">
            {[
              { href: "/", text: "HOME" },
              { href: "/Committees", text: "COMMITTEES" },
              { href: "/Secretariat", text: "SECRETARIAT" },
              { href: "/Gallery", text: "GALLERY" },
              { href: "/Rulebook", text: "RULEBOOK" },
              { href: "/Faqs", text: "FAQS" },
              { href: "/Sponsors", text: "SPONSORS" },
            ].map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="p-2 font-['Coluna'] font-semibold rounded hover:rounded-full hover:text-white hover:bg-[#000829]">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isnav && (
        <div className="fixed inset-0 bg-[#000829] bg-opacity-90 z-50 flex justify-center items-center lg:hidden">
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
               { href: "/", text: "HOME" },
               { href: "/Committee", text: "COMMITTEES" },
               { href: "/Secretariat", text: "SECRETARIAT" },
               { href: "/Gallery", text: "GALLERY" },
               { href: "/Rulebook", text: "RULEBOOK" },
               { href: "/Faqs", text: "FAQS" },
               { href: "/Sponsors", text: "SPONSORS" },
            ].map((item, index) => (
              <li key={index} className="group relative">
                <Link href={item.href} onClick={() => setIsnav(false)}>
                  <p className="nav-link font-semibold text-lg font-coluna m-2 transition duration-300 text-white">
                    {item.text}
                  </p>
                  <hr className="w-40 mt-1 border-t-2 border-gray-300 transition duration-300 transform group-hover:translate-x-2 text-white" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
