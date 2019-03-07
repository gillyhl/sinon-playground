const randomNumberFromRange = (min, max) => (Math.random() * (max - min)) + min

module.exports = {
  getRandomInteger: (min, max) => Math.floor((Math.random() * (max - min)) + min),
  getRandomNumber: randomNumberFromRange
}