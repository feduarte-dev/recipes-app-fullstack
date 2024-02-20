import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable('areas', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strArea: {
        type: DataTypes.STRING,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('areas');
  },
};
