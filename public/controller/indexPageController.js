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

/*this section is for the autocomplete search results*/
   $scope.names = [{n1:'shubham',n2:'soumen'}];
   $scope.searchProducts = function(){
    console.log("asdasd"); 
    this.name = 'shubham';
    this.returnNames = function(){
      console.log($scope.names);
      return $scope.names;
    }    
  };  

  $scope.list = [];
  myService.sideOpenMenu().then(
    function(response){      
      var responseData = response.data[0].sideOpenMenuData;
      console.log(responseData);
      $scope.list = responseData;      
    },
    function(response){
      console.log('failed');
    }
  );

}]);
})();



