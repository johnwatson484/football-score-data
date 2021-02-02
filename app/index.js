const axios = require('axios')
const config = require('./config')

const headers = {
  'content-type': 'application/octet-stream',
  'x-rapidapi-host': config.apiHost,
  'x-rapidapi-key': config.apiKey,
  useQueryString: true
}

const getResults = async () => {
  return axios({
    method: 'GET',
    url: `https://${config.apiHost}/fixtures`,
    headers
  })
}

(async function () {
  const fixtures = await getResults()
  console.log(fixtures)
}())
