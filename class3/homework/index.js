var Homework = {
	/**
	 * 在字符串中找到图片的地址
	 *
	 * @param str
	 */
	getImage: function (str) {
		var images = []; // 保存最终结果
		var names = []; // 用来去重

		str.replace(/\s+/g, '').split(',').map(function (val) {
			var prefix = val.split('.');
			prefix.pop();
			var prefixName = prefix.join('')

			var name;

			if (prefixName.indexOf('@') < 0) {
				name = prefixName;
			}
			else {
				name = prefixName.split('@')[0]
			}

			if (names.indexOf(name) < 0) {
				names.push(name);
				images.push(val);
			}
		})

		return images;
	},

	/**
	 * 布尔类型转换函数
	 */
	parseBoolean: function (bool) {
		// false true
		if (typeof bool === 'boolean') {
			return bool;
		}

		if (bool === 'false' || bool === 'true') {
			return bool === 'true';
		}

		return !!bool;
	},

	/**
	 * 查找数组区别
	 * [1,2,3,4] [2,4,6] ==> [1, 3]
	 * @param preArr
	 * @param nextArr
	 * @returns {Array}
	 */
	difference: function (preArr, nextArr) {
		var result = [];

		for (var i = 0, len = preArr.length; i < len; i++) {
			var hasFind = false;

			for (var j = 0, jlen = nextArr.length; j < jlen; j++) {
				if (preArr[i] === nextArr[j]) {
					hasFind = true;
				}
			}

			if (!hasFind) {
				result.push(preArr[i]);
			}
		}

		return result;
	},

	/**
	 * 对比Android手机系统版本号
	 * 4.4.4 > 4.4.3 > 4.3.2 > 4.2.1
	 * 4.4.2 4.4.9
	 *
	 * @param pre
	 * @param next
	 * @returns {boolean}
	 */
	compareVersion: function (pre, next) {
		var arrPre = pre.split('.');
		var arrNext = next.split('.');

		for (var i = 0; i < arrPre.length; i ++) {
			if (arrPre[i] < arrNext[i]) {
				return false;
			}
		}

		return true;
	}
}