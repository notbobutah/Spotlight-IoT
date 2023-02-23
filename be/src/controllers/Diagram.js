'use strict';

var utils = require('../utils/writer.js');
var Diagram = require('../service/DiagramService');

module.exports.addDiagram = function addDiagram (req, res, next) {
  var body = req.swagger.params['body'].value;
  Diagram.addDiagram(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDiagramById = function getDiagramById (req, res, next) {
  var diagramId = req.swagger.params['DiagramId'].value;
  Diagram.getDiagramById(diagramId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDiagrams = function getDiagrams (req, res, next) {
  console.log('inside get all diagrams controller')
  Diagram.getDiagrams()
    .then(function (response) {
      console.log('inside get all diagrams controller')

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      console.log('inside get all diagrams controller catch: '+response)

      utils.writeJson(res, response);
    });
};

module.exports.updateDiagram = function updateDiagram (req, res, next) {
  console.log('inside update diagram controller')

  var body = req.swagger.params['body'].value;
  var diagramId = req.swagger.params['DiagramId'].value;
  Diagram.updateDiagram(diagramId,body)
    .then(function (response) {
      console.log('update diagram response: ' + diagramId)
      console.log(response)
      console.log('update diagram body:')
      console.log(body)
      prod.postEvent(body)
      console.log(result)
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      console.log('catch update diagram response')
      prod.postEvent(body)
      utils.writeJson(res, response);
    });
};
