'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '1.0').
  value('backend','http://webengi.marom.ch:8080');
