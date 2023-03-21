import MealModal from "@/components/MealModal";
import { Meal } from "@/types/meal";
import React, { useState } from "react";
import data from "../../data.json";

export default function Menu() {
  const [open, setOpenModal] = useState(false);
  const [currentMeal, setCurrentMeal] = useState({});

  const handleModal = (cm: Meal) => {
    setOpenModal(!open);
    setCurrentMeal(cm);
  };
  return (
    <>
      <section
        className={`text-gray-400 bg-gray-900 body-font ${
          open ? "blur-2xl" : null
        }`}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.meals.map((meal: Meal) => (
              <div className="lg:w-1/3 md:w-1/2 p-4 w-full" key={meal.id}>
                <a className="block relative h-70 overflow-hidden">
                  <img
                    alt={meal.name}
                    className="object-cover object-center w-full h-full block"
                    src={meal.img}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    HOT 🔥
                  </h3>
                  <button onClick={() => handleModal(meal)}>
                    <h2 className="text-white title-font text-lg font-medium">
                      {meal.name}
                    </h2>
                  </button>
                </div>
              </div>
            ))}
            {open ? (
              <MealModal
                open={open}
                openModal={setOpenModal}
                meal={currentMeal}
              />
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
