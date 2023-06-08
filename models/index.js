const Category = require('./category')
const Task = require('./task')
const Subtask = require('./subtask')

Category.hasMany(Task, { foreignKey: 'categoryid' })
Task.belongsTo(Category, { foreignKey: 'categoryid' })
Task.hasMany(Subtask, { foreignKey: 'taskid' })
Subtask.belongsTo(Task, { foreignKey: 'taskid' })

module.exports = { Category, Task, Subtask }
