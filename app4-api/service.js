angular.module('apiApp')
.service('mainService', function($http){

this.getData = function(){
return $http(
  {
    method: 'GET',
    url: 'https://practiceapi.devmountain.com/products'
  }
)
.then(function(response) {
  return response.data;
})

}
});
