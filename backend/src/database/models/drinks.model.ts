/* eslint-disable max-lines */
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import db from '.';
import SequelizeDrinksCategories from './drinks.categories.model';
import SequelizeDrinksIngredients from './drinks.ingredients.model';

class SequelizeDrinks extends Model<
InferAttributes<SequelizeDrinks>,
InferCreationAttributes<SequelizeDrinks>
> {
  declare idDrink: CreationOptional<number>;
  declare strDrink: string;
  declare strDrinkAlternate: string | null;
  declare strTags: string;
  declare strVideo: string | null;
  declare strCategoryId: number;
  declare strIba: null;
  declare strAlcoholic: string;
  declare strGlass: string;
  declare strInstructions: string | null;
  declare strInstructionsEs: string | null;
  declare strInstructionsDe: string | null;
  declare strInstructionsFr: string | null;
  declare strInstructionsIt: string | null;
  declare strInstructionszgHans: string | null;
  declare strInstructionszgHat: string | null;
  declare strDrinkThumb: string;
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

  declare strImageAttribution: string | null;
  declare strImageSource: string | null;
  declare strCreativeCommonsConfirmed: string | null;
  declare dateModified: string | null;
}

SequelizeDrinks.init(
  {
    idDrink: {
      type: DataTypes.STRING,
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
    strInstructionszgHans: {
      type: DataTypes.STRING,
    },
    strInstructionszgHat: {
      type: DataTypes.STRING,
    },
    strImageAttribution: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'drinks',
    timestamps: false,
  },
);

SequelizeDrinks.belongsTo(SequelizeDrinksCategories, {
  foreignKey: 'strCategoryId',
  as: 'strCategory',
});

SequelizeDrinks.belongsTo(SequelizeDrinksIngredients, {
  foreignKey: 'strIngredient1Id',
  as: 'strIngredient1',
});

SequelizeDrinks.belongsTo(SequelizeDrinksIngredients, {
  foreignKey: 'strIngredient2Id',
  as: 'strIngredient2',
});

SequelizeDrinks.belongsTo(SequelizeDrinksIngredients, {
  foreignKey: 'strIngredient3Id',
  as: 'strIngredient3',
});
SequelizeDrinks.belongsTo(SequelizeDrinksIngredients, {
  foreignKey: 'strIngredient4Id',
  as: 'strIngredient4',
});
SequelizeDrinks.belongsTo(SequelizeDrinksIngredients, {
  foreignKey: 'strIngredient5Id',
  as: 'strIngredient5',
});
SequelizeDrinks.belongsTo(SequelizeDrinksIngredients, {
  foreignKey: 'strIngredient6Id',
  as: 'strIngredient6',
});
SequelizeDrinks.belongsTo(SequelizeDrinksIngredients, {
  foreignKey: 'strIngredient7Id',
  as: 'strIngredient7',
});
SequelizeDrinks.belongsTo(SequelizeDrinksIngredients, {
  foreignKey: 'strIngredient8Id',
  as: 'strIngredient8',
});
SequelizeDrinks.belongsTo(SequelizeDrinksIngredients, {
  foreignKey: 'strIngredient9Id',
  as: 'strIngredient9',
});
SequelizeDrinks.belongsTo(SequelizeDrinksIngredients, {
  foreignKey: 'strIngredient10Id',
  as: 'strIngredient10',
});
SequelizeDrinks.belongsTo(SequelizeDrinksIngredients, {
  foreignKey: 'strIngredient11Id',
  as: 'strIngredient11',
});
SequelizeDrinks.belongsTo(SequelizeDrinksIngredients, {
  foreignKey: 'strIngredient12Id',
  as: 'strIngredient12',
});
SequelizeDrinks.belongsTo(SequelizeDrinksIngredients, {
  foreignKey: 'strIngredient13Id',
  as: 'strIngredient13',
});
SequelizeDrinks.belongsTo(SequelizeDrinksIngredients, {
  foreignKey: 'strIngredient14Id',
  as: 'strIngredient14',
});
SequelizeDrinks.belongsTo(SequelizeDrinksIngredients, {
  foreignKey: 'strIngredient15Id',
  as: 'strIngredient15',
});

export default SequelizeDrinks;
