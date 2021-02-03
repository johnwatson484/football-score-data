const { Kafka, CompressionTypes, logLevel } = require('kafkajs')

const host = process.env.HOST_IP || 'kafka'

const kafka = new Kafka({
  logLevel: logLevel.DEBUG,
  brokers: [`${host}:9092`],
  clientId: 'football-score-data'
})

const topic = 'results'
const producer = kafka.producer()

const sendEvent = async (value) => {
  await producer.send({
    topic,
    compression: CompressionTypes.GZIP,
    messages: [{ value }]
  })
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
