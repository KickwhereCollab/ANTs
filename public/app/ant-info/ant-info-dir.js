var app = angular.module('antInfo-dir', []);
app.directive('antInfo', function() {
  return {
    restrict: 'E',
    scope: {
      antInfo: '=info'
    },
    // templateUrl: 'ant-info.html'
    template:
      'Ant: {{antInfo.name}} About: {{antInfo.description}}'
  };
});
