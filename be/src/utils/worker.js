const nodeService = require('../service/NodeService')
const { Kafka, logLevel } = require('kafkajs')

const host = process.env.HOST_IP || 'localhost'

const kafka = new Kafka({
  logLevel: logLevel.INFO,
  brokers: [`${host}:9092`],
  clientId: 'spotlight-worker',
})

const topic = 'diagram-node-change'
const consumer = kafka.consumer({ groupId: 'spotlight-worker' })

var run = async () => {
  console.log('consumer.connect next +++++++++++')
  await consumer.connect()
  console.log('consumer.subscribe next +++++++++++')
  await consumer.subscribe({ topic, fromBeginning: true })
  console.log('consumer.run next +++++++++++')
  await consumer.run({
    // eachBatch: async ({ batch }) => {
    //   console.log(batch)
    // },
    eachMessage: async ({ topic, partition, message }) => {
      const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
      console.log(`worker- ${prefix} ${message.key}#${message.value}`)
      nodeService.updateNode(message.addInfo, message)
    },
  })
}

run().catch(e => console.error(`[spotlight/worker] ${e.message}`, e))

const errorTypes = ['unhandledRejection', 'uncaughtException']
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2']

errorTypes.map(type => {
  process.on(type, async e => {
    try {
      console.log(`process.on ${type}`)
      console.error(e)
      await consumer.disconnect()
      process.exit(0)
    } catch (_) {
      process.exit(1)
    }
  })
})

signalTraps.map(type => {
  process.once(type, async () => {
    try {
      await consumer.disconnect()
    } finally {
      process.kill(process.pid, type)
    }
  })
})
module.exports.runIt = run;