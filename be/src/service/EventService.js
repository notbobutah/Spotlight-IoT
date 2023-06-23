'use strict';


/**
 * use a get call to send a kafka message
 * No return
 *
 **/
exports.getEvent = function() {
  return new Promise(async function(resolve, reject) {
    console.log('inside produce event service')
  });
}

