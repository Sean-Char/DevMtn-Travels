angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainService) {

  $scope.travelInfos = mainService.travelInfos;
});
