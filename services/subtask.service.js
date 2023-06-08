const subtaskRepository = require('../repository/subtask.repository')
const taskRepository = require('../repository/task.repository')

class SubtaskService {
  constructor() {}

  async createSubtask({ name, taskid, isCompleted = false }) {
    return await subtaskRepository.createSubtask({ name, taskid, isCompleted })
  }

  async finishSubtask(id) {
    const subtaskUpdated = await subtaskRepository.updateSubtaskById(id, {
      isCompleted: true,
    })
    const taskid = subtaskUpdated[1][0].dataValues.taskid
    // if its the last subtask of the main task then main task also need to be completed
    const taskArray = await taskRepository.getTask(taskid)
    // const subtasks = taskArray[0].Subtasks
    const subtasks = taskArray.Subtasks
    let taskupdated = [0]
    if (!subtasks.some((subtask) => !subtask.dataValues.isCompleted)) {
      taskupdated = await taskRepository.updateTask(taskid, {
        isCompleted: true,
        daysRemaining: 0,
      })
    }
    return {
      hasMainTaskUpdated: !!taskupdated[0],
      message: taskupdated[0]
        ? `Task and subtask completed`
        : `Subtask completed`,
    }
  }
}

module.exports = new SubtaskService()
