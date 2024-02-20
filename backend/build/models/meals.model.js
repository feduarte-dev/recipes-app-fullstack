"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const meals_model_1 = require("../database/models/meals.model");
class MealsModel {
    constructor() {
        this.model = meals_model_1.default;
        //   async getTeamById(id: number) {
        //     const dbData = await this.model.findByPk(id);
        //     if (!dbData) {
        //       return null;
        //     }
        //     return dbData;
        //   }
    }
    async getAllMeals() {
        const dbData = await this.model.findAll();
        return dbData;
    }
}
exports.default = MealsModel;
//# sourceMappingURL=meals.model.js.map