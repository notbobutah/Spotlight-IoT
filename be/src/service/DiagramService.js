'use strict';
var db = require('../utils/db.js');

/**
 * Add a new Diagram to the database
 * 
 *
 * body Diagram DiagramModel object that needs to be added to the diagram
 * no response value expected for this operation
 **/
exports.addDiagram = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find Diagram by ID
 * Returns a single Diagram
 *
 * DiagramId Long ID of Diagram to return
 * returns Diagram
 **/
exports.getDiagramById = function(DiagramId) {
  return new Promise(async function(resolve, reject) {
    var dia = await db.selectDiagram(DiagramId);
    if (Object.keys(dia).length > 0) {
      resolve(dia);
    } else {
      reject();
    }
  });
}


/**
 * get all Diagrams
 * Returns an array pf Diagrams
 *
 * returns Diagram
 **/
exports.getDiagrams = function() {
  return new Promise(async function(resolve, reject) {
    console.log('inside get all Diagrams service')
    var examples = await db.selectDiagrams();
    if (Object.keys(examples).length > 0) {
      resolve(examples);
    } else {
      resolve();
    }

  });
}


/**
 * Update an existing Diagram
 * 
 *
 * body Diagram Diagram object that needs to be added to the diagram
 * no response value expected for this operation
 **/
exports.updateDiagram = function(DiagramId, body) {
  return new Promise(function(resolve, reject) {
    let result = db.updateDiagram(DiagramId, body);
    resolve(result);
  });
}

