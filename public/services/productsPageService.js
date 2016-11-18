(function(){
	var productPageModule = angular.module('homeModule');
	productPageModule.service('productsService',['$http',function($http){
		return {
			getAllProducts : _allProductsProvider,
			getSuggestedProducts : _suggestedProductsProvider
		}
		function _allProductsProvider(){
			return{ 
				products : [
							{
								productDesc : {
									productImagePath : 'images/logo.png',
									productHeading : 'One Plus X',
									productSubHeading : 'Best Phone in the Industry',
									price : '16999',
									productDescription : 'The Description is awesome, really faadu review and jabardast specification'
								}
							},
							{
								productDesc : {
									productImagePath : 'images/logo.png',
									productHeading : 'Redmi 1s',
									productSubHeading : 'Mi phone with awesome feature',
									price : '7999',
									productDescription : 'The Description is awesome, really faadu review and jabardast specification'
								}
							}]
			}
		}

		/* ############## for the suggested products ############ */		
		function _suggestedProductsProvider(){
			return{
				suggestedProducts : [
										{
											suggProductDesc : {
												imagePath : 'images/logo.png',
											}
										},
										{
											suggProductDesc : {
												imagePath : 'images/logo.png',
											}
										}
									]
			}
		}
	}]);
})();