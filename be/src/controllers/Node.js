'use strict';

var utils = require('../utils/writer.js');
var Node = require('../service/NodeService');

module.exports.addNode = function addNode (req, res, next) {
  var body = req.swagger.params['body'].value;
  Node.addNode(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNodeById = function getNodeById (req, res, next) {
  var nodeId = req.swagger.params['NodeId'].value;
  Node.getNodeById(nodeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNodes = function getNodes (req, res, next) {
  console.log('inside get all nodes controller')
  Node.getNodes()
    .then(function (response) {
      console.log('inside get all nodes controller')

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      console.log('inside get all nodes controller catch: '+response)

      utils.writeJson(res, response);
    });
};

module.exports.updateNode = function updateNode (req, res, next) {
  console.log('inside update node controller')

  var body = req.swagger.params['body'].value;
  var nodeId = req.swagger.params['NodeId'].value;
  Node.updateNode(nodeId,body)
    .then(function (response) {
      console.log('update node response: ' + nodeId)
      console.log(response)
      console.log('update node body:')
      console.log(body)
      prod.postEvent(body)
      console.log(result)
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      console.log('catch update node response')
      prod.postEvent(body)
      utils.writeJson(res, response);
    });
};
