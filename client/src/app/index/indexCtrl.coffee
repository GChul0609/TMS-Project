angular.module('myApp')
.controller('IndexCtrl',['$scope','$rootScope','$location',($scope,$rootScope,$location)->
     console.log('这是首页控制器')
     $scope.task=
          description:'' #任务的描述信息

     #任务列表
     $scope.taskList=[]

     #添加任务到任务列表中的事件
     $scope.addTask= ->
          task = angular.copy($scope.task);
          task.checked = false;
          $scope.taskList.push(task)
          console.log $scope.taskList
          $scope.task.description=''




])