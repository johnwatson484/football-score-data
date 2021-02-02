const joi = require('joi')
const envs = ['development', 'test', 'production']

// Define config schema
const schema = joi.object().keys({
  env: joi.string().valid(...envs).default(envs[0]),
  apiHost: joi.string().default('api-football-v1.p.rapidapi.com'),
  apiKey: joi.string()
})

// Build config
const config = {
  env: process.env.NODE_ENV,
  apiHost: process.env.SCORE_API_HOST,
  apiKey: process.env.SCORE_API_KEY
}

// Validate config
const { error, value } = schema.validate(config)

// Throw if config is invalid
if (error) {
  throw new Error(`The server config is invalid. ${error.message}`)
}

module.exports = value
