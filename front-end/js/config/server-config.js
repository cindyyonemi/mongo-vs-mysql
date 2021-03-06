(function(angular, undefined) {
	'use strict';
	var _baseUrl = 'http://localhost:3000/api/v1/';

	angular.module('mongoVsMySql').constant('api', 
		{
			clients: resourceOf('clients'),
			products: resourceOf('products'),
			orders: resourceOf('orders')
		}
	);

	function resourceOf(resourceName) {
		return _baseUrl + resourceName;
	}

})(angular);