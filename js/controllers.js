/* CLOSURE to wrap Js in
(function(){
*/
	var TimeTableControllers = angular.module('TimeTableControllers', []);

	TimeTableControllers.controller('TimeTableListCtrl', ['$scope', '$http',
	    function ($scope, $http) {
		$http.get('subjects/subjects.json').success(function(data) {
			$scope.subjects = data;
		});
		$scope.orderProperty = 'age';
	}]);

	TimeTableControllers.controller('TimeTableDetailsCtrl', ['$scope', '$routeParams', '$http',
	    function ($scope, $routeParams, $http) {
		$http.get('subjects/' + $routeParams.subject_id +'.json').success(function(data) {
		//
			$scope.subject = data;
		});
	}]);

//})();END closure