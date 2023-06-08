const express = require('express')
require('dotenv').config({ path: './.env' })
const path = require('path')
var cors = require('cors')

const categoriesRouter = require('./routes/categories')
const tasksRouter = require('./routes/tasks')
const subtasksRouter = require('./routes/subtasks')

const app = express()

app.use(cors())
// app.use(cors({ origin: ['http://localhost:3000', 'http://127.0.0.1:3000'] }))
// app.options('*', cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/categories', categoriesRouter)
app.use('/api/tasks', tasksRouter)
app.use('/api/subtasks', subtasksRouter)

module.exports = app
