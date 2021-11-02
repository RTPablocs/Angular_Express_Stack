const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('users', [{
        id: uuid.v4(),
        name: 'Pablo',
        surname: 'CS',
        username: 'Pablocs',
        mail: 'amdpablocs@gmail.com',
        department: 'JALS',
        password: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      }])
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('users', {})
  }
};
