#找到名叫myApp的模块
angular.module('myApp')
.controller('LoginCtrl',['$scope','$location',($scope,$location)->
     $scope.userEntity=
         username:'',
         password:''
     $scope.rememberMe = false;
     console.log '登陆的控制器'

     $scope.doLogin = ->
       console.log($scope.userEntity);
       #如果登陆成功,则转到首页
       $location.path("/").replace();
       return
     return
])