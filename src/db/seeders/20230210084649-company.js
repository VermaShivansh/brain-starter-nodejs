'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'company',
      [
        {
          company_id: 1,
          name: 'Sales.io',
          url: 'https://www.sales.io',
          linkedin_url: 'https://www.linkedin.com/company/salesio/mycompany/',
          location: 'France',
          created_at: '2021-06-08T20:00:000',
          updated_at: '2021-06-08T20:00:000',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('company', null, {});
  },
};
