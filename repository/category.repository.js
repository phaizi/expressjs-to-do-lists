const { Category, Task, Subtask } = require('../models')

class CategoryRepository {
  constructor() {}

  async getCategories() {
    // returns an array
    // empty array if no item found

    return await Category.findAll({
      include: { model: Task, include: [Subtask] },
    })
  }
}

module.exports = new CategoryRepository()
