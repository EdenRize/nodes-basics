import { utilService } from './services/util.service.js'

downloadCountryFlags()
function downloadCountryFlags() {
  const countries = getCountries()

  downloadFlags(countries).then(() => {
    console.log('Your flags are ready')
  })
}

function getCountries() {
  const countries = utilService.readJsonFile('./newCountries.json')
  countries.sort((a, b) => b.population - a.population)
  return countries.slice(0, 5)
}

function downloadFlags(countries) {
  return Promise.all(
    countries.map((country) => {
      const fileName = country.name.common
      return utilService.download(country.flags.png, `./flags/${fileName}.png`)
    })
  )
}
