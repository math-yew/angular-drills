angular.module('filterApp')
.controller('mainCtrl', function ($scope, mainService) {

$scope.myData = mainService.myData;

})
