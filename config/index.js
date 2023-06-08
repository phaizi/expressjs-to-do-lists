const { Sequelize } = require('sequelize')

// const DATABASE_URL = 'postgresql://faizan@localhost:5432/todolistdb'
const DATABASE_URL = process.env.DATABASE_URL

const sequelize = new Sequelize(DATABASE_URL)

sequelize
  .authenticate()
  .then(() => {
    console.log('database connected succussfully...')
  })
  .catch((err) => {
    console.log(`database error occured: ${err}`)
  })

module.exports = { sequelize }
