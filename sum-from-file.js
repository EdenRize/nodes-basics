import fs from 'fs'

sumFromFile('data/timestamp.txt')
  .then((sum) => console.log('Sum:', sum))
  .catch((err) => console.log('Cannot sum:', err))

function sumFromFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, contents) => {
      if (err) return reject('Cannot read file')

      let sum = 0
      contents.split(/\r?\n/).map((numStr) => (sum += +numStr))

      resolve(sum)
    })
  })
}
