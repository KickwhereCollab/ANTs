var app = angular.module('antsApp', ['antInfo-dir']);

app.controller('mainController', ['$scope', '$log', 'antsFactory', function($scope, $log, antsFactory) {
  this.types = antsFactory.antsTypes;
}]);
