(function(){
	var homePageContentModule = angular.module('homeModule');
	homePageContentModule.controller('homePageContentController',['$scope','homePageContentService','$http',function($scope,homePageContentService,$http){
		$scope.dataArray = [];
		$scope.productCategoryList = [];
		$scope.suggestedProductList = [];
		$scope.offerPageData = [];

		
		homePageContentService.sliderData().then(
			function(response){

			},
			function(response){

			});		
		homePageContentService.productCategory().then(
			function(response){
				
			},
			function(response){

			});		
		homePageContentService.suggestedProductSlider().then(
			function(response){
				
			},
			function(response){

			});		
		homePageContentService.offerPage().then(
			function(response){
				
			},
			function(response){

			});		
		console.log($scope.offerPageData);
	}]);
})();