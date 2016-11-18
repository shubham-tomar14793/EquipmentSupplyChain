(function(){
	var checkoutControllerModule = angular.module('homeModule');	
	checkoutControllerModule.controller('checkoutController',['$scope','$mdDialog','checkoutService',function($scope, $mdDialog, checkoutService){
		var status = '';
		console.log(checkoutService.checkoutRandom());

		// this functions changes the delivery of the.
		$scope.showPrompt = function(ev){
			var currAdd = "House no 16 street no 1 west kanti nagar Delhi 110051";
		    // Appending dialog to document.body to cover sidenav in docs app
		    var confirm = $mdDialog.prompt()
		    .title('Want to change the Delivery Address ?')
		    .textContent('Your current Delivery Address is as follows')
		    .placeholder('Dog name')
		    .ariaLabel('Dog name')
		    .initialValue(currAdd)
		    .targetEvent(ev)
		    .ok('Save Changes')
		    .cancel('Cancel');
		    $mdDialog.show(confirm).then(function(result) {
		    	$scope.status = result;// on confirmation of changing the address.
		    	console.log($scope.status);
		    }, function() {
		    	$scope.status = 'You canceled to change the address.';
		    	console.log($scope.status);
		    });
		};
	}]);
})();