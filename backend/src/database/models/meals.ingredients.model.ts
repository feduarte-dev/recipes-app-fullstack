import { CreationOptional, DataTypes, InferAttributes,
  InferCreationAttributes, Model } from 'sequelize';
import db from '.';

class SequelizeMealsIngredients extends Model<InferAttributes<SequelizeMealsIngredients>,
InferCreationAttributes<SequelizeMealsIngredients>> {
  declare id: CreationOptional<number>;
  declare strIngredient: string;
  declare strDescription: string;
  declare strType: string;
}

SequelizeMealsIngredients.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    strIngredient: {
      type: DataTypes.STRING,
    },
    strDescription: {
      type: DataTypes.STRING,
    },
    strType: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'meals_ingredients',
    timestamps: false,
  },
);

export default SequelizeMealsIngredients;
