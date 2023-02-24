'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class connectors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  connectors.init({
    conectorbody: DataTypes.JSON,
    sourcenode: DataTypes.BIGINT,
    targetnode: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'connectors',
  });
  return connectors;
};