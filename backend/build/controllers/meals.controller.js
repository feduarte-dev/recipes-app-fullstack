"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatusHTTP_1 = require("../utils/mapStatusHTTP");
const meals_service_1 = require("../services/meals.service");
class MealsController {
    constructor(mealsService = new meals_service_1.default()) {
        this.mealsService = mealsService;
    }
    async getAllMeals(_req, res) {
        const { status, data } = await this.mealsService.getAllMeals();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
}
exports.default = MealsController;
//# sourceMappingURL=meals.controller.js.map