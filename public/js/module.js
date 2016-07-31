'use strict';

var app = angular.module('myapp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url : '/',
    templateUrl: '/html/home.html',
    controller: 'homeCtrl'
  })

});
