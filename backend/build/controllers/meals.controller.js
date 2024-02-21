"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatusHTTP_1 = require("../utils/mapStatusHTTP");
const meals_service_1 = require("../services/meals.service");
class MealsController {
    constructor(mealsService = new meals_service_1.default()) {
        this.mealsService = mealsService;
    }
    async getAllMeals(req, res) {
        if (req.query.q) {
            const meal = req.query.q;
            const { status, data } = await this.mealsService.getMealByName(meal);
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        }
        const { status, data } = await this.mealsService.getAllMeals();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getMealByLetter(req, res) {
        const letter = req.query.q;
        const { status, data } = await this.mealsService.getMealByLetter(letter);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getMealById(req, res) {
        const { id } = req.params;
        const { status, data } = await this.mealsService.getMealById(Number(id));
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getRandomMeal(req, res) {
        const { status, data } = await this.mealsService.getRandomMeal();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getIngredients(req, res) {
        const { status, data } = await this.mealsService.getIngredients();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getIngredientByName(req, res) {
        const ingredient = req.query.q;
        const { status, data } = await this.mealsService.getFilters('i', ingredient);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getCategories(req, res) {
        const { status, data } = await this.mealsService.getCategories();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getCategoryByName(req, res) {
        const category = req.query.q;
        const { status, data } = await this.mealsService.getFilters('c', category);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getAreas(req, res) {
        const { status, data } = await this.mealsService.getAreas();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getAreaByName(req, res) {
        const area = req.query.q;
        const { status, data } = await this.mealsService.getFilters('a', area);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
}
exports.default = MealsController;
//# sourceMappingURL=meals.controller.js.map