// Generated by CoffeeScript 1.12.4
(function() {
  angular.module('myApp').controller('IndexCtrl', [
    '$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
      console.log('这是首页控制器');
      $scope.task = {
        description: ''
      };
      $scope.taskList = [];
      return $scope.addTask = function() {
        var task;
        task = angular.copy($scope.task);
        task.checked = false;
        $scope.taskList.push(task);
        console.log($scope.taskList);
        return $scope.task.description = '';
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=indexCtrl.js.map
