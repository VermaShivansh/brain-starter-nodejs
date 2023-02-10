'use strict';

// Utils
const { USER_ROLE, SUPPORTED_LANGUAGES } = require('../../utils/enums');
// Helpers
const { encrypt } = require('../../helpers/crypto');

// Packages
const { Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    static associate({ Company }) {
      this.belongsTo(Company, { foreignKey: 'company_id' });
    }
  }
  User.init(
    {
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
        validate: {
          notNull: { msg: 'User must have a first name' },
          notEmpty: { msg: 'User first name must not be empty' },
        },
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a last name' },
          notEmpty: { msg: 'User last name must not be empty' },
        },
      },
      primary_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: 'User must have an email address' },
          notEmpty: { msg: 'User email address must not be empty' },
          isEmail: { msg: 'Enter a valid email address.' },
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
        set() {
          const [ecryptedPassword, err] = encrypt(this.password);
          if (err) {
            throw new Error(err);
          }
          this.setDataValue('password', ecryptedPassword);
        },
        get() {
          throw new Error(`Do not try to get password value!`);
        },
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        values: Object.values(USER_ROLE),
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
        values: Object.values(SUPPORTED_LANGUAGES),
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
    },
    {
      timestamps: true,
      sequelize,
      tableName: 'user',
      modelName: 'User',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );
  return User;
};
