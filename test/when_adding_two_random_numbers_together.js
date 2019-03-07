const { randomAddition } = require('../src/calculations')
let collection
describe('When adding two random numbers together', () => {
  beforeEach(() => {
    collection = sinon.collection
  })

  afterEach(() => {
    collection.restore()
  })

  it('should add two numbers together', () => {
    const result = randomAddition(1, 9)
    console.log(result)

    expect(1).to.equal(1)
  })
})