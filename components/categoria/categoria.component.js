angular.module('meuApp').component('categoria', {
    templateUrl: 'components/categoria/categoria.template.html',    
    controller: function() {
      var vm = this;
  
      vm.novaCategoria = '';
      vm.categorias = [];
  
      var categoriasPadrao = ['Trabalho', 'Estudos', 'Pessoal'];
  
      vm.$onInit = function() {
        var salvas = localStorage.getItem('categorias');
  
        if (salvas) {
          vm.categorias = JSON.parse(salvas); // ✅ Corrigido: carrega do storage
        } else {
          vm.categorias = categoriasPadrao.slice(); // Se vazio, usa padrão
          atualizarStorage();
        }
      };
  
      function atualizarStorage() {
        localStorage.setItem('categorias', JSON.stringify(vm.categorias));
      }
  
      vm.adicionarCategoria = function() {
        if (vm.novaCategoria && !vm.categorias.includes(vm.novaCategoria)) {
          vm.categorias.push(vm.novaCategoria);
          vm.novaCategoria = '';
          atualizarStorage();
        }
      };
  
      vm.excluirCategoria = function(index) {
        vm.categorias.splice(index, 1);
        atualizarStorage();
      };
    }
  });
  