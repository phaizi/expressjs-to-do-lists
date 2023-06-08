const taskRepository = require('../repository/task.repository')
const subtaskRepository = require('../repository/subtask.repository')

class TaskService {
  constructor() {}

  async createTask({
    name,
    categoryid,
    isCompleted = false,
    daysRemaining = null,
  }) {
    return await taskRepository.createTask({
      name,
      categoryid,
      isCompleted,
      daysRemaining,
    })
  }

  async finishTask(id) {
    const task = await taskRepository.getTask(id)
    const subtasks = task.Subtasks.length
    // update all the subtasks of this main task
    if (subtasks) {
      const subtaskUpdated = await subtaskRepository.updateSubtaskByTaskId(id, {
        isCompleted: true,
      })
    }

    const taskupdated = await taskRepository.updateTask(id, {
      isCompleted: true,
      daysRemaining: 0,
    })

    return {
      hasSubtasksUpdated: !!subtasks,
      message: subtasks
        ? `Task and its subtask(s) completed`
        : `Task completed`,
    }
  }
}

module.exports = new TaskService()
