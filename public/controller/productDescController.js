(function(){
	var productDescControllerModule = angular.module('homeModule');
	productDescControllerModule.controller('productDescController',['$scope','$http','productDescService',function($scope,$http,productDescService){
		console.log(productDescService.getProductDescription());		
	}]);
	productDescControllerModule.controller('ratingAndReviewController',['$scope','$timeout', '$mdBottomSheet', '$mdToast',function($scope, $timeout, $mdBottomSheet, $mdToast){
		$scope.showListBottomSheet = function() {
			console.log("clicked the button");			
			$scope.alert = '';
			$mdBottomSheet.show({
				templateUrl: 'bottomListDisplay.ejs',
				controller: 'ListBottomSheetCtrl'
			}).then(function(clickedItem) {
				$scope.alert = clickedItem['name'] + ' clicked!';
			});
		};
	}]);
	productDescControllerModule.controller('ListBottomSheetCtrl', ['$scope', '$mdBottomSheet', function($scope, $mdBottomSheet){
		console.log("bottom sheet called");
		$scope.bottomListStyle = {'position':'fixed'}
		$scope.messages = [
			{				
				what: 'Brunch this weekend?',
				who: 'Min Li Chan',
				when: '3:08PM',
				notes: " I'll be in your neighborhood doing errands"
			},
			{				
				what: 'Brunch this weekend?',
				who: 'Min Li Chan',
				when: '3:08PM',
				notes: " I'll be in your neighborhood doing errands"
			},
			{				
				what: 'Brunch this weekend?',
				who: 'Min Li Chan',
				when: '3:08PM',
				notes: " I'll be in your neighborhood doing errands"
			},
			{				
				what: 'Brunch this weekend?',
				who: 'Min Li Chan',
				when: '3:08PM',
				notes: " I'll be in your neighborhood doing errands"
			},
			{				
				what: 'Brunch this weekend?',
				who: 'Min Li Chan',
				when: '3:08PM',
				notes: " I'll be in your neighborhood doing errands"
			},
			{				
				what: 'Brunch this weekend?',
				who: 'Min Li Chan',
				when: '3:08PM',
				notes: " I'll be in your neighborhood doing errands"
			},
			{				
				what: 'Brunch this weekend?',
				who: 'Min Li Chan',
				when: '3:08PM',
				notes: " I'll be in your neighborhood doing errands"
			},
			{				
				what: 'Brunch this weekend?',
				who: 'Min Li Chan',
				when: '3:08PM',
				notes: " I'll be in your neighborhood doing errands"
			},
			{				
				what: 'Brunch this weekend?',
				who: 'Min Li Chan',
				when: '3:08PM',
				notes: " I'll be in your neighborhood doing errands"
			}
		];		
	}])
})();