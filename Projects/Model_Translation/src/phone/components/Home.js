// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available

$scope.app.params.xCoordModel = 0;
$scope.app.params.yCoordModel = 0;
$scope.app.params.zCoordModel = 0;

$scope.reset = function() {
  $scope.app.params.xCoordModel = 0;
  $scope.app.params.yCoordModel = 0;
  $scope.app.params.zCoordModel = 0;
};

$scope.moveModelX = function() {
  $scope.app.params.xCoordModel += 0.01;
  //$scope.app.params.xCoordModel = Math.round($scope.app.params.xCoordModel);
  //$scope.app.params.xCoordModel = $scope.app.params.xCoordModel.toFixed(2);
  //$scope.app.params.xCoordModel = $scope.app.params.xCoordModel.toPrecision(2);
  $scope.app.params.xCoordModel = $scope.app.params.xCoordModel.round(2);
};

$scope.moveModelY = function() {
  $scope.app.params.yCoordModel += 0.01;
};

$scope.moveModelZ = function() {
  $scope.app.params.zCoordModel += 0.01;
};