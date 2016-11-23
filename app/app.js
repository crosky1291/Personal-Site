'use strict'

var angular = require('angular')
var app = angular.module('yandriSanchez', [require('angular-route'), require('angular-ui-bootstrap')]);
app.config(configFunction);

//configuration of routes.
function configFunction($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      template: require('../templates/home.html'),
      controller: 'mainCtrl',
    })
    .when('/profile', {
      template: require('../templates/profile.html'),
      controller: 'mainCtrl'
    })
    .when('/profile', {
      template: require('../templates/portfolio.html'),
      controller: 'mainCtrl'
    })
    .when('/contact', {
      template: require('../templates/contact.html'),
      controller: 'mainCtrl'
    });
}

//this automatically requires the index.js file inside these folders.
//thats how everything is linked and readable.
require('./scripts/controllers');
require('../styles/main.scss')