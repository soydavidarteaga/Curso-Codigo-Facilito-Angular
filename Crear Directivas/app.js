angular.module("CustomDirective",[])
.directive("myAutocomplete",function(){
  function link(scope,element,attrs){
      $(element).autocomplete({
        source: scope.$eval[attrs.myAutocomplete],
        select: function(ev,ui){
            ev.preventDefault();
            if(ui.item){
              scope.optionSelected(ui.item.value);
            }
        },
        focos: function(ev,ui){
          ev.preventDefault();
          $(this).val(ui.item.label);
        }
      });
  };
  return {
    link: link
  };
})
.directive('backImg',function(){
  return function($scope,element,attrs){
    attrs.backImg //En caso de que no sea js lo que esta adentro
    //Para ello se usa observe
    attrs.$observe('backImg',function(value){
      element.css({
        'background-image': "url('"+value+"')",
        'background-size': 'cover',
        'background-position': 'center'

      });
    });
  }
})
.controller("AppCtrl",function($scope,$http){
  $scope.repos = [];
  $http.get("https://api.github.com/users/twitter/repos")
  .success(function(data){
    $scope.posts = data;
    for (var i = data.length - 1; i >= 0; i--){
      var repo = data[i];
      $scope.repos.push(repo.name);
    };
    console.log($scope.repos)
  })
  .error(function(err){
    console.log(err);
  });
  $scope.optionSelected = function(data){
    $scope.$apply(function(){
      $scope.main_repo = data;
    })
  }
});
