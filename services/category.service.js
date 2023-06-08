const categoryRepository = require('../repository/category.repository')

class CategoryService {
  constructor() {}

  async getCategories() {
    // returns an array
    // empty array if no item found

    return await categoryRepository.getCategories()
  }
}

module.exports = new CategoryService()
