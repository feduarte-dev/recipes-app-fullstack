import { ServiceResponse } from '../interfaces/ServiceResponse';
import { IDrinksModel } from '../interfaces/drinks/IDrinksModel';
import DrinksModel from '../models/drinks.model';
import { IDrinks } from '../interfaces/drinks/IDrinks';
import { IDrinksCategories } from '../interfaces/drinks/IDrinksCategories';
import { IDrinksIngredients } from '../interfaces/drinks/IDrinksIngredients';
import { flatResponseArrayDrinks, flatResponseOBjectDrinks } from '../utils/flatResponse';
import { dbResponse } from '../interfaces';

export default class DrinksService {
  constructor(private drinksModel: IDrinksModel = new DrinksModel()) {}

  public async getAllDrinks(): Promise<ServiceResponse<dbResponse<IDrinks[]>>> {
    const drinks = await this.drinksModel.getAllDrinks();
    const fixedDrinks = flatResponseArrayDrinks(drinks);
    return { status: 'SUCCESSFUL', data: fixedDrinks };
  }

  public async getDrinkById(id: number): Promise<ServiceResponse<dbResponse<IDrinks>>> {
    const drink = await this.drinksModel.getDrinkById(id);
    const fixedDrinks = flatResponseArrayDrinks(drink);
    return { status: 'SUCCESSFUL', data: fixedDrinks };
  }

  public async getDrinkByName(drink: string):
  Promise<ServiceResponse<dbResponse<IDrinks | IDrinks[]>>> {
    const drinks = await this.drinksModel.getDrinkByName(drink);
    const fixedDrinks = flatResponseOBjectDrinks(drinks);
    return { status: 'SUCCESSFUL', data: fixedDrinks };
  }

  public async getDrinkByLetter(letter: string): Promise<ServiceResponse<dbResponse<IDrinks[]>>> {
    const drink = await this.drinksModel.getDrinkByLetter(letter);
    const fixedDrinks = flatResponseArrayDrinks(drink);

    return { status: 'SUCCESSFUL', data: fixedDrinks };
  }

  public async getRandomDrink(): Promise<ServiceResponse<dbResponse<IDrinks | null>>> {
    const drink = await this.drinksModel.getRandomDrink();

    return { status: 'SUCCESSFUL', data: drink };
  }

  public async getCategories(): Promise<ServiceResponse<dbResponse<IDrinksCategories[]>>> {
    const categories = await this.drinksModel.getCategories();

    return { status: 'SUCCESSFUL', data: categories };
  }

  public async getIngredients(): Promise<ServiceResponse<dbResponse<IDrinksIngredients[]>>> {
    const ingredients = await this.drinksModel.getIngredients();

    return { status: 'SUCCESSFUL', data: ingredients };
  }

  public async getFilters(type: string, value: string):
  Promise<ServiceResponse<dbResponse<IDrinks[] | null> | null>> {
    const filters = await this.drinksModel.getFilters(type, value);

    return { status: 'SUCCESSFUL', data: filters };
  }
}
