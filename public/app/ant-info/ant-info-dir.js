var app = angular.module('antInfo-dir', []);
app.directive('antInfo', function() {
  return {
    restrict: 'E',
    scope: {
      antInfo: '=info'
    },
    templateUrl: 'app/ant-info/ant-info.html'
  };
});
