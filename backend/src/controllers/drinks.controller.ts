import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import DrinksService from '../services/drinks.service';

export default class DrinksController {
  constructor(private drinksService = new DrinksService()) {}

  public async getAllDrinks(req: Request, res: Response) {
    if (req.query.q) {
      const meal = req.query.q as string;
      const { status, data } = await this.drinksService.getDrinkByName(meal);
      return res.status(mapStatusHTTP(status)).json(data);
    }

    const { status, data } = await this.drinksService.getAllDrinks();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getDrinkById(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.drinksService.getDrinkById(Number(id));
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getDrinkByLetter(req: Request, res: Response) {
    const letter = req.query.q as string;
    const { status, data } = await this.drinksService.getDrinkByLetter(letter);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getRandomDrink(req: Request, res: Response) {
    const { status, data } = await this.drinksService.getRandomDrink();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getIngredients(req: Request, res: Response) {
    const { status, data } = await this.drinksService.getIngredients();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getIngredientByName(req: Request, res: Response) {
    const ingredient = req.query.q as string;
    const { status, data } = await this.drinksService.getFilters('i', ingredient);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getCategories(req: Request, res: Response) {
    const { status, data } = await this.drinksService.getCategories();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getCategoryByName(req: Request, res: Response) {
    const category = req.query.q as string;
    const { status, data } = await this.drinksService.getFilters('c', category);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
