import { CreationOptional, DataTypes, InferAttributes,
  InferCreationAttributes, Model } from 'sequelize';
import db from '.';

class SequelizeDrinksIngredients extends Model<InferAttributes<SequelizeDrinksIngredients>,
InferCreationAttributes<SequelizeDrinksIngredients>> {
  declare id: CreationOptional<number>;
  declare strIngredient1: string;
}

SequelizeDrinksIngredients.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    strIngredient1: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'drinks_ingredients',
    timestamps: false,
  },
);

export default SequelizeDrinksIngredients;
