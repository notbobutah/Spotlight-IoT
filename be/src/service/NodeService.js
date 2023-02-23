'use strict';
var db = require('../utils/db.js');

/**
 * Add a new node to the database
 * 
 *
 * body Node NodeModel object that needs to be added to the diagram
 * no response value expected for this operation
 **/
exports.addNode = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find Node by ID
 * Returns a single Node
 *
 * nodeId Long ID of Node to return
 * returns Node
 **/
exports.getNodeById = function(nodeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "offsetX" : 6.02745618307040320615897144307382404804229736328125,
  "offsetY" : 0.80082819046101150206595775671303272247314453125,
  "shape_name" : "shape_name",
  "shape_type" : "shape_type",
  "id" : "id",
  "content" : "content"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all nodes
 * Returns an array pf Nodes
 *
 * returns Node
 **/
exports.getNodes = function() {
  return new Promise(async function(resolve, reject) {
    console.log('inside get all nodes service')
    var examples = await db.selectNodes();
    if (Object.keys(examples).length > 0) {
      resolve(examples);
    } else {
      resolve();
    }

  });
}


/**
 * Update an existing Node
 * 
 *
 * body Node Node object that needs to be added to the diagram
 * no response value expected for this operation
 **/
exports.updateNode = function(NodeId, body) {
  return new Promise(function(resolve, reject) {
    let result = db.updateNode(NodeId, body);
    resolve(result);
  });
}

