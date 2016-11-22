(function(){
	var homeModule = angular.module('homeModule',['ngMaterial','jkAngularCarousel','ngRoute']);
	homeModule.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {   
      $routeProvider.when("/", {
            templateUrl : "/partial/homepageContent.ejs",
            controller : 'homePageContentController'          
          })
      		.when("/productsPage",{
      			templateUrl : "/partial/productsPage.ejs",
            controller : 'productPageController'
      		})
          .when("/productsPage/:productType",{
            templateUrl : "/partial/productsPage.ejs",
            controller : "ProductPageTypeController"
          })
      		.when("/productDescription",{
      			templateUrl : "/partial/productDescription.ejs",
            controller : 'productDescController'
      		})
          .when("/checkout",{
            templateUrl : "/partial/checkOut.ejs",
            controller : 'checkoutController'
          })
          .otherwise({redirectTo : '/'});

         /* $locationProvider.html5Mode({
            enabled:true,
            requireBase:false
          });*/
    }]);
})();