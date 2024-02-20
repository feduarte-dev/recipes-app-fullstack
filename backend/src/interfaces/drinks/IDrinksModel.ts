import { IDrinksCategories } from './IDrinksCategories';
import { IDrinksIngredients } from './IDrinksIngredients';
import { IDrinks } from './IDrinks';

export interface IDrinksModel {
  getAllDrinks(): Promise<IDrinks[]>;
  getDrinkByName(meal: string): Promise<IDrinks[]>;
  getDrinkByLetter(letter: string): Promise<IDrinks[]>;
  getRandomDrink(): Promise<IDrinks>;
  getCategories(): Promise<IDrinksCategories[]>;
  getIngredients(): Promise<IDrinksIngredients[]>;
  getFilters(type: string, value: string): Promise<IDrinksCategories[] | IDrinksIngredients[]>;
  getDrinkById(id: number): Promise<IDrinks>
}
