const { Kafka, CompressionTypes, logLevel } = require('kafkajs')
const request = require('request')

const registry = new SchemaRegistry({ host: 'http://registry:8081/' })
const { KAFKA_USERNAME: username, KAFKA_PASSWORD: password } = process.env
const sasl = username && password ? { username, password, mechanism: 'plain' } : null
const ssl = !!sasl
const topic = 'diagram-node-change'

// This creates a client instance that is configured to connect to the Kafka broker provided by
// the environment variable KAFKA_BOOTSTRAP_SERVER
const kafka = new Kafka({
  logLevel: logLevel.DEBUG,
  brokers: [`broker:9092`, 'broker:9091'],
  clientId: 'spotlight-producer',
})
const prod = kafka.producer();

module.exports.postEvent = async function postEvent (message_body) {
   await prod.connect();
   console.log("+++++++ Producer publishing ++++++++++++++++++++++++++++++++++++++++++++")
  await prod
      .send({
          topic,
          messages: [{ key: key, value: value}],
       })
      .then(
        console.log('sending event message to topic: ' + topic)
       )
      .catch(e => console.error(`[diagram-node-change/producer] ${e.message}`, e))
};

