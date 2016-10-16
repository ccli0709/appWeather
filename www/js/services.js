angular.module('starter.services', [])
.factory('TemperatureService',
		function($http) {
			var times = 1.8;
			var base = 32;

			return {
				cToF : function(degree) {
					return degree * times + base;
				},
				fToC : function(degree) {
					return (degree - base) / times;
				},
				getDataByCity: function (city) {

					return $http.get("http://api.openweathermap.org/data/2.5/weather", {
                		params : {
                			"q" : city,
                			"APPID" : "c412b63b877a914c8825a6b1c8ff8ea4",
                			"units" : "metric",
                			"lang" : "zh"
                		}
                	});

                }
			}
		})
.factory('Citys', function() {
	// Might use a resource here that returns a JSON array

	var citys = [ {
		name : "台北",
		q : "Taipei",
		on : true
	}, {
		name : "台中",
		q : "Taichung",
		on : true
	}, {
		name : "台南",
		q : "Tainan",
		on : true
	}, {
		name : "高雄",
		q : "Kaohsiung",
		on : true
	}, {
		name : "屏東",
		q : "Pingtung",
		on : true
	}, {
		name : "花蓮",
		q : "Hualian",
		on : true
	}, ]

	return {
		all : function() {
			return citys;
		},
		remove : function(city) {
			citys.splice(citys.indexOf(city), 1);
		},
		get : function(q) {
			for (var i = 0; i < citys.length; i++) {
				if (citys[i].q === q) {
					return citys[i];
				}
			}
			return null;
		}
	};
});
