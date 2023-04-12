import React from "react";
import data from "../../data.json";
import Link from "next/link";
export default function Selection() {
  return (
    <section className="text-gray-400 bg-akeel_navy min-h-screen body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
            Quantity Selection
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Choose the number of meals you'd like before choosing the dishes.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.quantity.map((selection, index) => (
            <div className="p-4 xl:w-1/5 md:w-1/2 w-full" key={index}>
              <div
                className={`h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden ${
                  selection.type === "Extra"
                    ? "border-akeel_yellow"
                    : "border-gray-700"
                }`}
              >
                {selection.type === "Extra" ? (
                  <span className="bg-akeel_yellow text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                  </span>
                ) : null}

                <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
                  {selection.type}
                </h2>
                <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">
                  ${selection.price}
                </h1>
                <p className="flex items-center text-gray-400 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                  {selection.meals} Meal(s)
                </p>

                <Link
                  className={` text-center mt-auto text-white bg-gray-400 border-2 py-2 px-4 w-full focus:outline-none rounded ${
                    selection.type === "Extra"
                      ? "bg-akeel_yellow"
                      : "bg-black-400"
                  }`}
                  href={"/menu"}
                >
                  Select
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
