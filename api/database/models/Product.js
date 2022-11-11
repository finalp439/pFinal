"use strict";
const { uuid } = require("uuidv4");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.Category, {
        through: "product_has_category",
        foreignKey : "productId",
        constraints:false
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.ARRAY(DataTypes.STRING),
      price: DataTypes.FLOAT,
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "Product",
    }
  );
  Product.addHook("beforeSave", async (product) => {
    return (product.id = uuid());
  });
  return Product;
};
