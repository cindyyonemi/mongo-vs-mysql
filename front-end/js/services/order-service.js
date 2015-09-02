(function(angular, undefined) {
	'use strict';

	angular.module('mongoVsMySql').factory('OrderService', service);

	service.$inject = ['$http', 'api'];

	function service($http, api) {
		return {
			getOrders : getOrders,
			save : save
		};

		function getOrders() {
			return $http.get(api.orders);
		}

		function save(order) {
			return $http.post(api.orders, order);
		}

	}

})(angular);