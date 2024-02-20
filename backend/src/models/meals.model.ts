/* eslint-disable max-lines-per-function */
// import axios from 'axios';
import { Op } from 'sequelize';
import { dbResponse } from '../interfaces';
import { IMealsModel } from '../interfaces/meals/IMealsModel';
import { IMeals } from '../interfaces/meals/IMeals';
import { IMealsCategories } from '../interfaces/meals/IMealsCategories';
import { IAreasDB } from '../interfaces/meals/IAreas';
import { IMealsIngredients } from '../interfaces/meals/IMealsIngredients';
import SequelizeMeals from '../database/models/meals.model';
import SequelizeMealsCategories from '../database/models/meals.categories.model';
import SequelizeAreas from '../database/models/areas.model';
import SequelizeMealsIngredients from '../database/models/meals.ingredients.model';

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
  private mealsAreasModel = SequelizeAreas;
  private mealsIngredientsModel = SequelizeMealsIngredients;
  private getProperties = {
    include: [
      {
        model: this.mealsCategoriesModel,
        as: 'strCategory',
        attributes: ['strCategory'],
      },
      {
        model: this.mealsAreasModel,
        as: 'strArea',
        attributes: ['strArea'],
      },
      {
        model: this.mealsIngredientsModel,
        as: 'strIngredient1',
        attributes: ['strIngredient'],
      },
      {
        model: this.mealsIngredientsModel,
        as: 'strIngredient2',
        attributes: ['strIngredient'],
      },
      {
        model: this.mealsIngredientsModel,
        as: 'strIngredient3',
        attributes: ['strIngredient'],
      },
    ],
  };

  async getAllMeals(): Promise<dbResponse<IMeals[]>> {
    // const response = await axios.get(`${this.getNamesUrl}`);
    // return response.data;
    const dbData = await this.model.findAll(this.getProperties);

    return { meals: dbData };
  }

  async getMealById(id: number): Promise<dbResponse<IMeals[] | null>> {
    // const response = await axios.get(`${this.getIdUrl}${id}`);
    // return response.data;
    const dbData = await this.model.findAll({ where: { idMeal: id },
      include: [
        {
          model: this.mealsCategoriesModel,
          as: 'strCategory',
          attributes: ['strCategory'],
        },
        {
          model: this.mealsAreasModel,
          as: 'strArea',
          attributes: ['strArea'],
        },
        {
          model: this.mealsIngredientsModel,
          as: 'strIngredient1',
          attributes: ['strIngredient'],
        },
        {
          model: this.mealsIngredientsModel,
          as: 'strIngredient2',
          attributes: ['strIngredient'],
        },
        {
          model: this.mealsIngredientsModel,
          as: 'strIngredient3',
          attributes: ['strIngredient'],
        },
      ] });

    return { meals: dbData };
  }

  async getMealByName(meal: string): Promise<dbResponse<IMeals | null>> {
    // const response = await axios.get(`${this.getNamesUrl}${meal}`);
    // return response.data;
    const dbData = await this.model.findOne({ where: { strMeal: meal },
      include: [
        {
          model: this.mealsCategoriesModel,
          as: 'strCategory',
          attributes: ['strCategory'],
        },
        {
          model: this.mealsAreasModel,
          as: 'strArea',
          attributes: ['strArea'],
        },
        {
          model: this.mealsIngredientsModel,
          as: 'strIngredient1',
          attributes: ['strIngredient'],
        },
        {
          model: this.mealsIngredientsModel,
          as: 'strIngredient2',
          attributes: ['strIngredient'],
        },
        {
          model: this.mealsIngredientsModel,
          as: 'strIngredient3',
          attributes: ['strIngredient'],
        },
      ] });

    return { meals: dbData };
  }

  async getMealByLetter(letter: string): Promise<dbResponse<IMeals[] | null>> {
    // const response = await axios.get(`${this.getLetterUrl}${letter}`);
    // return response.data;
    const dbData = await this.model.findAll({
      where: {
        strMeal: {
          [Op.like]: `${letter}%`,
        },
      },
      include: [
        {
          model: this.mealsCategoriesModel,
          as: 'strCategory',
          attributes: ['strCategory'],
        },
        {
          model: this.mealsAreasModel,
          as: 'strArea',
          attributes: ['strArea'],
        },
        {
          model: this.mealsIngredientsModel,
          as: 'strIngredient1',
          attributes: ['strIngredient'],
        },
        {
          model: this.mealsIngredientsModel,
          as: 'strIngredient2',
          attributes: ['strIngredient'],
        },
        {
          model: this.mealsIngredientsModel,
          as: 'strIngredient3',
          attributes: ['strIngredient'],
        },
      ],
    });

    return { meals: dbData };
  }

  async getRandomMeal(): Promise<dbResponse<IMeals | null>> {
    // const response = await axios.get(this.getRandomUrl);
    // return response.data;
    const id = Math.ceil(Math.random() * 5);
    const dbData = await this.model.findByPk(id, this.getProperties);

    return { meals: dbData };
  }

  async getCategories(): Promise<dbResponse<IMealsCategories[]>> {
    // const response = await axios.get(this.getCategoriesUrl);
    // return response.data;
    const dbData = await this.mealsCategoriesModel.findAll();

    return { categories: dbData };
  }

  async getAreas(): Promise<dbResponse<IAreasDB[]>> {
    // const response = await axios.get(this.getAreasUrl);
    // return response.data;
    const dbData = await this.mealsAreasModel.findAll();

    return { meals: dbData };
  }

  async getIngredients(): Promise<dbResponse<IMealsIngredients[]>> {
    // const response = await axios.get(this.getIngredientsUrl);
    // return response.data;
    const dbData = await this.mealsIngredientsModel.findAll();

    return { meals: dbData };
  }

  async getFilters(type: string, value: string): Promise<dbResponse<IMeals[] | null> | null> {
    if (type === 'c') {
      const dbData = await this.mealsCategoriesModel.findOne({ where: { strCategory: value } });
      const response = await this.model
        .findAll({ where: { strCategoryId: dbData?.dataValues.id } });

      return { meals: response };
    }
    if (type === 'a') {
      const dbData = await this.mealsAreasModel.findOne({ where: { strArea: value } });
      const response = await this.model.findAll({ where: { strAreaId: dbData?.dataValues.id } });

      return { meals: response };
    }
    if (type === 'i') {
      const dbData = await this.mealsIngredientsModel.findOne({ where: { strIngredient: value } });

      const response = await this.model.findAll({
        where: {
          [Op.or]: [
            { strIngredient1Id: dbData?.dataValues.id },
            { strIngredient2Id: dbData?.dataValues.id },
            { strIngredient3Id: dbData?.dataValues.id },
          ],
        },
      });

      return { meals: response };
    }
    return null;
  }
}
