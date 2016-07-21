'use strict';

var app = angular.module('myapp');

app.controller('homeCtrl', function($scope, $http, $state) {

  $scope.submit = function() {
      $http.post('/api/clients', $scope.client);
  }

  $scope.read = function() {

    $http.get('/api/clients').then(res => {
      // console.log('read', res);
      $scope.resClient = res.data;
    });
  }

  $scope.delete = function(objId) {
    console.log('objectid delete', `${objId}`);
    // $http.delete('/api/clients/`${objId}`');
    $http.delete('/api/clients/`${objId}`');
  }

  // $http.get('/api/clients').then( res => {
  //   $scope.clientList = res;
  // });
  //
  // $http.post('/api/clients', $scope.newClient);
  //
  // $http.put('/api/clients', $state.editClient).then(res => {
  //     $scope.user = res.data;
  // });
  //
  // $http.delete('/api/clients', $state.params.id);

});
