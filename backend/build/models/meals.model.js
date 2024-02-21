"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-lines-per-function */
// import axios from 'axios';
const sequelize_1 = require("sequelize");
const meals_model_1 = require("../database/models/meals.model");
const meals_categories_model_1 = require("../database/models/meals.categories.model");
const areas_model_1 = require("../database/models/areas.model");
const meals_ingredients_model_1 = require("../database/models/meals.ingredients.model");
// import { getMealCategoriesUrl, getMealFiltersUrl,
//   getAreasUrl, getMealIdUrl, getMealLetterUrl,
//   getMealRandomUrl, getMealNamesUrl, getMealIngredientsUrl } from '../utils/api.url';
class MealsModel {
    constructor() {
        this.model = meals_model_1.default;
        this.mealsCategoriesModel = meals_categories_model_1.default;
        this.mealsAreasModel = areas_model_1.default;
        this.mealsIngredientsModel = meals_ingredients_model_1.default;
        this.getProperties = {
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
    }
    async getAllMeals() {
        // const response = await axios.get(`${getMealNamesUrl}`);
        // return response.data;
        const dbData = await this.model.findAll(this.getProperties);
        return { meals: dbData };
    }
    async getMealById(id) {
        // const response = await axios.get(`${getMealIdUrl}${id}`);
        // return response.data;
        const dbData = await this.model.findAll({ where: { idMeal: id },
            ...this.getProperties,
        });
        return { meals: dbData };
    }
    async getMealByName(meal) {
        // const response = await axios.get(`${getMealNamesUrl}${meal}`);
        // return response.data;
        const dbData = await this.model.findOne({ where: { strMeal: meal },
            ...this.getProperties });
        return { meals: dbData };
    }
    async getMealByLetter(letter) {
        // const response = await axios.get(`${getMealLetterUrl}${letter}`);
        // return response.data;
        const dbData = await this.model.findAll({
            where: {
                strMeal: {
                    [sequelize_1.Op.like]: `${letter}%`,
                },
            },
            ...this.getProperties,
        });
        return { meals: dbData };
    }
    async getRandomMeal() {
        // const response = await axios.get(getMealRandomUrl);
        // return response.data;
        const id = Math.ceil(Math.random() * 5);
        const dbData = await this.model.findByPk(id, this.getProperties);
        return { meals: dbData };
    }
    async getCategories() {
        // const response = await axios.get(getMealCategoriesUrl);
        // return response.data;
        const dbData = await this.mealsCategoriesModel.findAll();
        return { categories: dbData };
    }
    async getAreas() {
        // const response = await axios.get(getAreasUrl);
        // return response.data;
        const dbData = await this.mealsAreasModel.findAll();
        return { meals: dbData };
    }
    async getIngredients() {
        // const response = await axios.get(getMealIngredientsUrl);
        // return response.data;
        const dbData = await this.mealsIngredientsModel.findAll();
        return { meals: dbData };
    }
    async getFilters(type, value) {
        // const response = await axios.get(`${getMealFiltersUrl}${type}=${value}`);
        // return response.data;
        if (type === 'c') {
            const dbData = await this.mealsCategoriesModel.findOne({ where: { strCategory: value } });
            const response = await this.model
                .findAll({ where: { strCategoryId: dbData === null || dbData === void 0 ? void 0 : dbData.dataValues.id } });
            return { meals: response };
        }
        if (type === 'a') {
            const dbData = await this.mealsAreasModel.findOne({ where: { strArea: value } });
            const response = await this.model.findAll({ where: { strAreaId: dbData === null || dbData === void 0 ? void 0 : dbData.dataValues.id } });
            return { meals: response };
        }
        if (type === 'i') {
            const dbData = await this.mealsIngredientsModel.findOne({ where: { strIngredient: value } });
            const response = await this.model.findAll({
                where: {
                    [sequelize_1.Op.or]: [
                        { strIngredient1Id: dbData === null || dbData === void 0 ? void 0 : dbData.dataValues.id },
                        { strIngredient2Id: dbData === null || dbData === void 0 ? void 0 : dbData.dataValues.id },
                        { strIngredient3Id: dbData === null || dbData === void 0 ? void 0 : dbData.dataValues.id },
                    ],
                },
            });
            return { meals: response };
        }
        return null;
    }
}
exports.default = MealsModel;
//# sourceMappingURL=meals.model.js.map