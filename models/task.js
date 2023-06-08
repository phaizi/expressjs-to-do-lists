const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../config')

class Task extends Model {}

Task.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'iscompleted',
    },
    daysRemaining: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      field: 'daysremaining',
    },
  },
  { sequelize, tableName: 'tasks', createdAt: false, updatedAt: false },
)

module.exports = Task
