angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainService, $stateParams) {
  //$scope.packages = mainService.packageInfo

  var country = $stateParams.country
  var packageInfo = mainService.packageInfo
  if(country) {
    $scope.packages = packageInfo.filter(function(value) {
      return value.country === country;
    })
  }
  else {
    $scope.packages = mainService.packageInfo
  }


});
