var Homework = {
	/**
	 * 获取当前时间戳
	 *
	 * @returns {number}
	 */
	now: function () {
		return new Date().getTime();
	},

	/**
	 * 输出当前日期 例如:2016-08-22
	 *
	 * @returns {*}
	 *
	 */
	date: function () {
		return moment().format('YYYY-MM-DD');
	},

	/**
	 * 切割字符
	 * 获取一个字符串前len位
	 *
	 * @param str
	 * @param len
	 */
	cutString: function (str, len) {
		return str.substring(0, len)
	},

	/**
	 * 获取字符位置
	 *
	 * @param base
	 * @param str
	 */
	indexOfString: function (baseStr, targetStr) {
		return baseStr.indexOf(targetStr)
	},

	/**
	 * 字符替换
	 *
	 * @param baseStr
	 * @param partten
	 * @param val
	 */
	replaceString: function (baseStr, partten, val) {
		return baseStr.replace(partten, val)
	},

	/**
	 * 小写转大写
	 *
	 * @param str
	 * @returns {*|string}
	 */
	toUpperCase: function (str) {
		return str.toUpperCase()
	},

	/**
	 * 判断传入的是否是函数
	 * @param obj
	 * @returns {boolean}
	 */
	isFunction: function (obj) {
		return typeof obj === 'function'
	},

	isBoolean: function (obj) {
		return typeof obj === 'boolean';
	},

	isString: function (obj) {
		return Object.prototype.toString.call(obj) === '[object String]'
	},

	isArray: function (obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	},

	isObject: function (obj) {
		var type = typeof obj;
		return type === 'function' || type === 'object' && !!obj;
	},

	isNull: function (obj) {
		return obj === null;
	},

	isUndefined: function (obj) {
		return obj === undefined;
	}
}