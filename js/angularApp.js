
//initialize module "BMRCalc".
var app = angular.module('BMRCalc', []);

//registering controller "BmrController".
app.controller('BmrController', function($scope) {
	
	//preserving initial values.
	$scope.gender = "Male";
	$scope.weight = "65";
	$scope.height = "170";
	$scope.age = "30";
	
	$scope.submit = function() {
		if($scope.gender === "Male") {
			//Harris Benedict Equation for male BMR calculation
			$scope.result = 66 + (13.7 * $scope.weight) + (5 * $scope.height) - (6.8 * $scope.age);
		} else {
			//Harris Benedict Equation for female BMR calculation
			$scope.result = 655 + (9.6 * $scope.weight) + (1.8 * $scope.height) - (4.7 * $scope.age);
		}
	}
});


