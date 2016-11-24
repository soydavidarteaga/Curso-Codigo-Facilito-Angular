var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope,$http){
  $scope.posts = [];
  $http.get("https://jsonplaceholder.typicode.com/posts")
      .success(function(data){
        $scope.posts = data;
      })
      .error(function(){
        console.log(data);
      })
});
