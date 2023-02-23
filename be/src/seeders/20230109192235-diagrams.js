'use strict';
const { Pool } = require('pg');
let fs = require('fs');

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_SERVER,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
})

  pool.on('connect', () => {
    console.log('connected to the spotlight db');
  });

  var Now = new Date();
  

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
      console.log("Running up loadDiagramData seed")
      let empty = fs.readFileSync('./data/empty.json').toString()
      let f1 = fs.readFileSync('./data/f1.json').toString();
      let f2 = fs.readFileSync('./data/f2.json').toString();
      let f3 = fs.readFileSync('./data/f3.json').toString();

      await queryInterface.bulkInsert('diagrams', [{
          dname: 'Blank Chart',
           dbody: empty,
           createdAt: Now,
           updatedAt: Now
         }], {});
      await queryInterface.bulkInsert('diagrams', [{
          dname: 'F1 Chart',
           dbody: f1,
           createdAt: Now,
           updatedAt: Now
         }], {});
      await queryInterface.bulkInsert('diagrams', [{
          dname: 'F2 Chart',
           dbody: f2,
           createdAt: Now,
           updatedAt: Now
         }], {});
      await queryInterface.bulkInsert('diagrams', [{
          dname: 'F3 Chart',
           dbody: f3,
           createdAt: Now,
           updatedAt: Now
         }], {});
    
      console.log("Loaded data file: f1,f2,f3,empty")
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('diagrams', null, {});
     
  }
};
