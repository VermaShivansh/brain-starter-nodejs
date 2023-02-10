'use strict';
const { USER_ROLE, SUPPORTED_LANGUAGES } = require('../../utils/enums');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      company_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      primary_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      linkedin_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      primary_phone_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      timezone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      language: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: SUPPORTED_LANGUAGES.ENGLISH,
      },
      //   profile_picture: {
      //     type: Sequelize.VIRTUAL,
      //     get() {
      //       return `https://storage.googleapis.com/apt-cubist-307713.appspot.com/crm/profile-images/${this.user_id}`;
      //     },
      //     set(value) {
      //       throw new Error('Do not try to set the `profile_picture` value!');
      //     },
      //   },
      //   is_profile_picture_present: {
      //     type: Sequelize.BOOLEAN,
      //     allowNull: false,
      //     defaultValue: false,
      //   },
      is_onboarding_complete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  },
};
