import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import db from '.';

class SequelizeMealsCategories extends Model<
InferAttributes<SequelizeMealsCategories>,
InferCreationAttributes<SequelizeMealsCategories>
> {
  declare id: CreationOptional<number>;
  declare strCategory: string;
}

SequelizeMealsCategories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    strCategory: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'meals_categories',
    timestamps: false,
  },
);

export default SequelizeMealsCategories;
