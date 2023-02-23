'use strict';
const { Model, DataTypes } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class diagrams extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  diagrams.init({
    dname: { DataTypes.STRING, allowNull: false },
    dbody: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'diagrams',
  });


  sequelize.sync().then(() => {
    console.log('Book table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
 return diagrams;
};
