var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",["$scope",function(m){
  m.nombre = "David";
  m.comentarios = {};
  m.comentarios = [{
        comentario: "Buen Tutorial",
        username:"codigofacilito"
      },
      {
        comentario: "Malisimo Tutorial",
        username: "otro_usuario"
      }
    ];
    m.agregarComentario = function(){
      m.comentarios.push(m.nuevoComentario);
    }
}]);
