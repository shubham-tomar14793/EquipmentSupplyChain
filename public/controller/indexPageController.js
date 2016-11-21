(function(){
  var homeModule = angular.module('homeModule');
  homeModule.controller('homeController',['$scope','$http','myService','$mdSidenav','$mdDialog','$timeout', '$q', '$log', function($scope, $http, myService, $mdSidenav,$mdDialog,$timeout, $q, $log){
   var profileOptionEv;
   var cartEv;
   var searchText = $scope.searchText;   

   /******these functions are used for dropdown menu******/
  $scope.openMenu = function($mdOpenMenu, profileOptionEv) {      
    profileOptionEv = profileOptionEv;
    $mdOpenMenu(profileOptionEv);
  };

  $scope.openCartMenu = function($mdOpenMenu, cartEv) {      
    cartEv = cartEv;
    $mdOpenMenu(cartEv);
  };

  $scope.redial = function() {
    $mdDialog.show(
      $mdDialog.alert()
      .targetEvent(originatorEv)
      .clickOutsideToClose(true)
      .parent('body')
      .title('Suddenly, a redial')
      .textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
      .ok('That was easy')
      );
    originatorEv = null;
  };

  /******this functions is used for toggling the sidenav ******/
  $scope.toggleSidenav = function () {
    return $mdSidenav('left').toggle();
  };
  $scope.dataArray = myService.sliderData();
  //$scope.list = myService.sideOpenMenu();
  $scope.list = [];
  $scope.productCategoryList = myService.productCategory();
  $scope.suggestedProductList = myService.suggestedProductSlider();
  $scope.offerPageData = myService.offerPage();
  console.log($scope.offerPageData);
/*this section is for the autocomplete search results*/
   $scope.names = [{n1:'shubham',n2:'soumen'}];
   $scope.searchProducts = function(){
    console.log("asdasd"); 
    this.name = 'shubham';
    this.returnNames = function(){
      console.log($scope.names);
      return $scope.names;
    }    
  }  


  myService.sideOpenMenu().then(
    function(response){
      $scope.list = response.data;
      console.log($scope.list);
    },
    function(response){}
  );

}]);
})();



