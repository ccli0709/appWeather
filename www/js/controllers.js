angular.module('starter.controllers', [])

.controller('CitysCtrl', function($scope, $location, Citys) {
	$scope.citys = Citys.all();

	$scope.showWeather = function(q) {
		console.log(q);
		$location.path('/tab/weather/' + q);
	};
})

.controller(
		'WeatherDetailCtrl',
		function($scope, $stateParams, $http, TemperatureService) {

			// 重構透過網路API取得資料的部份到SERVICE裡
			TemperatureService.getDataByCity($stateParams.q).then(
					function(resp) {
						$scope.weather = resp.data;
						$scope.weather.main.tempF = TemperatureService
								.cToF($scope.weather.main.temp);
					}, function(err) {
						alert(err);
					});
		})

.controller('SettingCtrl', function($scope, Citys) {
	$scope.citys = Citys.all();
});
