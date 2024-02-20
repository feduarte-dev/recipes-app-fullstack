"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const meals_controller_1 = require("../controllers/meals.controller");
const mealsController = new meals_controller_1.default();
const router = (0, express_1.Router)();
router.get('/', (req, res) => mealsController.getAllMeals(req, res));
// router.get(
//   '/:id',
//   (req: Request, res: Response) => mealsController.getTeamById(req, res),
// );
exports.default = router;
//# sourceMappingURL=meals.route.js.map