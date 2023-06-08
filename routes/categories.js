const express = require('express')
const categoryService = require('../services/category.service')
const router = express.Router()

// get all categories including tasks and subtasks
router.get('/', async function (req, res, next) {
  try {
    const categories = await categoryService.getCategories()
    if (!categories.length) {
      return res.status(404).json({
        status: 'fail',
        message: 'No category found',
      })
    }
    res.status(200).json({
      status: 'success',
      data: categories,
    })
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Some error occured',
    })
  }
})

module.exports = router
