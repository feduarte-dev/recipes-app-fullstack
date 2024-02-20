import { IDrinksCategories } from './IDrinksCategories';
import { IDrinksIngredients } from './IDrinksIngredients';
import { IDrinks } from './IDrinks';
import { dbResponse } from '..';

export interface IDrinksModel {
  getAllDrinks(): Promise<dbResponse<IDrinks[]>>
  getDrinkByName(meal: string): Promise<dbResponse<IDrinks | null>>;
  getDrinkByLetter(letter: string): Promise<dbResponse<IDrinks[] | null>>;
  getRandomDrink(): Promise<dbResponse<IDrinks | null>>;
  getCategories(): Promise<dbResponse<IDrinksCategories[]>>;
  getIngredients(): Promise<dbResponse<IDrinksIngredients[]>>;
  getFilters(type: string, value: string): Promise<dbResponse<IDrinks[] | null> | null>
  getDrinkById(id: number): Promise<dbResponse<IDrinks[]>>
}
