(function(){
	var directiveModuleSuggestedProduct = angular.module('homeModule');
	directiveModuleSuggestedProduct.directive('suggestedProducts',function(){
		return{
			restrict : 'E',
			scope : {
				suggestedProductList : '=suggList'
			},
			templateUrl : '/directives/suggestedProduct.html'
		}
	});	
})();