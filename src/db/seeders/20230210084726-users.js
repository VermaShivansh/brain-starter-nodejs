'use strict';
// Utils
const { USER_ROLE, SUPPORTED_LANGUAGES } = require('../../utils/enums');
const { SALT_ROUNDS } = require('../../utils/config');

// Packages
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'user',
      [
        {
          user_id: 1,
          first_name: 'Shivansh',
          last_name: 'Verma',
          primary_email: 'shivansh@gmail.com',
          password: bcrypt.hashSync('sales123', SALT_ROUNDS),
          role: USER_ROLE.SALES_PERSON,
          primary_phone_number: '+917800126821',
          timezone: 'Asia/Kolkata',
          language: SUPPORTED_LANGUAGES.ENGLISH,
          company_id: 1,
          created_at: '2021-06-08T20:00:000',
          updated_at: '2021-06-08T20:00:000',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  },
};
