(function(angular, undefined) {
	'use strict';

	angular.module('mongoVsMySql').controller('OrderController', controller);

	controller.$inject = ['$routeParams', 'OrderService', 'ProductService', 'ClientService'];

	function controller($routeParams, orderService, productService, clientService) {
		var vm = this;

		productService.getProducts().success(function(data){
			vm.produtos = data;
		});

		clientService.getClients().success(function(data){
			vm.clientes = data;
		});

		vm.initList = function () {
			vm.orders = [];

			orderService.getOrders().success(function(data) {
				console.log(data);
				vm.orders = data;
			});
		};

		vm.initPersist = function () {
			vm.order = {};
			vm.item = {};
			vm.order.itemPedido = [];
		};

		vm.save = function(order) {
			order.dataHora = new Date();
			order.cliente = JSON.parse(order.cliente);
			orderService.save(order).success(function(data) {
				alert('Pedido Salvo!');
				vm.initPersist();
			});
		}

		vm.addItem = function(item){
			item.produto = JSON.parse(item.produto);
			vm.order.itemPedido.push(item);
			item = {};
		}

	}

})(angular);