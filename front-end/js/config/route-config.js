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
			})

			.when('/orders', {
				templateUrl: 'view/orders.html',
				controller: 'OrderController',
				controllerAs: 'vm'
			})
			.when('/orders/add', {
				templateUrl: 'view/order-add.html',
				controller: 'OrderController',
				controllerAs: 'vm'
			})

			.when('/products', {
				templateUrl: 'view/products.html',
				controller: 'ProductController',
				controllerAs: 'vm'
			})
			.when('/products/add', {
				templateUrl: 'view/product-add.html',
				controller: 'ProductController',
				controllerAs: 'vm'
			})

			;
	}

})(angular);