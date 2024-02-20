/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */
import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable('drinks', {
      idDrink: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strDrink: {
        type: DataTypes.STRING,
      },
      strDrinkAlternate: {
        type: DataTypes.STRING,
      },
      strCategoryId: {
        type: DataTypes.INTEGER,
      },
      strInstructions: {
        type: DataTypes.STRING,
      },
      strDrinkThumb: {
        type: DataTypes.STRING,
      },
      strTags: {
        type: DataTypes.STRING,
      },
      strIngredient1Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks_ingredients',
          key: 'id',
        },
      },
      strIngredient2Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks_ingredients',
          key: 'id',
        },
      },
      strIngredient3Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks_ingredients',
          key: 'id',
        },
      },
      strIngredient4Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks_ingredients',
          key: 'id',
        },
      },
      strIngredient5Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks_ingredients',
          key: 'id',
        },
      },
      strIngredient6Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks_ingredients',
          key: 'id',
        },
      },
      strIngredient7Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks_ingredients',
          key: 'id',
        },
      },
      strIngredient8Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks_ingredients',
          key: 'id',
        },
      },
      strIngredient9Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks_ingredients',
          key: 'id',
        },
      },
      strIngredient10Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks_ingredients',
          key: 'id',
        },
      },
      strIngredient11Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks_ingredients',
          key: 'id',
        },
      },
      strIngredient12Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks_ingredients',
          key: 'id',
        },
      },
      strIngredient13Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks_ingredients',
          key: 'id',
        },
      },
      strIngredient14Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks_ingredients',
          key: 'id',
        },
      },
      strIngredient15Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drinks_ingredients',
          key: 'id',
        },
      },
      strMeasure1: {
        type: DataTypes.STRING,
      },
      strMeasure2: {
        type: DataTypes.STRING,
      },
      strMeasure3: {
        type: DataTypes.STRING,
      },
      strMeasure4: {
        type: DataTypes.STRING,
      },
      strMeasure5: {
        type: DataTypes.STRING,
      },
      strMeasure6: {
        type: DataTypes.STRING,
      },
      strMeasure7: {
        type: DataTypes.STRING,
      },
      strMeasure8: {
        type: DataTypes.STRING,
      },
      strMeasure9: {
        type: DataTypes.STRING,
      },
      strMeasure10: {
        type: DataTypes.STRING,
      },
      strMeasure11: {
        type: DataTypes.STRING,
      },
      strMeasure12: {
        type: DataTypes.STRING,
      },
      strMeasure13: {
        type: DataTypes.STRING,
      },
      strMeasure14: {
        type: DataTypes.STRING,
      },
      strMeasure15: {
        type: DataTypes.STRING,
      },
      strVideo: {
        type: DataTypes.STRING,
      },
      strImageSource: {
        type: DataTypes.STRING,
      },
      strCreativeCommonsConfirmed: {
        type: DataTypes.STRING,
      },
      dateModified: {
        type: DataTypes.STRING,
      },
      strIba: {
        type: DataTypes.STRING,
      },
      strAlcoholic: {
        type: DataTypes.STRING,
      },
      strGlass: {
        type: DataTypes.STRING,
      },
      strInstructionsEs: {
        type: DataTypes.STRING,
      },
      strInstructionsDe: {
        type: DataTypes.STRING,
      },
      strInstructionsFr: {
        type: DataTypes.STRING,
      },
      strInstructionsIt: {
        type: DataTypes.STRING,
      },
      strInstructionsZhHans: {
        type: DataTypes.STRING,
      },
      strInstructionsZhHant: {
        type: DataTypes.STRING,
      },
      strImageAttribution: {
        type: DataTypes.STRING,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('drinks');
  },
};
