'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id:{
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
       unique: true,
       primaryKey: true,
       allowNull: false
      },
      fullName: {
       type: DataTypes.STRING,
       allowNull: false
      },
      email: {
       type: DataTypes.STRING,
       allowNull: false
      },
      password: {
       type: DataTypes.STRING,
       allowNull: false
      },
      phone: {
       type: DataTypes.STRING
      }, 
      createdAt: {
         allowNull: false,
         type: Sequelize.DATE
       },
       updatedAt: {
         allowNull: false,
         type: Sequelize.DATE
       },
       deletedAt: {
         type: Sequelize.DATE
       }
     });
 },

 down: async (queryInterface, Sequelize) => { 
    await queryInterface.dropTable('Users');

 }
};
