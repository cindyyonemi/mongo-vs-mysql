(function(angular, undefined) {
	'use strict';

	angular.module('mongoVsMySql').controller('ClientController', controller);

	controller.$inject = ['$routeParams', 'ClientService'];

	function controller($routeParams, clientService) {
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
				console.log(data);
				alert('Cliente Salvo!');
				vm.client = {};
			});
		}

	}

})(angular);