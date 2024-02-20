import axios from 'axios';
import { IDrinks } from '../interfaces/drinks/IDrinks';
import { IDrinksModel } from '../interfaces/drinks/IDrinksModel';
import { IDrinksCategories } from '../interfaces/drinks/IDrinksCategories';
import { IDrinksIngredients } from '../interfaces/drinks/IDrinksIngredients';

export default class DrinksModel implements IDrinksModel {
  private getNamesUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  private getLetterUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
  private getRandomUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  private getCategoriesUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  private getIngredientsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  private getFiltersUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?';
  private getIdUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

  async getAllDrinks(): Promise<IDrinks[]> {
    const response = await axios.get(this.getNamesUrl);
    return response.data;
  }

  async getDrinkById(id: number) {
    const response = await axios.get(`${this.getIdUrl}${id}`);
    return response.data;
  }

  async getDrinkByName(drink: string): Promise<IDrinks[]> {
    const response = await axios.get(`${this.getNamesUrl}${drink}`);
    return response.data;
  }

  async getDrinkByLetter(letter: string): Promise<IDrinks[]> {
    const response = await axios.get(`${this.getLetterUrl}${letter}`);
    return response.data;
  }

  async getRandomDrink(): Promise<IDrinks> {
    const response = await axios.get(this.getRandomUrl);
    return response.data;
  }

  async getCategories(): Promise<IDrinksCategories[]> {
    const response = await axios.get(this.getCategoriesUrl);
    return response.data;
  }

  async getIngredients(): Promise<IDrinksIngredients[]> {
    const response = await axios.get(this.getIngredientsUrl);
    return response.data;
  }

  async getFilters(type: string, value: string):
  Promise<IDrinksCategories[] | IDrinksIngredients[]> {
    const response = await axios.get(`${this.getFiltersUrl}${type}=${value}`);
    return response.data;
  }
}
