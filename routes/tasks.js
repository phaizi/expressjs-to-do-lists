const express = require('express')
const taskService = require('../services/task.service')

const router = express.Router()

// create task
router.post('/', async function (req, res) {
  try {
    const data = await taskService.createTask(req.body)
    res.status(201).json({
      status: 'success',
      data,
    })
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: 'Some error occured',
    })
  }
})

// update task to complete
// (also update subtasks of this task to complete)
router.patch('/', async function (req, res) {
  try {
    const { id } = req.body
    const data = await taskService.finishTask(id)
    res.status(200).json({
      status: 'success',
      data,
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Some error occured',
    })
  }
})

module.exports = router
