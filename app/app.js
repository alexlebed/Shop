var app = angular.module("SampleApp", ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/main.html'
    });
	
	$routeProvider.when('/bin', {
        templateUrl: 'partials/allInfo.html'
    })
	
	.otherwise({
        redirectTo: '/'
      });
		
});
