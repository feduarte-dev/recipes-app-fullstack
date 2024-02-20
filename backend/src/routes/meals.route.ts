import { Request, Response, Router } from 'express';
import MealsController from '../controllers/meals.controller';

const mealsController = new MealsController();

const router = Router();

router.get(
  '/name',
  (req: Request, res: Response) => mealsController.getAllMeals(req, res),
);

router.get(
  '/letter',
  (req: Request, res: Response) => mealsController.getMealByLetter(req, res),
);

router.get(
  '/random',
  (req: Request, res: Response) => mealsController.getRandomMeal(req, res),
);

router.get(
  '/categories',
  (req: Request, res: Response) => mealsController.getCategories(req, res),
);

router.get(
  '/areas',
  (req: Request, res: Response) => mealsController.getAreas(req, res),
);

router.get(
  '/ingredient',
  (req: Request, res: Response) => mealsController.getIngredientByName(req, res),
);

router.get(
  '/category',
  (req: Request, res: Response) => mealsController.getCategoryByName(req, res),
);

router.get(
  '/area',
  (req: Request, res: Response) => mealsController.getAreaByName(req, res),
);

router.get(
  '/ingredients',
  (req: Request, res: Response) => mealsController.getIngredients(req, res),
);

router.get(
  '/:id',
  (req: Request, res: Response) => mealsController.getMealById(req, res),
);

export default router;
