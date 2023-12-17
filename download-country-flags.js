import jsonData from './newCountries.json' assert { type: 'json' }
import { utilService } from './services/util.service.js'

downloadCountryFlags()
function downloadCountryFlags() {
  const countries = getCountries()

  downloadFlags(countries)
  downloadFlags(countries).then(() => {
    console.log('Your flags are ready')
  })
}

function getCountries() {
  jsonData.sort((a, b) => b.population - a.population)
  return jsonData.slice(0, 5)
}

function downloadFlags(countries) {
  return Promise.all(
    countries.map((country) => {
      const fileName = country.name.common
      return utilService.download(country.flags.png, `./flags/${fileName}.png`)
    })
  )
}
