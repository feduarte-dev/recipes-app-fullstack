/* eslint-disable max-lines-per-function */
// import axios from 'axios';
import { Op } from 'sequelize';
import { IDrinks } from '../interfaces/drinks/IDrinks';
import { IDrinksModel } from '../interfaces/drinks/IDrinksModel';
import { IDrinksCategories } from '../interfaces/drinks/IDrinksCategories';
import { IDrinksIngredients } from '../interfaces/drinks/IDrinksIngredients';
import SequelizeDrinks from '../database/models/drinks.model';
import SequelizeDrinksCategories from '../database/models/drinks.categories.model';
import SequelizeDrinksIngredients from '../database/models/drinks.ingredients.model';
import { dbResponse } from '../interfaces';
// import { getDrinkCategoriesUrl, getDrinkFiltersUrl,
//   getDrinkIdUrl, getDrinkIngredientsUrl,
//   getDrinkLetterUrl, getDrinkNamesUrl, getDrinkRandomUrl } from '../utils/api.url';

export default class DrinksModel implements IDrinksModel {
  private model = SequelizeDrinks;
  private drinksCategoriesModel = SequelizeDrinksCategories;
  private drinksIngredientsModel = SequelizeDrinksIngredients;
  private getProperties = {
    include: [
      {
        model: this.drinksCategoriesModel,
        as: 'strCategory',
        attributes: ['strCategory'],
      },
      {
        model: this.drinksIngredientsModel,
        as: 'strIngredient1',
        attributes: ['strIngredient1'],
      },
      {
        model: this.drinksIngredientsModel,
        as: 'strIngredient2',
        attributes: ['strIngredient1'],
      },
      {
        model: this.drinksIngredientsModel,
        as: 'strIngredient3',
        attributes: ['strIngredient1'],
      },
    ],
  };

  async getAllDrinks(): Promise<dbResponse<IDrinks[]>> {
    // const response = await axios.get(getDrinkNamesUrl);
    // return response.data;
    const dbData = await this.model.findAll(this.getProperties);

    return { drinks: dbData };
  }

  async getDrinkById(id: number): Promise<dbResponse<IDrinks[]>> {
    // const response = await axios.get(`${getDrinkIdUrl}${id}`);
    // return response.data;
    const dbData = await this.model.findAll({ where: { idDrink: id },
      ...this.getProperties,
    });

    return { drinks: dbData };
  }

  async getDrinkByName(drink: string): Promise<dbResponse<IDrinks | null>> {
    // const response = await axios.get(`${getDrinkNamesUrl}${drink}`);
    // return response.data;
    const dbData = await this.model.findOne({ where: { strDrink: drink },
      ...this.getProperties,
    });

    return { drinks: dbData };
  }

  async getDrinkByLetter(letter: string): Promise<dbResponse<IDrinks[] | null>> {
    // const response = await axios.get(`${getDrinkLetterUrl}${letter}`);
    // return response.data;
    const dbData = await this.model.findAll({
      where: {
        strDrink: {
          [Op.like]: `${letter}%`,
        },
      },
      ...this.getProperties,
    });

    return { drinks: dbData };
  }

  async getRandomDrink(): Promise<dbResponse<IDrinks | null>> {
    // const response = await axios.get(getDrinkRandomUrl);
    // return response.data;
    const id = Math.ceil(Math.random() * 5);
    const dbData = await this.model.findByPk(id, this.getProperties);

    return { drinks: dbData };
  }

  async getCategories(): Promise<dbResponse<IDrinksCategories[]>> {
    // const response = await axios.get(getDrinkCategoriesUrl);
    // return response.data;
    const dbData = await this.drinksCategoriesModel.findAll();

    return { drinks: dbData };
  }

  async getIngredients(): Promise<dbResponse<IDrinksIngredients[]>> {
    // const response = await axios.get(getDrinkIngredientsUrl);
    // return response.data;
    const dbData = await this.drinksIngredientsModel.findAll();

    return { drinks: dbData };
  }

  async getFilters(type: string, value: string): Promise<dbResponse<IDrinks[] | null> | null> {
    // const response = await axios.get(`${getDrinkFiltersUrl}${type}=${value}`);
    // return response.data;
    if (type === 'c') {
      const dbData = await this.drinksCategoriesModel.findOne({ where: { strCategory: value } });
      const response = await this.model
        .findAll({ where: { strCategoryId: dbData?.dataValues.id } });

      return { drinks: response };
    }

    if (type === 'i') {
      const dbData = await this.drinksIngredientsModel
        .findOne({ where: { strIngredient1: value } });

      const response = await this.model.findAll({
        where: {
          [Op.or]: [
            { strIngredient1Id: dbData?.dataValues.id },
            { strIngredient2Id: dbData?.dataValues.id },
            { strIngredient3Id: dbData?.dataValues.id },
          ],
        },
      });

      return { drinks: response };
    }
    return null;
  }
}
