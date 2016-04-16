var app = angular.module('antsApp', ['ant-info-dir']);

app.controller('mainController', ['$scope', '$log', 'antsFactory', function($scope, $log, antsFactory) {
  $scope.types = antsFactory.antsTypes;
}]);
