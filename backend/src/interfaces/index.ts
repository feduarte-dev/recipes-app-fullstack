export type IdentifiableMeal = {
  idMeal: number
};

export type IdentifiableDrink = {
  idDrink: number
};

export type dbResponse<T> = {
  meals?: T
  drinks?: T
  categories?: T
};
