// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available

$scope.hideSpinner = function() {
  $scope.app.params.spinnerVisible = false;
};

$scope.start = function() {
  $scope.app.params.spinnerVisible = true;
  $scope.timeoutPromise = $timeout($scope.hideSpinner, 3000);
};

$scope.cancel = function() {
  $timeout.cancel($scope.timeoutPromise);
};