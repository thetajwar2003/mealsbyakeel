import { Meal } from "@/types/meal";
import React from "react";
import { Formik, Form, Field } from "formik";

type MealCardProps = {
  meal: Meal;
};

interface MealValues {
  quantity: string;
  rice: string;
  protein: string;
}

export default function MealCard({ meal }: MealCardProps) {
  const initialValues: MealValues = {
    quantity: "1",
    rice: "Normal Rice (200g)",
    protein: "Normal Protein",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 pt-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {meal.popularity}
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-2">
                {meal.name}
              </h1>

              <div className="flex mb-3">
                <span className="flex items-center">
                  <span className="mr-3">
                    <b>Calories:</b> {meal.macros.calories}
                  </span>
                </span>
                <span className="flex pl-3 border-l border-gray-800 text-gray-500 space-x-2">
                  <span>
                    <b>Protein:</b> {meal.macros.protein}
                  </span>
                </span>
              </div>

              <p className="leading-relaxed border-t-2 border-gray-800 mb-4">
                {meal.desc}
              </p>

              <Form>
                {/* SECTION: Quantity Selection */}
                <div className="flex border-t border-gray-800 py-2 items-center">
                  <span className="text-gray-500">Quantity</span>
                  <div className="flex ml-auto">
                    <div className="relative">
                      <Field
                        as="select"
                        className="rounded border border-gray-700 focus:ring-2 focus:ring-yellow-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-yellow-500 text-white pl-3 pr-10"
                        name="quantity"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>5</option>
                        <option>7</option>
                      </Field>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* SECTION: Rice selection */}
                <div className="flex border-t border-gray-800 py-2 items-center">
                  <span className="text-gray-500">Rice</span>
                  <div className="flex ml-auto">
                    <div className="relative">
                      <Field
                        as="select"
                        className="rounded border border-gray-700 focus:ring-2 focus:ring-yellow-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-yellow-500 text-white pl-3 pr-10"
                        name="rice"
                      >
                        <option> Normal Rice (200g) </option>
                        <option> Less Rice (170g) </option>
                        <option> Extra Rice (230g) </option>
                      </Field>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* SECTION: Protein Selection */}
                <div className="flex border-t border-gray-800 py-2 items-center">
                  <span className="text-gray-500">Extra Protein</span>
                  <div className="flex ml-auto">
                    <div className="relative">
                      <Field
                        as="select"
                        className="rounded border border-gray-700 focus:ring-2 focus:ring-yellow-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-yellow-500 text-white pl-3 pr-10"
                        name="protein"
                      >
                        <option>Normal Protein</option>
                        <option>100cal & 15g ($2/meal)</option>
                        <option>170cal & 25g ($3/meal)</option>
                      </Field>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <span className="title-font font-medium text-lg text-white border-2 rounded-lg">
                    <button
                      className="flex text-white bg-yellow-500 py-2 focus:outline-none hover:bg-yellow-600 rounded m-2"
                      type="submit"
                    >
                      Add To Cart
                    </button>
                  </span>
                </div>
              </Form>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 flex justify-center ">
              <img
                alt={meal.name}
                className="object-cover rounded-lg"
                src={meal.img}
              />
            </div>
          </div>
        </div>
      </section>
    </Formik>
  );
}
