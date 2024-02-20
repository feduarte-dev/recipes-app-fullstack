/* eslint-disable max-lines-per-function */
// import axios from 'axios';
import { Op } from 'sequelize';
import { dbResponse } from '../interfaces';
import { IMealsModel } from '../interfaces/meals/IMealsModel';
import { IMeals } from '../interfaces/meals/IMeals';
import { IMealsCategories } from '../interfaces/meals/IMealsCategories';
import { IAreas } from '../interfaces/meals/IAreas';
import { IMealsIngredients } from '../interfaces/meals/IMealsIngredients';
import SequelizeMeals from '../database/models/meals.model';
import SequelizeMealsCategories from '../database/models/meals.categories.model';
import SequelizeAreas from '../database/models/areas.model';
import SequelizeMealsIngredients from '../database/models/meals.ingredients.model';
// import { getMealCategoriesUrl, getMealFiltersUrl,
//   getAreasUrl, getMealIdUrl, getMealLetterUrl,
//   getMealRandomUrl, getMealNamesUrl, getMealIngredientsUrl } from '../utils/api.url';

export default class MealsModel implements IMealsModel {
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
    // const response = await axios.get(`${getMealNamesUrl}`);
    // return response.data;
    const dbData = await this.model.findAll(this.getProperties);

    return { meals: dbData };
  }

  async getMealById(id: number): Promise<dbResponse<IMeals[] | null>> {
    // const response = await axios.get(`${getMealIdUrl}${id}`);
    // return response.data;
    const dbData = await this.model.findAll({ where: { idMeal: id },
      ...this.getProperties,
    });

    return { meals: dbData };
  }

  async getMealByName(meal: string): Promise<dbResponse<IMeals | null>> {
    // const response = await axios.get(`${getMealNamesUrl}${meal}`);
    // return response.data;
    const dbData = await this.model.findOne({ where: { strMeal: meal },
      ...this.getProperties });

    return { meals: dbData };
  }

  async getMealByLetter(letter: string): Promise<dbResponse<IMeals[] | null>> {
    // const response = await axios.get(`${getMealLetterUrl}${letter}`);
    // return response.data;
    const dbData = await this.model.findAll({
      where: {
        strMeal: {
          [Op.like]: `${letter}%`,
        },
      },
      ...this.getProperties,
    });

    return { meals: dbData };
  }

  async getRandomMeal(): Promise<dbResponse<IMeals | null>> {
    // const response = await axios.get(getMealRandomUrl);
    // return response.data;
    const id = Math.ceil(Math.random() * 5);
    const dbData = await this.model.findByPk(id, this.getProperties);

    return { meals: dbData };
  }

  async getCategories(): Promise<dbResponse<IMealsCategories[]>> {
    // const response = await axios.get(getMealCategoriesUrl);
    // return response.data;
    const dbData = await this.mealsCategoriesModel.findAll();

    return { categories: dbData };
  }

  async getAreas(): Promise<dbResponse<IAreas[]>> {
    // const response = await axios.get(getAreasUrl);
    // return response.data;
    const dbData = await this.mealsAreasModel.findAll();

    return { meals: dbData };
  }

  async getIngredients(): Promise<dbResponse<IMealsIngredients[]>> {
    // const response = await axios.get(getMealIngredientsUrl);
    // return response.data;
    const dbData = await this.mealsIngredientsModel.findAll();

    return { meals: dbData };
  }

  async getFilters(type: string, value: string): Promise<dbResponse<IMeals[]> | null> {
    // const response = await axios.get(`${getMealFiltersUrl}${type}=${value}`);
    // return response.data;
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
