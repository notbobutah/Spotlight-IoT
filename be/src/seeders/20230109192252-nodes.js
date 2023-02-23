'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      let node1 = {nodebody:'{"id": "Start","offsetY": 50,"annotations": \
      [{"content": "Start"  }],\
      "shape": {"type": "Flow","shape": "Terminator" }}'};
      let node2 = {nodebody:'{"id": "Init","offsetY": 50,"annotations": \
      [{"content": "Init"  }],\
      "shape": {"type": "Flow","shape": "Process" }}'};
      let node3 = {nodebody:'{"id": "Condition","offsetY": 50,"annotations": \
      [{"content": "Condition"  }],\
      "shape": {"type": "Flow","shape": "Decision" }}'};
      let node4 = {nodebody:'{"id": "Print","offsetY": 50,"annotations": \
      [{"content": "Print"  }],\
      "shape": {"type": "Flow","shape": "PreDefinedProcess" }}'};
      let node5 = {nodebody:'{"id": "Start","offsetY": 50,"annotations": \
      [{"content": "Start"  }],\
      "shape": {"type": "Flow","shape": "Terminator" }}'};
      let node6 = {nodebody:'{"id": "Start","offsetY": 50,"annotations": \
      [{"content": "Start"  }],\
      "shape": {"type": "Flow","shape": "Terminator" }}'};

      await queryInterface.bulkInsert('nodes', [{
      nodebody: node1,createdAt: Now,updatedAt: Now }], {});
      await queryInterface.bulkInsert('nodes', [{
      nodebody: node2,createdAt: Now,updatedAt: Now }], {});
      await queryInterface.bulkInsert('nodes', [{
      nodebody: node3,createdAt: Now,updatedAt: Now }], {});
      await queryInterface.bulkInsert('nodes', [{
      nodebody: node4,createdAt: Now,updatedAt: Now }], {});
      await queryInterface.bulkInsert('nodes', [{
      nodebody: node5,createdAt: Now,updatedAt: Now }], {});
      await queryInterface.bulkInsert('nodes', [{
      nodebody: nodes6,createdAt: Now,updatedAt: Now }], {});
                              

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
