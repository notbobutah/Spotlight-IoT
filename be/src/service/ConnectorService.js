'use strict';
var db = require('../utils/db.js');


/**
 * Add a new connector to the database
 * 
 *
 * body Connector connectorModel object that needs to be added to the diagram
 * no response value expected for this operation
 **/
exports.addconnector = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find connector by ID
 * Returns a single connector
 *
 * connectorId Long ID of connector to return
 * returns Connector
 **/
exports.getconnectorById = function(connectorId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "sourceID" : "sourceID",
  "targetID" : "targetID",
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
 * get all connectors
 * Returns an array pf connectors
 *
 * returns Connector
 **/
exports.getconnectors = function() {
  return new Promise(async function(resolve, reject) {
    console.log('inside get all connectors service')
    var examples = await db.selectConnectors();
    if (Object.keys(examples).length > 0) {
      resolve(examples);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing connector
 * 
 *
 * body Connector connector object that needs to be added to the diagram
 * no response value expected for this operation
 **/
exports.updateconnector = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

