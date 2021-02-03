const axios = require('axios')
const config = require('../config')

const headers = {
  'content-type': 'application/octet-stream',
  'x-rapidapi-host': config.apiHost,
  'x-rapidapi-key': config.apiKey,
  useQueryString: true
}

const getResults = async () => {
  const results = await axios({
    method: 'GET',
    url: `https://${config.apiHost}/v2/fixtures/date/2020-02-06`,
    headers
  })
  return results.data.api
}

module.exports = getResults
