var app = angular.module('antsApp', ['antInfo-dir']);

app.controller('mainController', ['$scope', '$log', 'antsFactory', function($scope, $log, antsFactory) {
  $scope.types = antsFactory.antsTypes;
}]);
