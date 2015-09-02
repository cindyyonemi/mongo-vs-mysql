(function(angular, undefined) {
	'use strict';

	angular.module('mongoVsMySql').factory('ProductService', service);

	service.$inject = ['$http', 'api'];

	function service($http, api) {
		return {
			getProducts : getProducts,
			save : save
		};

		function getProducts() {
			return $http.get(api.products);
		}

		function save(product) {
			return $http.post(api.products, product);
		}

	}

})(angular);