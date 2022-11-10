'use strict';
const { uuid} = require("uuidv4")

const {
  Model
} = require('sequelize');
const { uuid } = require('uuidv4')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      /* Test.hasMany(models.User,{
        foreignKey:'roleId'
      }) */
    }
  };
  User.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'User',
  }),
  User.addHook('beforeSave', async (user) => {
    return user.id = uuid();
  });
  return User;
};