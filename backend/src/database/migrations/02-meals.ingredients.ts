import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable('meals_ingredients', {
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
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('meals_ingredients');
  },
};
