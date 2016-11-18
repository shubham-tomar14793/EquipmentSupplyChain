(function(){
	var directiveModule = angular.module('homeModule');

	directiveModule.directive('allProducts',function(){
		return{
			restrict : 'E',
			scope : {
				productList : '=pList'
			},
			templateUrl : '/directives/products.html'
		}		
	});

/*	directiveModule.directive('suggestedProducts',function(){
		return{
			restrict : 'E',
			scope : {
				suggestedProductList : '=suggList'
			},
			templateUrl : '/directives/suggestedProduct.html'
		}
	});	*/
})();