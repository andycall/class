var noop = function () {}

describe('基本使用', function () {
	it('获取时间戳', function () {
		should(Homework.now()).equal(+new Date())
	})

	it('获取当前日期 比如 2016-03-09', function () {
		should(Homework.date()).equal(moment().format('YYYY-MM-DD'))
	})

	it('字符串切割', function () {
		should(Homework.cutString('HelloWorld', 5)).equal('Hello')
	})

	it('获取字符位置', function () {
		should(Homework.indexOfString('HelloWorld', 'e')).equal(1)
	})

	it('字符替换', function () {
		should(Homework.replaceString('HelloWorld', 'World', 'Kitty')).equal('HelloKitty')
	})

	it('小写转大写', function () {
		should(Homework.toUpperCase('helloworld')).equal('HELLOWORLD')
	})
})


describe('类型判断', function () {
	it('是否是函数', function () {
		should(Homework.isFunction(noop)).equal(true);
	});

	it('是否是Boolean', function () {
		should(Homework.isBoolean(false)).equal(true)
		should(Homework.isBoolean('false')).equal(false)
		should(Homework.isBoolean(0)).equal(false)
		should(Homework.isBoolean(undefined)).equal(false)
	})

	it('是否是字符串', function () {
		should(Homework.isString('Helloworld')).equal(true)
		should(Homework.isString(1111)).equal(false)
		should(Homework.isString(false)).equal(false)
		should(Homework.isString(undefined)).equal(false)
	})

	it('是否是数组', function () {
		should(Homework.isArray([1,2,3])).equal(true)
		should(Homework.isArray(document.getElementsByTagName('div'))).equal(false)
		should(Homework.isArray(noop)).equal(false)
		should(Homework.isArray(document.querySelectorAll('div'))).equal(false)
		should(Homework.isArray(arguments)).equal(false)
	})

	it('是否是对象', function () {
		should(Homework.isObject({name: 1})).equal(true)
		should(Homework.isObject(noop)).equal(true)
		should(Homework.isObject(undefined)).equal(false)
		should(Homework.isObject([1,2,3])).equal(true)
		should(Homework.isObject(arguments)).equal(true)
		should(Homework.isObject(document.querySelectorAll('div'))).equal(true)
		should(Homework.isObject(false)).equal(false)
		should(Homework.isObject(null)).equal(false)
		should(Homework.isObject(0)).equal(false)
		should(Homework.isObject('123456')).equal(false)
	})

	it('是否是null', function () {
		should(Homework.isNull(null)).equal(true)
		should(Homework.isNull([1,2,3,4])).equal(false)
		should(Homework.isNull({name:1})).equal(false)
		should(Homework.isNull(arguments)).equal(false)
		should(Homework.isNull(undefined)).equal(false)
		should(Homework.isNull(false)).equal(false)
		should(Homework.isNull(NaN)).equal(false)
	})

	it('是否是undefined', function () {
		should(Homework.isUndefined(undefined)).equal(true)
		should(Homework.isUndefined(null)).equal(false)
		should(Homework.isUndefined(false)).equal(false)
		should(Homework.isUndefined(0)).equal(false)
		should(Homework.isUndefined('12345')).equal(false)
		should(Homework.isUndefined(NaN)).equal(false)
		should(Homework.isUndefined('')).equal(false)
	})
});