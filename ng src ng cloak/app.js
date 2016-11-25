angular.module("CustomDirective",[])
.controller("AppCtrl",function($scope,$http){
  $scope.repos = [];
  $http.get("https://api.github.com/users/David17art/repos")
  .success(function(data){
    console.log(data);
    $scope.repos = data;
  })
  .error(function(err){
    console.log(err);
  });
});
