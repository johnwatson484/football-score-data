const config = {
  env: process.env.NODE_ENV,
  api: {
    host: process.env.SCORE_API_HOST || 'api-football-v1.p.rapidapi.com',
    key: process.env.SCORE_API_KEY
  },
  kafka: {
    host: process.env.KAFKA_HOST || 'kafka',
    port: process.env.KAFKA_PORT || 9093,
    username: process.env.KAFKA_CLIENT_USER,
    password: process.env.KAFKA_CLIENT_PASSWORD,
    mechanism: process.env.KAFKA_MECHANISM || 'scram-sha-256',
    clientId: process.env.KAFKA_CLIENT_ID || 'football-score-data',
    topic: process.env.KAFKA_TOPIC || 'results'
  }
}

module.exports = config
