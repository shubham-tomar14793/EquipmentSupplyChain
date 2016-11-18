(function(){
	var checkoutServiceModule = angular.module('homeModule');
	checkoutServiceModule.service('checkoutService',['$http',function($http){
		return{
			checkoutRandom : _checkoutRandom
		}
		function _checkoutRandom(){return{'checkout':'checkout the product'}}
	}]);
})();