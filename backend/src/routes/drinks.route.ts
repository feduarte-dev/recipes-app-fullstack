import { Request, Response, Router } from 'express';
import DrinksController from '../controllers/drinks.controller';

const drinksController = new DrinksController();

const router = Router();

router.get(
  '/name',
  (req: Request, res: Response) => drinksController.getAllDrinks(req, res),
);

router.get(
  '/letter',
  (req: Request, res: Response) => drinksController.getDrinkByLetter(req, res),
);

router.get(
  '/random',
  (req: Request, res: Response) => drinksController.getRandomDrink(req, res),
);

router.get(
  '/categories',
  (req: Request, res: Response) => drinksController.getCategories(req, res),
);

router.get(
  '/ingredient',
  (req: Request, res: Response) => drinksController.getIngredientByName(req, res),
);

router.get(
  '/category',
  (req: Request, res: Response) => drinksController.getCategoryByName(req, res),
);

router.get(
  '/ingredients',
  (req: Request, res: Response) => drinksController.getIngredients(req, res),
);

router.get(
  '/:id',
  (req: Request, res: Response) => drinksController.getDrinkById(req, res),
);

export default router;
