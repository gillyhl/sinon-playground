const { randomAddition, randomAdditionWithModuleImport } = require('../src/calculations')
const random = require('../src/random')

let sandbox
describe('When adding two random numbers together', () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should add two numbers together', () => {
      const stub = sandbox.stub(random, 'getRandomInteger').returns(9)
    const result = randomAddition(1, 9)

    // expect(result).to.equal(18)
    expect(stub.calledTwice).to.be.true
  })
  
  it('should add two numbers together using correct import module', () => {
    const stub = sinon.stub(random, 'getRandomInteger').returns(9)
    const result = randomAdditionWithModuleImport(1, 9)

    expect(result).to.equal(18)
    expect(stub.calledTwice).to.be.true
  })
})