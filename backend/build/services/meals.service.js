"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const meals_model_1 = require("../models/meals.model");
const flatResponse_1 = require("../utils/flatResponse");
class MealsService {
    constructor(mealsModel = new meals_model_1.default()) {
        this.mealsModel = mealsModel;
    }
    async getAllMeals() {
        const meals = await this.mealsModel.getAllMeals();
        const fixedMeals = (0, flatResponse_1.flatResponseArray)(meals);
        return { status: 'SUCCESSFUL', data: fixedMeals };
    }
    async getMealById(id) {
        const meal = await this.mealsModel.getMealById(id);
        const fixedMeals = (0, flatResponse_1.flatResponseArray)(meal);
        return { status: 'SUCCESSFUL', data: fixedMeals };
    }
    async getMealByName(meal) {
        const meals = await this.mealsModel.getMealByName(meal);
        const fixedMeals = (0, flatResponse_1.flatResponseObject)(meals);
        return { status: 'SUCCESSFUL', data: fixedMeals };
    }
    async getMealByLetter(letter) {
        const meal = await this.mealsModel.getMealByLetter(letter);
        const fixedMeals = (0, flatResponse_1.flatResponseArray)(meal);
        return { status: 'SUCCESSFUL', data: fixedMeals };
    }
    async getRandomMeal() {
        const meal = await this.mealsModel.getRandomMeal();
        return { status: 'SUCCESSFUL', data: meal };
    }
    async getCategories() {
        const categories = await this.mealsModel.getCategories();
        return { status: 'SUCCESSFUL', data: categories };
    }
    async getAreas() {
        const areas = await this.mealsModel.getAreas();
        return { status: 'SUCCESSFUL', data: areas };
    }
    async getIngredients() {
        const ingredients = await this.mealsModel.getIngredients();
        return { status: 'SUCCESSFUL', data: ingredients };
    }
    async getFilters(type, value) {
        const filters = await this.mealsModel.getFilters(type, value);
        return { status: 'SUCCESSFUL', data: filters };
    }
}
exports.default = MealsService;
//# sourceMappingURL=meals.service.js.map