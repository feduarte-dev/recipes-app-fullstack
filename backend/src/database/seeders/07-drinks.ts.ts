/* eslint-disable max-len */
/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'drinks',
      [
        {
          strDrink: 'A1',
          strDrinkAlternate: null,
          strTags: null,
          strVideo: null,
          strCategoryId: 1,
          strIba: null,
          strAlcoholic: 'Alcoholic',
          strGlass: 'Cockstail glass',
          strInstructions:
            'Pour sall ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.',
          strInstructionsEs:
            'Viertad todos los ingredientes en una coctelera, mezcle y sirva con hielo en un vaso fr\u00edo.',
          strInstructionsDe:
            'Alle Zutaften in einen Cocktailshaker geben, mischen und \u00fcber Eis in ein gek\u00fchltes Glas servieren.',
          strInstructionsFr: null,
          strInstructionsIt:
            'Versare tuttis gli ingredienti in uno shaker, mescolare e servire con ghiaccio in un bicchiere freddo.',
          strInstructionsZhHans: null,
          strInstructionsZhHant: null,
          strDrinkThumb:
            'https://www.thecocktaildb.com/images/media/drink/rvuswq1461867714.jpg',
          strIngredient1Id: 1,
          strIngredient2Id: 2,
          strIngredient3Id: 3,
          strIngredient4Id: null,
          strIngredient5Id: null,
          strIngredient6Id: null,
          strIngredient7Id: null,
          strIngredient8Id: null,
          strIngredient9Id: null,
          strIngredient10Id: null,
          strIngredient11Id: null,
          strIngredient12Id: null,
          strIngredient13Id: null,
          strIngredient14Id: null,
          strIngredient15Id: null,
          strMeasure1: '3/4 shot ',
          strMeasure2: '1 Shot ',
          strMeasure3: '1/4 Shot',
          strMeasure4: null,
          strMeasure5: null,
          strMeasure6: null,
          strMeasure7: null,
          strMeasure8: null,
          strMeasure9: null,
          strMeasure10: null,
          strMeasure11: null,
          strMeasure12: null,
          strMeasure13: null,
          strMeasure14: null,
          strMeasure15: null,
          strImageSource: null,
          strImageAttribution: null,
          strCreativeCommonsConfirmed: 'No',
          dateModified: '1017-09-07 21:42:09',
        },
        {
          strDrink: 'asdasasd',
          strDrinkAlternate: null,
          strTags: null,
          strVideo: null,
          strCategoryId: 2,
          strIba: null,
          strAlcoholic: 'Alcoholic',
          strGlass: 'Cocsktail glass',
          strInstructions:
            'Pour all ingreddients into a cocktail shaker, mix and serve over ice into a chilled glass.',
          strInstructionsEs:
            'Vierta todos los inggredientes en una coctelera, mezcle y sirva con hielo en un vaso fr\u00edo.',
          strInstructionsDe:
            'Alle Zutaten in einen Cocjktailshaker geben, mischen und \u00fcber Eis in ein gek\u00fchltes Glas servieren.',
          strInstructionsFr: null,
          strInstructionsIt:
            'Versare tutti gli ingrediesnti in uno shaker, mescolare e servire con ghiaccio in un bicchiere freddo.',
          strInstructionsZhHans: null,
          strInstructionsZhHant: null,
          strDrinkThumb:
            'https://www.thecocktaildb.com/images/media/drink/jxstwf1582582101.jpg',
          strIngredient1Id: 1,
          strIngredient2Id: 2,
          strIngredient3Id: 3,
          strIngredient4Id: null,
          strIngredient5Id: null,
          strIngredient6Id: null,
          strIngredient7Id: null,
          strIngredient8Id: null,
          strIngredient9Id: null,
          strIngredient10Id: null,
          strIngredient11Id: null,
          strIngredient12Id: null,
          strIngredient13Id: null,
          strIngredient14Id: null,
          strIngredient15Id: null,
          strMeasure1: '1 34 shot ',
          strMeasure2: '1 Shot ',
          strMeasure3: '1/4 Shot',
          strMeasure4: null,
          strMeasure5: null,
          strMeasure6: null,
          strMeasure7: null,
          strMeasure8: null,
          strMeasure9: null,
          strMeasure10: null,
          strMeasure11: null,
          strMeasure12: null,
          strMeasure13: null,
          strMeasure14: null,
          strMeasure15: null,
          strImageSource: null,
          strImageAttribution: null,
          strCreativeCommonsConfirmed: 'No',
          dateModified: '2016-09-07 21:42:09',
        },
        {
          strDrink: 'gdgdfgdf',
          strDrinkAlternate: null,
          strTags: null,
          strVideo: null,
          strCategoryId: 3,
          strIba: null,
          strAlcoholic: 'Alcoholic',
          strGlass: 'Cocaktail glass',
          strInstructions:
            'Pour all ingredients indto a cocktail shaker, mix and serve over ice into a chilled glass.',
          strInstructionsEs:
            'Vierta todos los ingredientegs en una coctelera, mezcle y sirva con hielo en un vaso fr\u00edo.',
          strInstructionsDe:
            'Alle Zutaten in einen Cocktaijshaker geben, mischen und \u00fcber Eis in ein gek\u00fchltes Glas servieren.',
          strInstructionsFr: null,
          strInstructionsIt:
            'Versare tutti gli ingredienti zin uno shaker, mescolare e servire con ghiaccio in un bicchiere freddo.',
          strInstructionsZhHans: null,
          strInstructionsZhHant: null,
          strDrinkThumb:
            'https://www.thecocktaildb.com/images/media/drink/b522ek1521761610.jpg',
          strIngredient1Id: 1,
          strIngredient2Id: 2,
          strIngredient3Id: 3,
          strIngredient4Id: null,
          strIngredient5Id: null,
          strIngredient6Id: null,
          strIngredient7Id: null,
          strIngredient8Id: null,
          strIngredient9Id: null,
          strIngredient10Id: null,
          strIngredient11Id: null,
          strIngredient12Id: null,
          strIngredient13Id: null,
          strIngredient14Id: null,
          strIngredient15Id: null,
          strMeasure1: '13/4 shot ',
          strMeasure2: '1 Shot ',
          strMeasure3: '1/4 Shot',
          strMeasure4: null,
          strMeasure5: null,
          strMeasure6: null,
          strMeasure7: null,
          strMeasure8: null,
          strMeasure9: null,
          strMeasure10: null,
          strMeasure11: null,
          strMeasure12: null,
          strMeasure13: null,
          strMeasure14: null,
          strMeasure15: null,
          strImageSource: null,
          strImageAttribution: null,
          strCreativeCommonsConfirmed: 'No',
          dateModified: '2015-09-07 21:42:09',
        },
        {
          strDrink: 'oiuuioui',
          strDrinkAlternate: null,
          strTags: null,
          strVideo: null,
          strCategoryId: 4,
          strIba: null,
          strAlcoholic: 'Alcoholic',
          strGlass: 'Cocktail glass',
          strInstructions:
            'Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.',
          strInstructionsEs:
            'Vierta todos los ingredientes en una coctelera, mezcle y sirva con hielo en un vaso fr\u00edo.',
          strInstructionsDe:
            'Alle Zutaten in einen Cocktailshaker geben, mischen und \u00fcber Eis in ein gek\u00fchltes Glas servieren.',
          strInstructionsFr: null,
          strInstructionsIt:
            'Versare tutti gli ingredienti in uno shaker, mescolare e servire con ghiaccio in un bicchiere freddo.',
          strInstructionsZhHans: null,
          strInstructionsZhHant: null,
          strDrinkThumb:
            'https://www.thecocktaildb.com/images/media/drink/m1suzm1487603970.jpg',
          strIngredient1Id: 1,
          strIngredient2Id: 2,
          strIngredient3Id: 3,
          strIngredient4Id: null,
          strIngredient5Id: null,
          strIngredient6Id: null,
          strIngredient7Id: null,
          strIngredient8Id: null,
          strIngredient9Id: null,
          strIngredient10Id: null,
          strIngredient11Id: null,
          strIngredient12Id: null,
          strIngredient13Id: null,
          strIngredient14Id: null,
          strIngredient15Id: null,
          strMeasure1: '1 3/4 shot ',
          strMeasure2: '1 Shot ',
          strMeasure3: '1/4 Shot',
          strMeasure4: null,
          strMeasure5: null,
          strMeasure6: null,
          strMeasure7: null,
          strMeasure8: null,
          strMeasure9: null,
          strMeasure10: null,
          strMeasure11: null,
          strMeasure12: null,
          strMeasure13: null,
          strMeasure14: null,
          strMeasure15: null,
          strImageSource: null,
          strImageAttribution: null,
          strCreativeCommonsConfirmed: 'No',
          dateModified: '2017-09-07 21:42:09',
        },
        {
          strDrink: 'nbmbnmbn',
          strDrinkAlternate: null,
          strTags: null,
          strVideo: null,
          strCategoryId: 5,
          strIba: null,
          strAlcoholic: 'Alcoholic',
          strGlass: 'Cocktail glass',
          strInstructions:
            'Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.',
          strInstructionsEs:
            'Vierta todos los ingredientes en una coctelera, mezcle y sirva con hielo en un vaso fr\u00edo.',
          strInstructionsDe:
            'Alle Zutaten in einen Cocktailshaker geben, mischen und \u00fcber Eis in ein gek\u00fchltes Glas servieren.',
          strInstructionsFr: null,
          strInstructionsIt:
            'Versare tutti gli ingredienti in uno shaker, mescolare e servire con ghiaccio in un bicchiere freddo.',
          strInstructionsZhHans: null,
          strInstructionsZhHant: null,
          strDrinkThumb:
            'https://www.thecocktaildb.com/images/media/drink/doyxqb1493067556.jpg',
          strIngredient1Id: 1,
          strIngredient2Id: 2,
          strIngredient3Id: 3,
          strIngredient4Id: null,
          strIngredient5Id: null,
          strIngredient6Id: null,
          strIngredient7Id: null,
          strIngredient8Id: null,
          strIngredient9Id: null,
          strIngredient10Id: null,
          strIngredient11Id: null,
          strIngredient12Id: null,
          strIngredient13Id: null,
          strIngredient14Id: null,
          strIngredient15Id: null,
          strMeasure1: '1 3/4 shot ',
          strMeasure2: '1 Shot ',
          strMeasure3: '1/4 Shot',
          strMeasure4: null,
          strMeasure5: null,
          strMeasure6: null,
          strMeasure7: null,
          strMeasure8: null,
          strMeasure9: null,
          strMeasure10: null,
          strMeasure11: null,
          strMeasure12: null,
          strMeasure13: null,
          strMeasure14: null,
          strMeasure15: null,
          strImageSource: null,
          strImageAttribution: null,
          strCreativeCommonsConfirmed: 'No',
          dateModified: '2017-09-07 21:42:09',
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('drinks', {});
  },
};