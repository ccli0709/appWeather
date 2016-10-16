angular.module('starter.controllers', [])

.controller('CitysCtrl', function($scope, $location, Citys) {
	$scope.citys = Citys.all();

	$scope.showWeather = function(q) {
		console.log(q);
		$location.path('/tab/weather/' + q);
	};
})

.controller('WeatherDetailCtrl', function($scope, $stateParams, $http) {

	$http.get("http://api.openweathermap.org/data/2.5/weather", {
		params : {
			"q" : $stateParams.q,
			"APPID" : "c412b63b877a914c8825a6b1c8ff8ea4",
			"units" : "metric",
			"lang" : "zh"

		}
	}).then(function(resp) {
		$scope.weather = resp.data;
		console.log($scope.weather);
	}, function(err) {
		alert("Oops!");
	})

})

.controller('SettingCtrl', function($scope, Citys) {
	$scope.citys = Citys.all();
});
