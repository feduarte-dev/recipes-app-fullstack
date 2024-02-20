import { Router } from 'express';
import mealsRouter from './meals.route';
import drinksRouter from './drinks.route';

const router = Router();

router.use('/meals', mealsRouter);
router.use('/drinks', drinksRouter);

export default router;
