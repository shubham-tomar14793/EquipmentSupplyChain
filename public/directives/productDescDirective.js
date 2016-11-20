(function(){
	var productDescDirective = angular.module('homeModule');

	productDescDirective.directive('productDescription',function(){
		return{
			retrict : 'E',
			scope : {
				productDescList : '=pDescList'
			},
			templateUrl : '/directives/productDescription.html'
		}
	});
})()