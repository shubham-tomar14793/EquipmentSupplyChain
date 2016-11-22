(function(){
	var homePageContentServiceModule = angular.module('homeModule');
	homePageContentServiceModule.service('homePageContentService',['$http',function($http){
		var sliderDataObj = [  
	    {
	      	src: 'http://www.parasholidays.in/blog/wp-content/uploads/2014/05/holiday-tour-packages-for-usa.jpg'
	    },
	    {
	      	src: 'http://clickker.in/wp-content/uploads/2016/03/new-zealand-fy-8-1-Copy.jpg'
	    },
	    {
	      	src: 'http://images.kuoni.co.uk/73/indonesia-34834203-1451484722-ImageGalleryLightbox.jpg'
	    },  
	    {
	      	src: 'http://images.kuoni.co.uk/73/malaysia-21747826-1446726337-ImageGalleryLightbox.jpg'
	    },
	    {
	      	src: 'http://www.kimcambodiadriver.com/uploads/images/tours/kim-cambodia-driver-angkor-wat.jpg'
	    },
	    {
	      	src: 'https://www.travcoa.com/sites/default/files/styles/flexslider_full/public/tours/images/imperialvietnam-halong-bay-14214576.jpg?itok=O-q1yr5_'
	    }];
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
		function _sliderImageDataProvider(){return sliderDataObj};
		function _productCategoryDataProvider(){return productCategoryData};
		function _suggestedProductProvider(){return suggestedProduct};
		function _offerPageDataProvider(){return offerData};
	}]);	
})();