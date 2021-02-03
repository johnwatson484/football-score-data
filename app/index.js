(async function () {
  const getResults = require('./api')
  const event = require('./events')

  const results = await getResults()
  console.log(results)
}())
