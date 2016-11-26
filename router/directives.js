angular.module("CustomDirective")
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
