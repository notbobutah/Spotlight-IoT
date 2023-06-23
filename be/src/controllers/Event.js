// write a kafka producer message posting service endpoint'use strict';

const utils = require('../utils/writer.js');
const events = require('../service/EventService');
const { Kafka } = require("kafkajs")

const clientId = "nodejsAPI"
const brokers = ["kafka1:19092"]
const topic = "aTopic"
const kafka = new Kafka({ clientId, brokers })
const producer = kafka.producer()


module.exports.getEvent = async function getEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  await prod.connect();

      producer.send({
				topic,
				messages: [
					{
						key: String(i),
						value: "this is message " + i,
					},
				],
			})      
    .then( console.log('sending event message to topic: ' + topic) )  
    .catch(e => console.error(`[diagram-node-change/producer] ${e.message}`, e))
};

