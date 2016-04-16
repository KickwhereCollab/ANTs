var app = angular.module('ant-info-dir', []);
app.directive('antInfo', function() {
  return{
    restrict: 'E',
    templateUrl: 'ant-info.html'
  };
});
