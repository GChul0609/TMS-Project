angular.module('myApp')
.controller('RegistCtrl',['$scope',($scope) ->

      console.log('注册的控制器')
      $scope.userEntity=
          username:'',
          password:'',
          password2:''
      #注册按钮对应的事件
      $scope.doRegist= ->
         console.log  $scope.userEntity
         return

      return
])