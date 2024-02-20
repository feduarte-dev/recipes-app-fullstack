import { IAreas } from '../interfaces/meals/IAreas';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import { IMealsModel } from '../interfaces/meals/IMealsModel';
import MealsModel from '../models/meals.model';
import { IMeals } from '../interfaces/meals/IMeals';
import { IMealsCategories } from '../interfaces/meals/IMealsCategories';
import { IMealsIngredients } from '../interfaces/meals/IMealsIngredients';
import { dbResponse } from '../interfaces';

export default class MealsService {
  constructor(private mealsModel: IMealsModel = new MealsModel()) {}

  public async getAllMeals(): Promise<ServiceResponse<dbResponse<IMeals[]>>> {
    const meals = await this.mealsModel.getAllMeals();

    return { status: 'SUCCESSFUL', data: meals };
  }

  public async getMealById(id: number): Promise<ServiceResponse<IMeals>> {
    const meal = await this.mealsModel.getMealById(id);

    return { status: 'SUCCESSFUL', data: meal };
  }

  public async getMealByName(meal: string): Promise<ServiceResponse<IMeals | IMeals[]>> {
    const meals = await this.mealsModel.getMealByName(meal);

    return { status: 'SUCCESSFUL', data: meals };
  }

  public async getMealByLetter(letter: string): Promise<ServiceResponse<IMeals[]>> {
    const meal = await this.mealsModel.getMealByLetter(letter);

    return { status: 'SUCCESSFUL', data: meal };
  }

  public async getRandomMeal(): Promise<ServiceResponse<IMeals>> {
    const meal = await this.mealsModel.getRandomMeal();

    return { status: 'SUCCESSFUL', data: meal };
  }

  public async getCategories(): Promise<ServiceResponse<IMealsCategories>> {
    const categories = await this.mealsModel.getCategories();

    return { status: 'SUCCESSFUL', data: categories };
  }

  public async getAreas(): Promise<ServiceResponse<IAreas>> {
    const areas = await this.mealsModel.getAreas();

    return { status: 'SUCCESSFUL', data: areas };
  }

  public async getIngredients(): Promise<ServiceResponse<IMealsIngredients>> {
    const ingredients = await this.mealsModel.getIngredients();

    return { status: 'SUCCESSFUL', data: ingredients };
  }

  public async getFilters(type: string, value: string):
  Promise<ServiceResponse<IMealsIngredients[] | IAreas[] | IMealsCategories[]>> {
    const filters = await this.mealsModel.getFilters(type, value);

    return { status: 'SUCCESSFUL', data: filters };
  }
}
