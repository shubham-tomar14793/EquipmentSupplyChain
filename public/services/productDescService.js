(function(){
	var productDescServiceModule = angular.module('homeModule');
	productDescServiceModule.service('productDescService',['$http',function($http){
		return{
			getProductDescription : _getProductDescription
		}

		function _getProductDescription(){
			return{ 
				'productDesc' :'This is my Product.' 
			}
		}
	}]);
})();