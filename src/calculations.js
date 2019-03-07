const { getRandomInteger, getRandomNumber } = require('./random')

module.exports = {
  randomAddition = (min, max) => {
    return getRandomInteger(min, max) + getRandomInteger(min, max)
  }
}