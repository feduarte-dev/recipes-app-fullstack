import axios from 'axios';
import { dbResponse } from '../interfaces';
import { IMealsModel } from '../interfaces/meals/IMealsModel';
import { IMeals } from '../interfaces/meals/IMeals';
import { IMealsCategories } from '../interfaces/meals/IMealsCategories';
import { IAreas } from '../interfaces/meals/IAreas';
import { IMealsIngredients } from '../interfaces/meals/IMealsIngredients';
import SequelizeMeals from '../database/models/meals.model';
import SequelizeMealsCategories from '../database/models/meals.categories.model';

export default class MealsModel implements IMealsModel {
  private getNamesUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  private getLetterUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
  private getRandomUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
  private getCategoriesUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  private getAreasUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  private getIngredientsUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  private getFiltersUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?';
  private getIdUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  private model = SequelizeMeals;
  private mealsCategoriesModel = SequelizeMealsCategories;

  async getAllMeals(): Promise<dbResponse<IMeals[]>> {
    // const response = await axios.get(this.getNamesUrl);
    // return response.data;
    const dbData = await this.model.findAll({
      include: [{
        model: this.mealsCategoriesModel, // Substitua MealType pelo nome correto do modelo de tipos de refeições
        as: 'MealType', // Substitua 'MealType' pelo alias correto usado nas associações
        attributes: ['strCategory'], // Especifique os campos que você deseja selecionar da tabela de referência
      }],
    });

    return { meals: dbData };
  }

  async getMealById(id: number): Promise<IMeals> {
    const response = await axios.get(`${this.getIdUrl}${id}`);
    return response.data;
  }

  async getMealByName(meal: string): Promise<IMeals[]> {
    const response = await axios.get(`${this.getNamesUrl}${meal}`);
    return response.data;
  }

  async getMealByLetter(letter: string): Promise<IMeals[]> {
    const response = await axios.get(`${this.getLetterUrl}${letter}`);
    return response.data;
  }

  async getRandomMeal(): Promise<IMeals> {
    const response = await axios.get(this.getRandomUrl);
    return response.data;
  }

  async getCategories(): Promise<IMealsCategories> {
    const response = await axios.get(this.getCategoriesUrl);
    return response.data;
  }

  async getAreas(): Promise<IAreas> {
    const response = await axios.get(this.getAreasUrl);
    return response.data;
  }

  async getIngredients(): Promise<IMealsIngredients> {
    const response = await axios.get(this.getIngredientsUrl);
    return response.data;
  }

  async getFilters(type: string, value: string):
  Promise<IMealsCategories[] | IAreas[] | IMealsIngredients[]> {
    const response = await axios.get(`${this.getFiltersUrl}${type}=${value}`);
    return response.data;
  }
}
