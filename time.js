var _ = require('lodash')
var time = {
	week1: [
		{
			邵振华: [1, 1, 0, 1]
		},
		{
			梁锦润: [1, 1, 1, 1]
		},
		{
			田佩鑫: [1, 1, 0, 0]
		},
		{
			徐海超: [1, 1, 1, 1]
		},
		{
			张涛: [1, 1, 0, 1]
		},
		{
			杜泽萱: [1, 0, 1, 1]
		},
		{
			何雨虹: [1, 1, 0, 1]
		},
		{
			王威: [1, 1, 0, 0]
		},
		{
			文强: [1, 0, 0, 0]
		},
		{
			姚蕤: [1, 1, 1, 1]
		}
	]
}


function caculateTotal (time) {
	var total = 0;

	_.each(time, (week) => {
		_.each(week, (val) => {
			total += val[Object.keys(val)[0]].filter((val) => {
				return val > 0
			}).reduce((total, next) => {
				return total + next;
			})
		})
	})

	return total * 40
}

console.log(caculateTotal(time))