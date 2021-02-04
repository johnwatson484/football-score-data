const axios = require('axios')
const config = require('../config').api

const headers = {
  'content-type': 'application/octet-stream',
  'x-rapidapi-host': config.host,
  'x-rapidapi-key': config.key,
  useQueryString: true
}

const getResults = async () => {
  const results = await axios({
    method: 'GET',
    url: `https://${config.host}/v2/fixtures/date/2020-02-06`,
    headers
  })
  return results.data.api.fixtures
}

module.exports = getResults
