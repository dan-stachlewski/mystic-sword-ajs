/* CLOSURE to wrap Js in */
(function(){

	var TimeTableApp = angular.module('TimeTableApp', []);

	TimeTableApp.controller('timeTableCtrl', ['$scope', '$http',
	    function ($scope, $http) {
		$http.get('subjects/subjects.json').success(function(data) {
			$scope.subjects = data;
		});
		$scope.orderProperty = 'age';
	}]);

})();//END closure