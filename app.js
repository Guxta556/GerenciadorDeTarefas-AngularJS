angular.module('meuApp', [])
  .controller('MainController', function($scope) {
    var vm = this;
    
    // Inicializa com a página de tarefas
    vm.paginaAtual = 'pages/tarefas.html'; // O início será a página de tarefas

    // Escuta o evento "mudarPagina" para alterar a página
    $scope.$on('mudarPagina', function(evento, pagina) {
      vm.paginaAtual = pagina;  // Define a nova página a ser exibida
      $scope.$applyAsync();      // Atualiza a view
    });
  });
