(function (){

  var app = angular.module('app', []);

  app.controller('AdquirenteCtrl', function ($scope) {
      
      $scope.nome = "";
      $scope.bandeira = {
          'nome': "",
          'selected': false
      }
      $scope.bandeiras = [];

      $scope.bandeirasSelecionadas = [];

      $scope.adquirente = {

          'nome': "",
          'listaBandeiras': []
      }

      $scope.listaAdquirentes = [];

      $scope.init = function(){
          $scope.bandeiras = [{'nome':'Visa', 'selected': false}, {'nome':'Mastercard', 'selected': false}, {'nome': 'Elo', 'selected': false}, {'nome': 'Amex', 'selected': false}];
      };
  
      $scope.addBandeira = function(bandeira){
          
          var index = $scope.bandeirasSelecionadas.indexOf(bandeira.nome);
          // is currently selected
          if (index > -1) {
            $scope.bandeirasSelecionadas.splice(index, 1);
          }

          // is newly selected
          else {
             $scope.bandeirasSelecionadas.push(bandeira);
          }
      };

      $scope.salvar = function(){

          $scope.adquirente.listaBandeiras = $scope.bandeirasSelecionadas;

          $scope.listaAdquirentes.push($scope.adquirente);
          $scope.limpaVariaveis();
      };

      $scope.limpaVariaveis = function(){
        $scope.adquirente = {
            'nome': "",
            'listaBandeiras': []
        }

        $scope.nome = "";
        $scope.bandeirasSelecionadas = [];

        for (var i=0; i<$scope.bandeiras.length; i++){
          $scope.bandeiras[i].selected = false;
        }
        
      };

  });
  
})();