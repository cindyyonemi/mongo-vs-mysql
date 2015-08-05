(function(angular, undefined) {
	'use strict';

	angular.module('mongoVsMySql').config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {
		$routeProvider
			.when('/clients', {
				templateUrl: 'view/clients.html',
				controller: 'ClientController',
				controllerAs: 'vm'
			})
			.when('/clients/add', {
				templateUrl: 'view/client-add.html',
				controller: 'ClientController',
				controllerAs: 'vm'
			});
	}

})(angular);