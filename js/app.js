/* CLOSURE to wrap Js in
(function(){
*/
	var TimeTableApp = angular.module('TimeTableApp', [
	'ngRoute',
	'TimeTableControllers'
	]);

	TimeTableApp.config(['$routeProvider',
        function($routeProvider) {
        	$routeProvider.
        		when('/', {
        			templateUrl: 'templates/subject-list.html',
        			controller: 'TimeTableListCtrl'
        		}).
        		when('/subjects/:subject_id', {
        			templateUrl: 'templates/subject-details.html',
        			controller: 'TimeTableDetailsCtrl'
        		}).
        		otherwise( {
        			redirectTo: '/'
        		});
        }]);
//})();END closure