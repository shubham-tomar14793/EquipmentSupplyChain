(function(){
	var homeModule = angular.module('homeModule');	
	homeModule.service('myService',['$http',function($http){                 
		var sideOpenMenuData= [
	    {
			label: 'topRatedProducts',
			icon: 'images/list-option.png',
			name: 'Our Top Rated Products',
			link: '#/productsPage/topRated'
	    },
	    {
			label: 'mostViewedProducts',
			icon: 'images/list-option.png',
			name: 'Our Most Viewed Products',
			link: '#/productsPage/mostViewed'
	    },
	    {
			label: 'latestProducts',
			icon: 'images/list-option.png',
			name: 'Our Lates Products',
			link: '#/productsPage/latest'
	    },
	    {
			label: 'recommendedProducts',
			icon: 'images/list-option.png',
			name: 'Recommendation for You',
			link: '#/productsPage/recommended'
	    }];
		return {
			random : randomfunct,			
			sideOpenMenu : _sideOpenMenuDataProvider
		};
		function randomfunct(){return {'name':'shubham'}};
		
		function _sideOpenMenuDataProvider(){return $http.get('/api/homePageContent');};			
	}]);
})();


 