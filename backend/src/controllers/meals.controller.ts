import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import MealsService from '../services/meals.service';

export default class MealsController {
  constructor(private mealsService = new MealsService()) {}

  public async getAllMeals(req: Request, res: Response) {
    if (req.query.q) {
      const meal = req.query.q as string;
      const { status, data } = await this.mealsService.getMealByName(meal);
      return res.status(mapStatusHTTP(status)).json(data);
    }

    const { status, data } = await this.mealsService.getAllMeals();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getMealByLetter(req: Request, res: Response) {
    const letter = req.query.q as string;
    const { status, data } = await this.mealsService.getMealByLetter(letter);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getMealById(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.mealsService.getMealById(Number(id));
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getRandomMeal(req: Request, res: Response) {
    const { status, data } = await this.mealsService.getRandomMeal();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getIngredients(req: Request, res: Response) {
    const { status, data } = await this.mealsService.getIngredients();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getIngredientByName(req: Request, res: Response) {
    const ingredient = req.query.q as string;
    const { status, data } = await this.mealsService.getFilters('i', ingredient);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getCategories(req: Request, res: Response) {
    const { status, data } = await this.mealsService.getCategories();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getCategoryByName(req: Request, res: Response) {
    const category = req.query.q as string;
    const { status, data } = await this.mealsService.getFilters('c', category);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getAreas(req: Request, res: Response) {
    const { status, data } = await this.mealsService.getAreas();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getAreaByName(req: Request, res: Response) {
    const area = req.query.q as string;
    const { status, data } = await this.mealsService.getFilters('a', area);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
