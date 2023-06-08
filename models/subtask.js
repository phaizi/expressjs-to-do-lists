const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../config')

class Subtask extends Model {}

Subtask.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'iscompleted',
    },
  },
  { sequelize, tableName: 'subtasks', createdAt: false, updatedAt: false },
)

module.exports = Subtask
