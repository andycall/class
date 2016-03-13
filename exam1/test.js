var noop = function () {}

describe('类型判断', function () {
  it('是否是纯对象', function () {
    Homework.isPlainObject([]).should.be.equal(false)
    Homework.isPlainObject({name: 1}).should.be.equal(true)
    Homework.isPlainObject(noop).should.be.equal(false)
    Homework.isPlainObject(1234).should.be.equal(false)
    Homework.isPlainObject(arguments).should.be.equal(false)
  })

  it('是否是对象类型的变量', function () {
    Homework.isObjectLike([]).should.be.equal(true)
    Homework.isObjectLike(noop).should.be.equal(false)
    Homework.isObjectLike(null).should.be.equal(false)
    Homework.isObjectLike({}).should.be.equal(true)
    Homework.isObjectLike(111).should.be.equal(false)
    Homework.isObjectLike('qwdwqd').should.be.equal(true)
  })

  it('是否是arguments对象', function () {
    (function () {
      Homework.isArguments(arguments).should.be.equal(true)
      Homework.isArguments([]).should.be.equal(false)
      Homework.isArguments({}).should.be.equal(false)
      Homework.isArguments(123).should.be.equal(false)
      Homework.isArguments(noop).should.be.equal(false)
      Homework.isArguments('12345').should.be.equal(false)
    })()
  })

  it('是否是Error对象', function () {
    var error = new Error('this is a error')

    Homework.isError(error).should.be.equal(true)
    Homework.isError(arguments).should.be.equal(false)
    Homework.isError(error).should.be.equal(true)
    Homework.isError(error).should.be.equal(true)
    Homework.isError(error).should.be.equal(true)
    Homework.isError(error).should.be.equal(true)
    Homework.isError(error).should.be.equal(true)
  })
})