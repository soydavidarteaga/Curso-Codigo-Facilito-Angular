var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope,$http){
  $scope.posts = [];
  $scope.loading = true;
  $http.get("https://jsonplaceholder.typicode.com/posts")
      .success(function(data){
        $scope.posts = data;
        $scope.loading = false;
      })
      .error(function(){
        console.log(data);
      })
});
