'use strict';
// Packages
const { Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class Company extends Model {
    static associate({ User }) {
      this.hasMany(User, { foreignKey: 'company_id' });
    }
  }
  Company.init(
    {
      company_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      linkedin_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      sequelize,
      tableName: 'company',
      modelName: 'Company',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );
  return Company;
};
