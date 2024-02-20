import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable('meals_categories', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strCategory: {
        type: DataTypes.STRING,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('meals_categories');
  },
};
