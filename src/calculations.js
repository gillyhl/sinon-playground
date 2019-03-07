const { getRandomInteger } = require('./random')
module.exports = {
  randomAddition: (min, max) => {
      return getRandomInteger(min, max) + getRandomInteger(min, max)
    },
    randomAdditionWithModuleImport: (min, max) => {
    const random = require('./random')
    return random.getRandomInteger(min, max) + random.getRandomInteger(min, max)
  }
}