var _ = require('lodash')

var time = {
	week1: [
		{
			邵振华: [1, 1, 0, 1],
			pay: true
		},
		{
			梁锦润: [1, 1, 1, 1],
			pay: true
		},
		{
			田佩鑫: [1, 1, 0, 0],
			pay: true
		},
		{
			徐海超: [1, 1, 1, 1],
			pay: true
		},
		{
			张涛: [1, 1, 0, 1],
			pay: true
		},
		{
			杜泽萱: [1, 0, 1, 1],
			pay: true
		},
		{
			何雨虹: [1, 1, 0, 1],
			pay: true
		},
		{
			王威: [1, 1, 0, 0],
			pay: true
		}
	],
	week2: [
		{
			邵振华: [1, 1, 1, 1, 1],
			pay: true
		},
		{
			梁锦润: [0, 1, 0, 1, 1],
			pay: true
		},
		{
			田佩鑫: [0, 0, 0, 0, 0]
		},
		{
			徐海超: [1, 1, 1, 1, 1],
			pay: true
		},
		{
			张涛: [1, 1, 0, 0, 1],
			pay: true
		},
		{
			杜泽萱: [1, 1, 1, 1, 0],
			pay: true
		},
		{
			何雨虹: [1, 1, 1, 1, 1],
			pay: true
		},
		{
			王威: [1, 0, 0, 1, 0],
			pay: true
		}
	],
	week3: [
		{
			邵振华: [1, 1, 1, 1]
		},
		{
			梁锦润: [1, 1, 1, 1]
		},
		{
			徐海超: [0, 1, 1, 0]
		},
		{
			张涛: [1, 1, 1, 1]
		},
		{
			杜泽萱: [1, 1, 1, 1]
		},
		{
			何雨虹: [1, 1, 1]
		},
		{
			王浩: [1]
		},
		{
			田佩鑫: [1]
		}
	]
}


function caculateTotal (time) {
	var total = 0;
	var payed = 0;

	_.each(time, (week) => {
		_.each(week, (val) => {
			var discount = val.discount;

			var rawArr = val[Object.keys(val)[0]].filter((val) => {
				return val > 0
			});

			if (rawArr.length > 0) {
				var amount = rawArr.reduce((total, next) => {
					if (discount) {
						return total + next * discount;
					}

					return total + next;
				})

				if (val.pay) {
					payed += amount;
				}
				total += amount;
			}
		})
	})

	console.log('total mount in predict: ', total * 40);
	console.log('payed mount:', payed * 40);
	console.log('missing pay mount: ', (total - payed) * 40)

	return total * 40
}

caculateTotal(time)