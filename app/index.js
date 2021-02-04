(async function () {
  const getResults = require('./api')
  const kafka = require('./kafka')

  const results = await getResults()

  if (results) {
    await kafka.start()
    Promise.all(results.map(kafka.sendEvent))
    await kafka.stop()
  }
}())
