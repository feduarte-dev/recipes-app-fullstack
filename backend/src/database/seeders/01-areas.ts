/* eslint-disable max-lines-per-function */
import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'areas',
      [
        { strArea: 'American' },
        { strArea: 'British' },
        { strArea: 'Canadian' },
        { strArea: 'Chinese' },
        { strArea: 'Croatian' },
        { strArea: 'Dutch' },
        { strArea: 'Egyptian' },
        { strArea: 'Filipino' },
        { strArea: 'French' },
        { strArea: 'Greek' },
        { strArea: 'Indian' },
        { strArea: 'Irish' },
        { strArea: 'Italian' },
        { strArea: 'Jamaican' },
        { strArea: 'Japanese' },
        { strArea: 'Kenyan' },
        { strArea: 'Malaysian' },
        { strArea: 'Mexican' },
        { strArea: 'Moroccan' },
        { strArea: 'Polish' },
        { strArea: 'Portuguese' },
        { strArea: 'Russian' },
        { strArea: 'Spanish' },
        { strArea: 'Thai' },
        { strArea: 'Tunisian' },
        { strArea: 'Turkish' },
        { strArea: 'Unknown' },
        { strArea: 'Vietnamese' },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('areas', {});
  },
};
