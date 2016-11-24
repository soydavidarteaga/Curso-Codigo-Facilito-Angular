var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope,$http){
  $scope.posts = [];
  $scope.newPost = {};
  $http.get("https://jsonplaceholder.typicode.com/posts")
      .success(function(data){
        $scope.posts = data;
      })
      .error(function(){
        console.log(data);
      })
      $scope.addPost = function(){
        $http.post("https://jsonplaceholder.typicode.com/posts",{
          tittle: $scope.newPost.title,
          body: $scope.newPost.body,
          userId: 1
        })
        .success(function(){
          $scope.posts.push($scope.newPost);
          $scope.newPost = {};
        })
        .error(function(error,status,headers,config){
          console.log(error);
        });
      }
});
