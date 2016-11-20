(function(){
	var productDescServiceModule = angular.module('homeModule');
	productDescServiceModule.service('productDescService',['$http',function($http){
		return{
			getProductDescription : _getProductDescription,
			getProductDescListProvider : _productDescListProvider
		}		
		function _getProductDescription(){
			return{ 
				'productDesc' :'This is my Product.' 
			}
		}
		function _productDescListProvider(){
			return {
				productDescList : [
					{
						imagePath : 'images/productDesc.jpg',
						productHeading : 'this is the heading for the product',
						productSubHeading : 'this is the subHeading',
						productPrice : '17999',
						productDescription : 'this is the brief description of the product which tells about the features'				
					},
					{
						imagePath : 'images/productDesc.jpg',
						productHeading : 'this is the heading for the product',
						productSubHeading : 'this is the subHeading',
						productPrice : '17999',
						productDescription : 'this is the brief description of the product which tells about the features'				
					}
				]
			}
		};

	}]);
})();