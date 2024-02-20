import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import db from '.';

class SequelizeDrinksCategories extends Model<
InferAttributes<SequelizeDrinksCategories>,
InferCreationAttributes<SequelizeDrinksCategories>
> {
  declare id: CreationOptional<number>;
  declare strCategory: string;
}

SequelizeDrinksCategories.init(
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
    modelName: 'drinks_categories',
    timestamps: false,
  },
);

export default SequelizeDrinksCategories;
