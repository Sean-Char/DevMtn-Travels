angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainService, $stateParams) {
  //$scope.travelInfo = mainService.travelInfos
  var id = parseInt($stateParams.id)
  // var packageInfo = mainService.packageInfo
  // if(id) {
  //   $scope.packageInfo = packageInfo.filter(function(value) {
  //     return value.id === id;
  //   })
  // }
  var packageInfo = mainService.packageInfo
  for (var i = 0; i < packageInfo.length; i++) {
    if (packageInfo[i].id === id) {
      $scope.foundCity = packageInfo[i].city
      $scope.foundCountry = packageInfo[i].country
    }
  }

});
