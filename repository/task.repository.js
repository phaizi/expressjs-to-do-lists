const { Task, Subtask } = require('../models')

class TaskRepository {
  constructor() {}

  async getTask(id) {
    return await Task.findOne({
      where: { id },
      include: [Subtask],
    })
  }

  async createTask({
    name,
    categoryid,
    isCompleted = false,
    daysRemaining = null,
  }) {
    return await Task.create(
      { name, categoryid, isCompleted, daysRemaining },
      { include: [Subtask] },
    )
  }

  async updateTask(id, updatesObj) {
    return await Task.update(updatesObj, { where: { id } })
  }
}

module.exports = new TaskRepository()
