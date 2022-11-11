'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reviews', {
      id:{
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
       unique: true,
       primaryKey: true,
       allowNull: false
      },
      comment: {
       type: DataTypes.TEXT,
       allowNull: false
      },
      rating: {
       type: DataTypes.FLOAT,
       allowNull: false
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
    await queryInterface.dropTable('Reviews');

 }
};