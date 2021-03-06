'use strict';

var app = angular.module('myapp');

app.controller('homeCtrl', function($scope, $http, $state) {

  $scope.submit = function() {
      // console.log('$scope.client', $scope.client);
      $http.post('/api/clients', $scope.client);
  }

  $scope.read = function() {
    $http.get('/api/clients').then(res => {
      // console.log('res.data', res.data);
      $scope.resClient = res.data;
    });
  }

  $scope.delete = function(objId) {
    $http.delete('/api/clients/'+objId);
  }

  $scope.update = function(client) {
    $http.get('/api/clients/'+client._id).then( res => {
      console.log('res', res.data);
      $scope.client = res.data;
    });

    // $http.put('/api/clients/'+client._id, client);

  }
});
