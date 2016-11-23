(function(){
	var homeModule = angular.module('homeModule');	
	homeModule.service('myService',['$http',function($http){                 		
		return {
			random : randomfunct,			
			sideOpenMenu : _sideOpenMenuDataProvider
		};
		function randomfunct(){return {'name':'shubham'}};
		
		function _sideOpenMenuDataProvider(){return $http.get('/api/navigationList');};			
	}]);
})();


 