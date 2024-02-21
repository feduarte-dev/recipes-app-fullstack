"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const meals_controller_1 = require("../controllers/meals.controller");
const mealsController = new meals_controller_1.default();
const router = (0, express_1.Router)();
router.get('/name', (req, res) => mealsController.getAllMeals(req, res));
router.get('/letter', (req, res) => mealsController.getMealByLetter(req, res));
router.get('/random', (req, res) => mealsController.getRandomMeal(req, res));
router.get('/categories', (req, res) => mealsController.getCategories(req, res));
router.get('/areas', (req, res) => mealsController.getAreas(req, res));
router.get('/ingredient', (req, res) => mealsController.getIngredientByName(req, res));
router.get('/category', (req, res) => mealsController.getCategoryByName(req, res));
router.get('/area', (req, res) => mealsController.getAreaByName(req, res));
router.get('/ingredients', (req, res) => mealsController.getIngredients(req, res));
router.get('/:id', (req, res) => mealsController.getMealById(req, res));
exports.default = router;
//# sourceMappingURL=meals.route.js.map