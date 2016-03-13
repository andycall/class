var Homework = {
	/**
	 * 是否 `value` 是源自 `Object` 构造函数
	 */
	isPlainObject : function (value) {
		return Object.prototype.toString.call(value) === '[object Object]'
	},

	/**
	 * 非 `null` 同时 typeof的值为 `object`
	 */
	isObjectLike: function (value) {
		return typeof value === 'object' && !!value
	},

	/**
	 * 判断是否是 arguments
	 *
	 */
	isArguments: function (value) {
		return Object.prototype.toString.call(value) === '[object Arguments]'
	},


	/**
	 * 判断是否是 Error
	 * 注意error对象有message和name方法
	 */
	isError: function (value) {
		return (Object.prototype.toString.call(value) == '[object Error]') ||
				(typeof value.message == 'string' && typeof value.name == 'string')
	},

	/**
	 *  判断是否是 Date
	 */
	isDate: function (value) {
		return (Object.prototype.toString.call(value) === '[object Date]');
	},

	/**
	 * 判断 `value` 是 `null` 或者 `undefined`
	 *
	 */
	isNil: function (value) {
		return value == null;
	}
}