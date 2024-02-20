import { ServiceResponse } from '../interfaces/ServiceResponse';
import { IDrinksModel } from '../interfaces/drinks/IDrinksModel';
import DrinksModel from '../models/drinks.model';
import { IDrinks } from '../interfaces/drinks/IDrinks';
import { IDrinksCategories } from '../interfaces/drinks/IDrinksCategories';
import { IDrinksIngredients } from '../interfaces/drinks/IDrinksIngredients';

export default class DrinksService {
  constructor(private drinksModel: IDrinksModel = new DrinksModel()) {}

  public async getAllDrinks(): Promise<ServiceResponse<IDrinks[]>> {
    const drinks = await this.drinksModel.getAllDrinks();

    return { status: 'SUCCESSFUL', data: drinks };
  }

  public async getDrinkById(id: number): Promise<ServiceResponse<IDrinks>> {
    const drink = await this.drinksModel.getDrinkById(id);

    return { status: 'SUCCESSFUL', data: drink };
  }

  public async getDrinkByName(drink: string): Promise<ServiceResponse<IDrinks | IDrinks[]>> {
    const drinks = await this.drinksModel.getDrinkByName(drink);

    return { status: 'SUCCESSFUL', data: drinks };
  }

  public async getDrinkByLetter(letter: string): Promise<ServiceResponse<IDrinks[]>> {
    const drink = await this.drinksModel.getDrinkByLetter(letter);

    return { status: 'SUCCESSFUL', data: drink };
  }

  public async getRandomDrink(): Promise<ServiceResponse<IDrinks>> {
    const drink = await this.drinksModel.getRandomDrink();

    return { status: 'SUCCESSFUL', data: drink };
  }

  public async getCategories(): Promise<ServiceResponse<IDrinksCategories[]>> {
    const categories = await this.drinksModel.getCategories();

    return { status: 'SUCCESSFUL', data: categories };
  }

  public async getIngredients(): Promise<ServiceResponse<IDrinksIngredients[]>> {
    const ingredients = await this.drinksModel.getIngredients();

    return { status: 'SUCCESSFUL', data: ingredients };
  }

  public async getFilters(type: string, value: string):
  Promise<ServiceResponse<IDrinksCategories[] | IDrinksIngredients[]>> {
    const filters = await this.drinksModel.getFilters(type, value);

    return { status: 'SUCCESSFUL', data: filters };
  }
}
