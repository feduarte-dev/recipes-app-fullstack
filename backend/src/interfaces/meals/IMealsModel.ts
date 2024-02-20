import { IAreas } from './IAreas';
import { IMealsIngredients } from './IMealsIngredients';
import { IMeals } from './IMeals';
import { IMealsCategories } from './IMealsCategories';
import { dbResponse } from '..';

export interface IMealsModel {
  getAllMeals(): Promise<dbResponse<IMeals[]>>;
  getMealByName(meal: string): Promise<dbResponse<IMeals | null>>;
  getMealByLetter(letter: string): Promise<dbResponse<IMeals[] | null>>;
  getRandomMeal(): Promise<dbResponse<IMeals | null>>;
  getCategories(): Promise<dbResponse<IMealsCategories[]>>;
  getAreas(): Promise<dbResponse<IAreas[]>>;
  getIngredients(): Promise<dbResponse<IMealsIngredients[]>>;
  getFilters(type: string, value: string):
  Promise<dbResponse<IMeals[]> | null>
  getMealById(id: number): Promise<dbResponse<IMeals[] | null>>
}
