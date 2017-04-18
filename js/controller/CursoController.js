/**
 * Created by Rodrigo on 29/03/2017.
 */
angular.module("trabalhoApp").controller("CursoController",function($scope, AppTrabalhoService, $location) {

    $scope.cursos = [];
    $scope.pag = 1;
    $scope.num = 5;

    $scope.frente = function (pagina) {

        $scope.pag += 1;

        var sucesso = function (dados) {
            $scope.cursos = dados.data;
        };

        var erro = function (err) {
            $scope.pag += $soope.pag -1;
            alert("Erro Paginar");
        };


        AppTrabalhoService.listarCursos($scope.pag,$scope.num).then(sucesso,erro);
    };


    $scope.voltar = function () {

        if ($scope.pag > 1) {
            $scope.pag -= 1;
        }

        var sucesso = function (dados) {
            $scope.cursos = dados.data;
        };

        var erro = function (err) {
            $scope.pag += $soope.pag + 1;
            alert("Erro Paginar");
        };


        AppTrabalhoService.listarCursos($scope.pag,$scope.num).then(sucesso,erro);
    };



    $scope.salvarCurso = function (curso) {

             AppTrabalhoService.salvarCurso(curso).then(function(dados){
                 alert("cadastrado");
                 $location.url("/cadastroDeCurso");
             }, function (err) {
                 alert("Deu erro");

             });

         };

    $scope.listarCursos = function (pag,num)  {

        var sucesso = function (dados) {
            $scope.cursos = dados.data;
        };

        var erro = function (err) {
            alert("Erro listar Cursos");
        }

        AppTrabalhoService.listarCursos(pag,num).then(sucesso,erro);
    }

    // listar alunos
    $scope.listarAlunos = function (pag,num) {

        var sucesso = function (dados) {
            $scope.alunos = dados.data;
        };

        var erro = function (err) {
            alert("Erro listar Alunos");
        }

        AppTrabalhoService.listarAlunos(pag,num).then(sucesso,erro);
    }



    $scope.listarCursos($scope.pag,5);
});