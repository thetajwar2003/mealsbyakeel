import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className=" bg-akeel_navy body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          href="/"
        >
          <div>
            <img
              className="object-cover object-center rounded-full w-auto h-auto"
              alt="logo"
              src="/logo.png"
              height={64}
              width={64}
            />
          </div>
          <span className="ml-3 text-xl">Meals By Akeel</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white">Story</a>
          <a className="mr-5 hover:text-white">Past Dishes</a>
        </nav>
        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Login
        </button>
      </div>
    </header>
  );
}
