var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope){
  $scope.nombre = "David";
  $scope.comentarios = {};
  $scope.comentarios = [{
        comentario: "Buen Tutorial",
        username:"codigofacilito"
      },
      {
        comentario: "Malisimo Tutorial",
        username: "otro_usuario"
      }
    ];
    $scope.agregarComentario = function(){
      $scope.comentarios.push($scope.nuevoComentario);
    }
});
