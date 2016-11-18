(function(){
	var productPageModule = angular.module('homeModule');
	productPageModule.controller('productPageController', ['$scope','productsService', function($scope,productsService){
		console.log(productsService.getAllProducts());
	}])
	.controller('ProductPageTypeController',['$scope','$route','productsService',function($scope,$route,productsService){
		console.log("this is subroute");
		console.log($route.current.params);
		$scope.productList = productsService.getAllProducts();
		console.log($scope.productList);
		$scope.suggestedProductList = productsService.getSuggestedProducts();
		console.log($scope.suggestedProductList);
	}]);	
})();