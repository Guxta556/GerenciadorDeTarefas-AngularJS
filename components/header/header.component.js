angular.module('meuApp').component('headerComponente', {
    templateUrl: 'components/header/header.template.html',
    controller: function($scope) {
      var vm = this;
  
      vm.irPara = function(pagina) {
        $scope.$emit('mudarPagina', 'pages/' + pagina + '.html');
      };
    }
  });
  