'use strict';
var Now = new Date();


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let connector1 = '{ "id": "connector1","sourceID": "Start", "targetID": "Init" }';
    let connector2 = '{"id": "connector3", "sourceID": "Condition", "targetID": "Print", "annotations": [{ "content": "Yes" }]}';
    let connector3 = '{"id": "connector4", "sourceID": "Condition", "targetID": "End","annotations": [{ "content": "No" }]}';
    let connector4 = '{ "id": "connector5", "sourceID": "Print", "targetID": "Increment" }';
    let connector5 = '{ "id": "connector6", "sourceID": "Increment", "targetID": "Condition"}';

    await queryInterface.bulkInsert('connectors', [{
    connectorbody: connector1,createdAt: Now,updatedAt: Now }], {});
    await queryInterface.bulkInsert('connectors', [{
    connectorbody: connector2,createdAt: Now,updatedAt: Now }], {});
    await queryInterface.bulkInsert('connectors', [{
    connectorbody: connector3,createdAt: Now,updatedAt: Now }], {});
    await queryInterface.bulkInsert('connectors', [{
    connectorbody: connector4,createdAt: Now,updatedAt: Now }], {});
    await queryInterface.bulkInsert('connectors', [{
    connectorbody: connector5,createdAt: Now,updatedAt: Now }], {});

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
