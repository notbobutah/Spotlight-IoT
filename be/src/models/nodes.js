'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  nodes.init({
    nodebody: DataTypes.JSON,
    offsetX: DataTypes.BIGINT,
    offsetY: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'nodes',
  });
  return nodes;
};