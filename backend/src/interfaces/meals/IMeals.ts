import { IdentifiableMeal } from '..';
import { IRecipes } from '../IRecipes';
import { IAreas } from './IAreas';

export interface IMeals extends IdentifiableMeal, IAreas, IRecipes {
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strIngredient16Id: number;
  strIngredient17Id: number;
  strIngredient18Id: number;
  strIngredient19Id: number;
  strIngredient20Id: number;
  strMeasure16: string | null;
  strMeasure17: string | null;
  strMeasure18: string | null;
  strMeasure19: string | null;
  strMeasure20: string | null;
}
