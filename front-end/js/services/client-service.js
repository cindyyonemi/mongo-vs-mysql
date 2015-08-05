(function(angular, undefined) {
	'use strict';

	angular.module('mongoVsMySql').factory('ClientService', service);

	service.$inject = ['$http', 'api'];

	function service($http, api) {
		return {
			getClients : getClients,
			save : save
		};

		function getClients() {
			return $http.get(api.clients);
		}

		function save(client) {
			return $http.post(api.clients, client);
		}

	}

})(angular);