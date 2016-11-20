(function(){
	var homeModule = angular.module('homeModule',['ngMaterial','jkAngularCarousel','ngRoute']);
	homeModule.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {   
      $routeProvider.when("/", {
            templateUrl : "/partial/homepageContent.ejs"
          })
      		.when("/productsPage",{
      			templateUrl : "/partial/productsPage.ejs"
      		})
          .when("/productsPage/:productType",{
            templateUrl : "/partial/productsPage.ejs",
            controller : "ProductPageTypeController",
            controllerAs : 'productPageType'
          })
      		.when("/productDescription",{
      			templateUrl : "/partial/productDescription.ejs"
      		})
          .when("/checkout",{
            templateUrl : "/partial/checkOut.ejs"
          })
          .otherwise({redirectTo : '/'});

         /* $locationProvider.html5Mode({
            enabled:true,
            requireBase:false
          });*/
    }]);
})();