angular.module("CustomDirective",[])
.directive('backImg',function(){
  return function($scope,element,attrs){
    attrs.backImg //En caso de que no sea js lo que esta adentro
    //Para ello se usa observe
    attrs.$observe('backImg',function(value){
      element.css({
        "background": "url("+value+")",
        "background-size": "cover",
        "background-position": "center"

      });
    });
  }
})
.controller("AppCtrl",function($scope,$http){
  $scope.repos = [];
  $http.get("https://api.github.com/users/codigofacilito/repos")
  .success(function(data){
    console.log(data);
    $scope.repos = data;
  })
  .error(function(err){
    console.log(err);
  });
});
