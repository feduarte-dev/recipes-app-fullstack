import { IdentifiableDrink } from '..';
import { IRecipes } from '../IRecipes';

export interface IDrinks extends IdentifiableDrink, IRecipes {
  strDrink: string;
  strVideo: string | null;
  strIba: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsEs: string | null;
  strInstructionsDe: string | null;
  strInstructionsFr: string | null;
  strInstructionsIt: string | null;
  strInstructionsZhHans: string | null;
  strInstructionsZhHant: string | null;
  strDrinkThumb: string;
  strImageAttribution: string | null;
}
