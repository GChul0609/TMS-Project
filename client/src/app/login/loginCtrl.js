// Generated by CoffeeScript 1.12.4
(function() {
  angular.module('myApp').controller('LoginCtrl', [
    '$scope', '$location', function($scope, $location) {
      $scope.userEntity = {
        username: '',
        password: ''
      };
      $scope.rememberMe = false;
      console.log('登陆的控制器');
      $scope.doLogin = function() {
        console.log($scope.userEntity);
        $location.path("/").replace();
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=loginCtrl.js.map
