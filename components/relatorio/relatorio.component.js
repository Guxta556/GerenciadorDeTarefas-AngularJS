angular.module('meuApp').component('relatorio', {
    templateUrl: 'components/relatorio/relatorio.template.html',
  
    controller: function() {
      var vm = this;
  
      vm.totalTarefas = 0;
      vm.tarefasConcluidas = 0;
      vm.tarefasPendentes = 0;
      vm.tarefasPorCategoria = {};
  
      vm.$onInit = function() {
        const tarefasSalvas = localStorage.getItem('tarefas');
        const tarefas = tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  
        vm.totalTarefas = tarefas.length;
        vm.tarefasConcluidas = tarefas.filter(t => t.status === true).length;
        vm.tarefasPendentes = tarefas.filter(t => t.status === false).length;
  
        tarefas.forEach(t => {
          if (!vm.tarefasPorCategoria[t.categoria]) {
            vm.tarefasPorCategoria[t.categoria] = 0;
          }
          vm.tarefasPorCategoria[t.categoria]++;
        });
      };
    }
  });
  