const logger = require('../utilities/logger')
const mapFields = require('../utilities/map-fields')
const { GoogleSpreadsheet } = require('google-spreadsheet')

module.exports = (config) => {
  const { sheetId, sheetIndex, fieldDefinitions } = config.sources.cdcTests

  const client = new GoogleSpreadsheet(sheetId)

  const getWorksheetData = () => {
    return client
      .loadInfo()
      .then(() => {
        const sheet = client.sheetsByIndex[sheetIndex]
        return sheet.getRows()
      })
      .then((rows) => rows)
  }

  const formatData = (data) => {
    const articles = []
    data.forEach((row) => {
      const result = mapFields(fieldDefinitions, row)
      if (result) {
        articles.push(result)
      }
    })
    return articles
  }

  return {
    formatData,
    fetch: () => {
      return new Promise((resolve, reject) => {
        logger.info('Fetching CDC tests')
        client.useApiKey(process.env.GOOGLE_API_KEY)
        getWorksheetData().then((response) => {
          resolve({
            source: config.sources.cdcTests,
            data: formatData(response),
          })
        })
      })
    },
  }
}