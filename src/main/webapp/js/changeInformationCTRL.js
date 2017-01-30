var ciModule = angular.module('changeInformationApp', []);
ciModule.controller('changeInformationCtrl', function($scope, $http){
	$scope.incorrectPassword = "";
	$scope.badFormat = "";
	$scope.notEqual = "";
	$scope.phoneBadFormat = "";
	$scope.successMessage = "";
	
	$scope.formChangePassword = function(){
		console.log("Button Pressed");
		$scope.incorrectPassword = "";
		$scope.badFormat = "";
		$scope.notEqual = "";
		$scope.successMessage = "";
		
		if(false){ //Check current password
			$scope.incorrectPassword = "Incorrect password!";
		}
		if($scope.firstPasswordModel !== $scope.secondPasswordModel){
			$scope.notEqual = "Passwords not equal!";
		} else if($scope.firstPasswordModel.length < 8){
			$scope.badFormat = "Password must be at least eight characters!";
		} else if($scope.firstPasswordModel.length > 75){
			$scope.badFormat = "Password must be at most seventy-five characters!";
		} else if($scope.firstPasswordModel === $scope.firstPasswordModel.toLowerCase()){
			$scope.badFormat = "Password must contain at least one uppercase letter!";
		} else if($scope.firstPasswordModel === $scope.firstPasswordModel.toUpperCase()){
			$scope.badFormat = "Password must contain at least one lowercase letter!";
		} else if(!containsNumber($scope.firstPasswordModel)){
			$scope.badFormat = "Password must contain at least one number!";
		} else if(!containsSpecial($scope.firstPasswordModel)){
			$scope.badFormat = "Password must contain at least one special character!";
		} else {
			/*$http.post("", $scope.firstPasswordModel).success(function(){
				
			})*/
			$scope.successMessage = "Password successfully changed!";
		}
	};
	
	$scope.formChangePhoneNumber = function(){
		$scope.phoneBadFormat = "";
		$scope.successMessage = "";
		
		if(false){//CHECK PHONE NUMBER AGAINST VALIDATIONS
			$scope.phoneBadFormat = "Invalid phone number! Use ########## format."
		} else {
			/*$http.post("", $scope.phoneChangeModel).success(function(){
				
			})*/
			$scope.successMessage = "Phone number successfully changed!";
		}
	};
});

var containsNumber = function(str){
	if(str.includes('0')){
		return true;
	} else if(str.includes('1')){
		return true;
	} else if(str.includes('2')){
		return true;
	} else if(str.includes('3')){
		return true;
	} else if(str.includes('4')){
		return true;
	} else if(str.includes('5')){
		return true;
	} else if(str.includes('6')){
		return true;
	} else if(str.includes('7')){
		return true;
	} else if(str.includes('8')){
		return true;
	} else if(str.includes('9')){
		return true;
	} else {
		return false;
	}
};

var containsSpecial = function(str){
	if(str.includes('-')){
		return true;
	} else if(str.includes('=')){
		return true;
	} else if(str.includes('[')){
		return true;
	} else if(str.includes(']')){
		return true;
	} else if(str.includes('\\')){
		return true;
	} else if(str.includes(';')){
		return true;
	} else if(str.includes(',')){
		return true;
	} else if(str.includes('.')){
		return true;
	} else if(str.includes('/')){
		return true;
	} else if(str.includes('~')){
		return true;
	} else if(str.includes('!')){
		return true;
	} else if(str.includes('@')){
		return true;
	} else if(str.includes('#')){
		return true;
	} else if(str.includes('$')){
		return true;
	} else if(str.includes('%')){
		return true;
	} else if(str.includes('^')){
		return true;
	} else if(str.includes('&')){
		return true;
	} else if(str.includes('*')){
		return true;
	} else if(str.includes('(')){
		return true;
	} else if(str.includes(')')){
		return true;
	} else if(str.includes('_')){
		return true;
	} else if(str.includes('+')){
		return true;
	} else if(str.includes('{')){
		return true;
	} else if(str.includes('}')){
		return true;
	} else if(str.includes('|')){
		return true;
	} else if(str.includes(':')){
		return true;
	} else if(str.includes('<')){
		return true;
	} else if(str.includes('>')){
		return true;
	} else if(str.includes('?')){
		return true;
	} else {
		return false;
	}
};