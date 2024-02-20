/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */
import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable('meals', {
      idMeal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strMeal: {
        type: DataTypes.STRING,
      },
      strDrinkAlternate: {
        type: DataTypes.STRING,
      },
      strCategoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_categories',
          key: 'id',
        },
      },
      strAreaId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'areas',
          key: 'id',
        },
      },
      strInstructions: {
        type: DataTypes.STRING,
      },
      strMealThumb: {
        type: DataTypes.STRING,
      },
      strTags: {
        type: DataTypes.STRING,
      },
      strYoutube: {
        type: DataTypes.STRING,
      },
      strIngredient1Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient2Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient3Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient4Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient5Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient6Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient7Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient8Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient9Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient10Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient11Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient12Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient13Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient14Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient15Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient16Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient17Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient18Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient19Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
          key: 'id',
        },
      },
      strIngredient20Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_ingredients',
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
      strMeasure16: {
        type: DataTypes.STRING,
      },
      strMeasure17: {
        type: DataTypes.STRING,
      },
      strMeasure18: {
        type: DataTypes.STRING,
      },
      strMeasure19: {
        type: DataTypes.STRING,
      },
      strMeasure20: {
        type: DataTypes.STRING,
      },
      strSource: {
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
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('meals');
  },
};
