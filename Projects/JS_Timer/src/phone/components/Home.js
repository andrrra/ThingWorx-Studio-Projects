// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available

$scope.countdown = function () {
	$scope.app.params.count--;
}

$scope.start = function () {
	$scope.app.params.count = 5;
  	$scope.intervalPromise = $interval($scope.countdown, 1000, 5);
}

$scope.stop = function() {
	$interval.cancel($scope.intervalPromise);
};