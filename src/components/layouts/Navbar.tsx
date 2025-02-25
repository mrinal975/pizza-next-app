import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
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
              src="/pizza.png"
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
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
