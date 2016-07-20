'use strict';

var app = angular.module('myapp');

app.controller('homeCtrl', function($http, $scope, $state) {

  $http.get('/api/clients').then( res => {
    $scope.clientList = res;
  });

  $http.post('/api/clients', $scope.newClient);

  $http.put('/api/clients', $state.editClient).then(res => {
      $scope.user = res.data;
  });

  $http.delete('/api/clients', $state.params.id);

});
