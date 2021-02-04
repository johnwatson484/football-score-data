const config = require('../config').kafka
const { Kafka, CompressionTypes, logLevel } = require('kafkajs')

const kafka = new Kafka({
  logLevel: logLevel.DEBUG,
  brokers: [`${config.host}:${config.port}`],
  clientId: 'football-score-data'
})

const topic = config.topic
const producer = kafka.producer()

const sendEvent = async (value) => {
  value = serializeEvent(value)
  await producer.send({
    topic,
    compression: CompressionTypes.GZIP,
    messages: [{ value }]
  })
}

const serializeEvent = (value) => {
  return JSON.stringify(value)
}

const start = async () => {
  await producer.connect()
}

const stop = async () => {
  await producer.disconnect()
}

process.on('SIGINT', async () => {
  await producer.disconnect()
})

process.on('SIGTERM', async () => {
  await producer.disconnect()
})

module.exports = {
  start, stop, sendEvent
}
