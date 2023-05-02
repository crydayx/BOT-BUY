const chalk = require('chalk')

module.exports = function chalkRainbow (str) {
  if (typeof str !== 'string') {
    throw new TypeError('chalk-rainbow expected a string')
  }

  const letters = str.split('')
  const colors = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta']
  const colorsCount = colors.length

  return letters.map((l, i) => {
    const color = colors[i%colorsCount]
    return chalk[color](l)
  }).join('')
}
