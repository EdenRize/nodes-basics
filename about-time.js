import fs from 'fs'
import chalk from 'chalk'
import ms from 'ms'

// chalk demo
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'))

demoAsync()
function demoAsync() {
  fs.readFile('data/timestamp.txt', 'utf8', (err, contents) => {
    if (err) return console.log('Cannot read file')
    contents
      .split(/\r?\n/)
      .map((numStr) => console.log(ms(+numStr, { long: true })))
  })
  console.log('after calling readFile')
}
