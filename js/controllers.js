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

		/* Panel Controller */
	TimeTableControllers.controller('panelController', function(){
		/* Panel Initialization here */
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

//})();END closure