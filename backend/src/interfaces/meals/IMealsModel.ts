import { IAreas } from './IAreas';
import { IMealsIngredients } from './IMealsIngredients';
import { IMeals } from './IMeals';
import { IMealsCategories } from './IMealsCategories';
import { dbResponse } from '..';

export interface IMealsModel {
  getAllMeals(): Promise<dbResponse<IMeals[]>>;
  getMealByName(meal: string): Promise<IMeals[]>;
  getMealByLetter(letter: string): Promise<IMeals[]>;
  getRandomMeal(): Promise<IMeals>;
  getCategories(): Promise<IMealsCategories>;
  getAreas(): Promise<IAreas>;
  getIngredients(): Promise<IMealsIngredients>;
  getFilters(type: string, value: string):
  Promise<IMealsCategories[] | IAreas[] | IMealsIngredients[]>;
  getMealById(id: number): Promise<IMeals>
}
