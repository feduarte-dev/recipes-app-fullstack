import { IAreasDB } from '../interfaces/meals/IAreas';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import { IMealsModel } from '../interfaces/meals/IMealsModel';
import MealsModel from '../models/meals.model';
import { IMeals } from '../interfaces/meals/IMeals';
import { IMealsCategories } from '../interfaces/meals/IMealsCategories';
import { IMealsIngredients } from '../interfaces/meals/IMealsIngredients';
import { dbResponse } from '../interfaces';
import { flatResponseArray, flatResponseObject } from '../utils/flatResponse';

export default class MealsService {
  constructor(private mealsModel: IMealsModel = new MealsModel()) {}

  public async getAllMeals(): Promise<ServiceResponse<dbResponse<IMeals[]>>> {
    const meals = await this.mealsModel.getAllMeals();
    const fixedMeals = flatResponseArray(meals);

    return { status: 'SUCCESSFUL', data: fixedMeals };
  }

  public async getMealById(id: number): Promise<ServiceResponse<dbResponse<IMeals>>> {
    const meal = await this.mealsModel.getMealById(id);
    const fixedMeals = flatResponseArray(meal);
    return { status: 'SUCCESSFUL', data: fixedMeals };
  }

  public async getMealByName(meal: string):
  Promise<ServiceResponse<dbResponse<IMeals>>> {
    const meals = await this.mealsModel.getMealByName(meal);
    const fixedMeals = flatResponseObject(meals);
    return { status: 'SUCCESSFUL', data: fixedMeals };
  }

  public async getMealByLetter(letter: string):
  Promise<ServiceResponse<dbResponse<IMeals[] | null>>> {
    const meal = await this.mealsModel.getMealByLetter(letter);
    const fixedMeals = flatResponseArray(meal);
    return { status: 'SUCCESSFUL', data: fixedMeals };
  }

  public async getRandomMeal(): Promise<ServiceResponse<dbResponse<IMeals | null>>> {
    const meal = await this.mealsModel.getRandomMeal();

    return { status: 'SUCCESSFUL', data: meal };
  }

  public async getCategories(): Promise<ServiceResponse<dbResponse<IMealsCategories[] | null>>> {
    const categories = await this.mealsModel.getCategories();

    return { status: 'SUCCESSFUL', data: categories };
  }

  public async getAreas(): Promise<ServiceResponse<dbResponse<IAreasDB[]>>> {
    const areas = await this.mealsModel.getAreas();

    return { status: 'SUCCESSFUL', data: areas };
  }

  public async getIngredients(): Promise<ServiceResponse<dbResponse<IMealsIngredients[]>>> {
    const ingredients = await this.mealsModel.getIngredients();

    return { status: 'SUCCESSFUL', data: ingredients };
  }

  public async getFilters(type: string, value: string):
  Promise<ServiceResponse<dbResponse<IMeals[] | null> | null>> {
    const filters = await this.mealsModel.getFilters(type, value);

    return { status: 'SUCCESSFUL', data: filters };
  }
}
