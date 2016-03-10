var noop = function () {}

describe('在字符串中找到图片的地址', function () {
	var str = "http://yjly.bj.bcebos.com/yjly/Scenic/143088823736851.jpg,http://yjly.bj.bcebos.com/yjly/Scenic/143088823739481.jpg,http://yjly.bj.bcebos.com/yjly/Scenic/143088823739695.jpg, http://yjly.bj.bcebos.com/yjly/Scenic/143088823739695@2x.jpg, http://yjly.bj.bcebos.com/yjly/Scenic/143088823739481@3x.jpg, http://yjly.bj.bcebos.com/yjly/Scenic/143088888739695@2x.jpeg"

	console.log(Homework.getImage(str))

	it('返回是否是数组', function () {
		Homework.getImage(str).should.be.an.instanceof(Array);
	});

	it('返回正确的个数', function () {
		Homework.getImage(str).should.have.lengthOf(4)
	})
})

describe('布尔类型转换', function () {
	it ('真的布尔值', function () {
		Homework.parseBoolean(true).should.be.equal(true)
		Homework.parseBoolean(false).should.be.equal(false)
	})

	it ('\"false\"和\"true\"', function () {
		Homework.parseBoolean('true').should.be.equal(true)
		Homework.parseBoolean('false').should.be.equal(false)
	})

	it ('数字', function () {
		Homework.parseBoolean(0).should.be.equal(false)
		Homework.parseBoolean(-1).should.be.equal(true)
		Homework.parseBoolean(1).should.be.equal(true)
	})
})

describe('different 函数', function () {
	it ('判断结果长度', function () {
		Homework.difference([1,2,3,4], [2,4,6]).should.have.lengthOf(2)
	})

	it ('判断结果内容', function () {
		Homework.difference([1,2,3,4], [2,4,6]).should.containEql(1)
		Homework.difference([1,2,3,4], [2,4,6]).should.containEql(3)
	})
})

describe('对比版本号', function () {
	it ('判断4.4.4与 4.4.0', function () {
		Homework.compareVersion('4.4.4', '4.4.0').should.be.equal(true)
	})

	it ('判断4.4.4与 4.4.9', function () {
		Homework.compareVersion('4.4.4', '4.4.9').should.be.equal(false)
	})

	it ('判断4.4.4与 4.4.4', function () {
		Homework.compareVersion('4.4.4', '4.4.4').should.be.equal(true)
	})
})

