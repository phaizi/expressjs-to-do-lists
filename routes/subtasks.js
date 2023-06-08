const express = require('express')
const subtaskService = require('../services/subtask.service')

const router = express.Router()

// create subtask
router.post('/', async function (req, res) {
  try {
    const data = await subtaskService.createSubtask(req.body)

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

// update subtask to complete
// (also update the main task if no other subtask remaining)
router.patch('/', async function (req, res) {
  try {
    const { id } = req.body
    const data = await subtaskService.finishSubtask(id)
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
