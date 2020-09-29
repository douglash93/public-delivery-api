'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i=0;i<15;i++) {
      await queryInterface.bulkInsert('Product', [{
        name: `Produto ${i}`,
        description: `Descrição ${i}`,
        price: 50.20,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    }    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
