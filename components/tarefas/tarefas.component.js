angular.module('meuApp').component('tarefas', {
    templateUrl: 'components/tarefas/tarefas.template.html',

    controller: function() {
      var vm = this;
  
      vm.tarefa = {};
      vm.tarefas = [];
      vm.editando = false;
      vm.indexEdicao = null;
      vm.modalAberto = false;

  
      vm.$onInit = function() {
        var salvas = localStorage.getItem('tarefas');
        vm.carregarCategorias();

        if (salvas) {
          vm.tarefas = JSON.parse(salvas);
        }
      };

      function atualizarStorage() {
        localStorage.setItem('tarefas', JSON.stringify(vm.tarefas));
      }
  
      vm.salvarTarefa = function() {
        if (vm.editando) {
          vm.tarefas[vm.indexEdicao] = angular.copy(vm.tarefa);
          vm.editando = false;
          vm.indexEdicao = null;
        } else {
          vm.tarefa.status = false; 
          vm.tarefas.push(angular.copy(vm.tarefa));
        }
        vm.tarefa = {};
        atualizarStorage();
      };
      
  
      vm.editarTarefa = function(index) {
        vm.tarefa = angular.copy(vm.tarefas[index]);
        vm.editando = true;
        vm.indexEdicao = index;
      };
  
      vm.excluirTarefa = function(index) {
        vm.tarefas.splice(index, 1);
        atualizarStorage(); 
      };
  
      vm.alternarStatus = function(tarefa) {  
        atualizarStorage(); 
      };

      vm.abrirModalEdicao = function(index) {
        vm.indexEdicao = index;
        vm.tarefaEditando = angular.copy(vm.tarefas[index]);
        vm.modalAberto = true;
      };
      
      vm.fecharModal = function() {
        vm.modalAberto = false;
        vm.tarefaEditando = {};
      };
      
      vm.salvarEdicao = function() {
        vm.tarefas[vm.indexEdicao] = angular.copy(vm.tarefaEditando);
        vm.fecharModal();
        atualizarStorage(); 
      };

      vm.carregarCategorias = function() {
        const categoriasSalvas = localStorage.getItem('categorias');
        vm.categorias = categoriasSalvas ? JSON.parse(categoriasSalvas) : [];
      };
      
    }
});
  