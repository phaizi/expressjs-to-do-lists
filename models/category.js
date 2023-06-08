const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../config')

class Category extends Model {}

Category.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, tableName: 'categories', createdAt: false, updatedAt: false },
)

module.exports = Category
