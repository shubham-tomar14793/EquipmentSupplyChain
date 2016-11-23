(function(){
	var homePageContentServiceModule = angular.module('homeModule');
	homePageContentServiceModule.service('homePageContentService',['$http',function($http){
		
		var productCategoryData = [
		{
			categoryImagePath : 'images/equipment-homepage.jpeg',
			categoryHeading : 'Top Rated Products',
			categoryContentText : 'The titles of Washed Outs breakthrough song and the first single from Paracosm share the two most important words in Ernest Greenes musical language: feel it. Its a simple request, as well...',
			categoryButtonText : 'Browse Top Rated Products',
			pageLink : '#/productsPage/topRated'
		},
		{
			categoryImagePath : 'images/equipment-homepage.jpeg',
			categoryHeading : 'Most Viewed Products',
			categoryContentText : 'The titles of Washed Outs breakthrough song and the first single from Paracosm share the two most important words in Ernest Greenes musical language: feel it. Its a simple request, as well...',
			categoryButtonText : 'Browse Most Viewed Products',
			pageLink : '#/productsPage/mostViewed'
		},
		{
			categoryImagePath : 'images/equipment-homepage.jpeg',
			categoryHeading : 'Latest Products',
			categoryContentText : 'The titles of Washed Outs breakthrough song and the first single from Paracosm share the two most important words in Ernest Greenes musical language: feel it. Its a simple request, as well...',
			categoryButtonText : 'Browse Latest Products',
			pageLink : '#/productsPage/latest'
		},
		{
			categoryImagePath : 'images/equipment-homepage.jpeg',
			categoryHeading : 'Recommended',
			categoryContentText : 'The titles of Washed Outs breakthrough song and the first single from Paracosm share the two most important words in Ernest Greenes musical language: feel it. Its a simple request, as well...',
			categoryButtonText : 'Browse Recommended Products',
			pageLink : '#/productsPage/recommended'
		}];
		var suggestedProduct = [
		{
			suegg_productPath : 'images/food1.jpeg',
			suegg_productId : 'anyId'
		},{
			suegg_productPath : 'images/food2.jpeg',
			suegg_productId : 'anyId'
		},{
			suegg_productPath : 'images/food3.jpeg',
			suegg_productId : 'anyId'
		},{
			suegg_productPath : 'images/food4.jpeg',
			suegg_productId : 'anyId'
		},{
			suegg_productPath : 'images/food5.jpeg',
			suegg_productId : 'anyId'
		},{
			suegg_productPath : 'images/food6.jpeg',
			suegg_productId : 'anyId'
		}];
		var offerData = [
		{	
			offerHeading : 'Current Best Offers',
			offerImagePath : 'images/offer-image.jpg',
			pageURL : '#/offerPage'
		}];
		
		return {
			sliderData : _sliderImageDataProvider,
			productCategory : _productCategoryDataProvider,
			suggestedProductSlider : _suggestedProductProvider,
			offerPage : _offerPageDataProvider,
			getPageData : _pageDataProvider
		};
		function _sliderImageDataProvider(){
			console.log($http.get('/api/sliderData'));			
			return $http.get('/api/sliderData');
		};
		function _productCategoryDataProvider(){return productCategoryData};
		function _suggestedProductProvider(){return suggestedProduct};
		function _offerPageDataProvider(){return offerData};
		function _pageDataProvider(){};
	}]);	
})();