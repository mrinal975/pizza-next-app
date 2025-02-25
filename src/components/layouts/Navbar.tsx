import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <header className="text-white-100 sticky top-0 z-50 bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 body-font">
        <div className="container flex flex-wrap p-3 flex-col md:flex-row items-center">
          {/* Logo Section */}
          <Link
            href={"/"}
            className="flex title-font font-extrabold items-center uppercase text-gray-100"
          >
            <Image
              src="/pizza.svg"
              alt="logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <p className="leading-5 text-xl mx-2">Pizza Wizza</p>
          </Link>

          {/* Navigation Section */}
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href={"/cart"}
              className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
            >
              Cart
              {/* Embedded SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span
                className="inline-flex items-center bg-red-20 py-1 px-2 rounded-full
              text-xs font-medium text-red-50 ring-1 shadow-[0_0_15px_1px]"
              >
                0
              </span>
            </Link>
            <Link
              href={"/orders"}
              className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
            >
              My Orders
              {/* Embedded SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="24"
                height="24"
                viewBox="0 0 2048 2048"
                className="ml-2"
              >
                <defs>
                  <style>
                    {`.fil1{fill:#00acc1}.fil5,.fil6{fill:#212121;fill-rule:nonzero}.fil5{fill:#37474f}`}
                  </style>
                </defs>
                <g id="Layer_x0020_1">
                  <path
                    d="M1024 0c565.539 0 1024 458.461 1024 1024s-458.461 1024-1024 1024S0 1589.539 0 1024 458.461 0 1024 0z"
                    style={{ fill: "#4dd0e1" }}
                  />
                  <g>
                    <path
                      className="fil1"
                      d="M487.333 552.53c-12.886 0-23.334 10.447-23.334 23.334 0 12.886 10.448 23.334 23.334 23.334h153.018l40.42 65.181 115.395 661.954 22.969-3.919-22.988 4.008c1.994 11.438 12.005 19.467 23.254 19.326h669.706c12.887 0 23.334-10.448 23.334-23.334 0-12.887-10.447-23.334-23.334-23.334H838.719l-15.965-91.581h659.982c18.161 0 33.836-7.246 45.54-18.95 11.617-11.617 19.103-27.771 20.813-45.4l34.562-355.995c.234-2.415.35-4.288.35-5.622 0-16.924-7.292-32.105-18.756-43.371-10.853-10.666-25.686-17.807-41.54-19.345-2.64-.255-4.791-.387-6.408-.387H737.498l-11.34-65.054a23.247 23.247 0 0 0-3.35-9.594l-.075.047-48.655-78.46c-3.844-7.615-11.734-12.838-20.845-12.838h-165.9z"
                      style={{ fill: "#6d4c41", fillRule: "nonzero" }}
                    />
                    <path
                      className="fil5"
                      d="M915.909 1325.95c23.402 0 44.593 9.488 59.931 24.827 15.338 15.339 24.827 36.529 24.827 59.931 0 23.403-9.489 44.593-24.828 59.932-15.336 15.338-36.528 24.827-59.93 24.827s-44.593-9.49-59.932-24.827c-15.339-15.34-24.826-36.53-24.826-59.932s9.487-44.592 24.826-59.931c15.338-15.34 36.53-24.827 59.932-24.827zM1355.2 1325.95c23.402 0 44.593 9.488 59.931 24.827 15.338 15.339 24.827 36.529 24.827 59.931 0 23.403-9.489 44.593-24.828 59.932-15.338 15.338-36.528 24.827-59.93 24.827s-44.593-9.49-59.932-24.827c-15.339-15.34-24.826-36.53-24.826-59.932s9.487-44.592 24.826-59.931c15.338-15.34 36.528-24.827 59.932-24.827z"
                    />
                  </g>
                </g>
              </svg>
            </Link>
            <Link
              href={"/login"}
              className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
            >
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </Link>
            <Link
              href={"/signup"}
              className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
            >
              Signup
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </Link>
          </nav>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-white bg-black rounded-full p-1  dark:text-black dark:bg-white flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>{" "}
            /
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
