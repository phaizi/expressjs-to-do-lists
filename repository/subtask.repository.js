const { Subtask } = require('../models')

class SubtaskRepository {
  constructor() {}

  async createSubtask({ name, taskid, isCompleted = false }) {
    return await Subtask.create({ name, taskid, isCompleted })
  }

  async updateSubtaskById(id, updatesObj) {
    return await Subtask.update(updatesObj, { where: { id }, returning: true })
  }

  async updateSubtaskByTaskId(taskid, updatesObj) {
    return await Subtask.update(updatesObj, { where: { taskid } })
  }
}

module.exports = new SubtaskRepository()
