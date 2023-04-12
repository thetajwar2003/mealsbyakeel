export type Meal = {
  id: number;
  name: string;
  macros: {
    protein: string;
    calories: string;
  };
  img: string;
  desc: string;
  popularity: string;
};
