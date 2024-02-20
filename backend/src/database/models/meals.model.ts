/* eslint-disable max-lines */
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import db from '.';
import SequelizeAreas from './areas.model';
import SequelizeMealsCategories from './meals.categories.model';
import SequelizeMealsIngredients from './meals.ingredients.model';

class SequelizeMeals extends Model<
InferAttributes<SequelizeMeals>,
InferCreationAttributes<SequelizeMeals>
> {
  declare idMeal: CreationOptional<number>;
  declare strMeal: string;
  declare strDrinkAlternate: string | null;
  declare strCategoryId: number;
  declare strAreaId: number;
  declare strInstructions: string;
  declare strMealThumb: string;
  declare strTags: string;
  declare strYoutube: string;
  declare strIngredient1Id: number;
  declare strIngredient2Id: number;
  declare strIngredient3Id: number;
  declare strIngredient4Id: number;
  declare strIngredient5Id: number;
  declare strIngredient6Id: number;
  declare strIngredient7Id: number;
  declare strIngredient8Id: number;
  declare strIngredient9Id: number;
  declare strIngredient10Id: number;
  declare strIngredient11Id: number;
  declare strIngredient12Id: number;
  declare strIngredient13Id: number;
  declare strIngredient14Id: number;
  declare strIngredient15Id: number;
  declare strIngredient16Id: number;
  declare strIngredient17Id: number;
  declare strIngredient18Id: number;
  declare strIngredient19Id: number;
  declare strIngredient20Id: number;
  declare strMeasure1: string | null;
  declare strMeasure2: string | null;
  declare strMeasure3: string | null;
  declare strMeasure4: string | null;
  declare strMeasure5: string | null;
  declare strMeasure6: string | null;
  declare strMeasure7: string | null;
  declare strMeasure8: string | null;
  declare strMeasure9: string | null;
  declare strMeasure10: string | null;
  declare strMeasure11: string | null;
  declare strMeasure12: string | null;
  declare strMeasure13: string | null;
  declare strMeasure14: string | null;
  declare strMeasure15: string | null;
  declare strMeasure16: string | null;
  declare strMeasure17: string | null;
  declare strMeasure18: string | null;
  declare strMeasure19: string | null;
  declare strMeasure20: string | null;
  declare strSource: string | null;
  declare strImageSource: string | null;
  declare strCreativeCommonsConfirmed: string | null;
  declare dateModified: string | null;
}

SequelizeMeals.init(
  {
    idMeal: {
      type: DataTypes.STRING,
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
    },
    strAreaId: {
      type: DataTypes.INTEGER,
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
    },
    strIngredient2Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient3Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient4Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient5Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient6Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient7Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient8Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient9Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient10Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient11Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient12Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient13Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient14Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient15Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient16Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient17Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient18Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient19Id: {
      type: DataTypes.INTEGER,
    },
    strIngredient20Id: {
      type: DataTypes.INTEGER,
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
  },
  {
    sequelize: db,
    modelName: 'meals',
    timestamps: false,
  },
);

SequelizeMeals.belongsTo(SequelizeMealsCategories, {
  foreignKey: 'strCategoryId',
  as: 'strCategory',
});

SequelizeMeals.belongsTo(SequelizeAreas, {
  foreignKey: 'strAreaId',
  as: 'strArea',
});

SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient1Id',
  as: 'strIngredient1',
});

SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient2Id',
  as: 'strIngredient2',
});

SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient3Id',
  as: 'strIngredient3',
});
SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient4Id',
  as: 'strIngredient4',
});
SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient5Id',
  as: 'strIngredient5',
});
SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient6Id',
  as: 'strIngredient6',
});
SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient7Id',
  as: 'strIngredient7',
});
SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient8Id',
  as: 'strIngredient8',
});
SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient9Id',
  as: 'strIngredient9',
});
SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient10Id',
  as: 'strIngredient10',
});
SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient11Id',
  as: 'strIngredient11',
});
SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient12Id',
  as: 'strIngredient12',
});
SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient13Id',
  as: 'strIngredient13',
});
SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient14Id',
  as: 'strIngredient14',
});
SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient15Id',
  as: 'strIngredient15',
});
SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient16Id',
  as: 'strIngredient16',
});
SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient17Id',
  as: 'strIngredient17',
});
SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient18Id',
  as: 'strIngredient18',
});
SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient19Id',
  as: 'strIngredient19',
});

SequelizeMeals.belongsTo(SequelizeMealsIngredients, {
  foreignKey: 'strIngredient20Id',
  as: 'strIngredient20',
});

export default SequelizeMeals;
