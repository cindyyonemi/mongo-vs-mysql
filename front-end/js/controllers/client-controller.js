(function(angular, undefined) {
	'use strict';

	angular.module('mongoVsMySql').controller('ClientController', controller);

	controller.$inject = ['$routeParams', 'ClientService', '$filter'];

	function controller($routeParams, clientService, $filter) {
		var vm = this;

		vm.initList = function () {
			vm.clients = [];

			clientService.getClients().success(function(data) {
				vm.clients = data;
			});
		};

		vm.initPersist = function () {
			vm.client = {};
		};

		vm.save = function(client) {
			clientService.save(client).success(function(data) {
				alert('Cliente Salvo!');
				vm.client = {};
			});
		}

	}

})(angular);