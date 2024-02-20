"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const meals_model_1 = require("../models/meals.model");
class MealsService {
    constructor(mealsModel = new meals_model_1.default()) {
        this.mealsModel = mealsModel;
    }
    async getAllMeals() {
        const meals = await this.mealsModel.getAllMeals();
        return { status: 'SUCCESSFUL', data: meals };
    }
}
exports.default = MealsService;
//# sourceMappingURL=meals.service.js.map