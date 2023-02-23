'use strict';

var utils = require('../utils/writer.js');
var Connector = require('../service/ConnectorService');

module.exports.addconnector = function addconnector (req, res, next) {
  var body = req.swagger.params['body'].value;
  Connector.addconnector(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getconnectorById = function getconnectorById (req, res, next) {
  var connectorId = req.swagger.params['connectorId'].value;
  Connector.getconnectorById(connectorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getconnectors = function getconnectors (req, res, next) {
  Connector.getconnectors()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateconnector = function updateconnector (req, res, next) {
  var body = req.swagger.params['body'].value;
  Connector.updateconnector(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
