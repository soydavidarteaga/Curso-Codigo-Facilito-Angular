angular.module("MyFirstApp",[])
  .run(function($rootScope){
    $rootScope.nombre = "Codigo Facilito";
  })
  .controller("FirstController",function($scope){
    $scope.nombre = "CF";
    setTimeout(function(){
      $scope.$apply(function(){
        $scope.nombre=":3"
      });
    },1000)
  })
  .controller("ChildController",function($scope){

  });
