(function(angular, undefined) {
	'use strict';

	angular.module('mongoVsMySql').controller('ProductController', controller);

	controller.$inject = ['$routeParams', 'ProductService'];

	function controller($routeParams, productService) {
		var vm = this;

		vm.initList = function () {
			vm.products = [];

			productService.getProducts().success(function(data) {
				vm.products = data;
			});
		};

		vm.initPersist = function () {
			vm.product = {};
		};

		vm.save = function(product) {
			productService.save(product).success(function(data) {
				console.log(data);
				alert('Produto Salvo!');
				vm.product = {};
			});
		}

	}

})(angular);