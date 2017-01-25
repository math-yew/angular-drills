angular.module('apiApp')
.controller('mainCtrl', function($scope, mainService) {

mainService.getData().then(function(response) {
  $scope.getData =  response;
})


})
