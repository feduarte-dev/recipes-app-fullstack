import { CreationOptional, DataTypes, InferAttributes,
  InferCreationAttributes, Model } from 'sequelize';
import db from '.';

class SequelizeAreas extends Model<InferAttributes<SequelizeAreas>,
InferCreationAttributes<SequelizeAreas>> {
  declare id: CreationOptional<number>;
  declare strArea: string;
}

SequelizeAreas.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    strArea: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'areas',
    timestamps: false,
    underscored: true,
  },
);

export default SequelizeAreas;
