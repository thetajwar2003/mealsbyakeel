import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Meals by Akeel at CCNY Campus!
        </h1>
        <p className="mb-4 leading-relaxed">
          Asalamu'alaikum! (Peace be upon you!) I'm Akeel, and as a fellow CCNY
          student I'd love to be your personal chef! As a student myself, I know
          that eating healthy in college can be a struggle, which is why I would
          love to meal prep for those who are dealing with this struggle (with
          100% Zabiha Halal Meat!) Checkout some if the dishes I have made in
          the past.
        </p>
        <img
          className="object-cover object-center"
          alt="zabiha"
          src="/zabiha.png"
        />
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center"
          alt="pic of meals"
          src="/all_meals.png"
        />
      </div>
    </div>
  );
}
