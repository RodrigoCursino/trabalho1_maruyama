/**
 * Created by Rodrigo on 31/03/2017.
 */
angular.module("trabalhoApp").controller("DisciplinaController",function($scope, AppTrabalhoService, $location){

    $scope.disciplinas = [];
    $scope.cursos = [];
    $scope.pag = 1;
    $scope.num = 5;

    $scope.salvarDisciplina = function (disciplina){
        var sucesso = function (dados) {
            $location.url("/listarDisciplina");
        };

        var erro = function (err) {
            alert("Erro salvar Disciplina");
        }
        AppTrabalhoService.cadastroDisciplina(disciplina).then(sucesso,erro);
    }

    // buscar por id
    $scope.listarDisciplinasPorCurso = function (c) {

        var sucesso = function (dados) {
            $scope.pag = 1;
            $scope.disciplinas = dados.data;
        };

        var erro = function (err) {
            alert("Erro Paginar");
        };

        AppTrabalhoService.listarDisciplinaPorCurso(c.cursoId).then(sucesso,erro);

    }


    $scope.listarDisciplinas = function (pag,num)  {

        var sucesso = function (dados) {
            $scope.disciplinas = dados.data;
        };

        var erro = function (err) {
            alert("Erro listar Cursos");
        }

        AppTrabalhoService.listarDisciplinas($scope.pag,$scope.num).then(sucesso,erro);
    }

    $scope.frente = function (pagina) {

        $scope.pag += 1;

        var sucesso = function (dados) {
            $scope.disciplinas = dados.data;
        };

        var erro = function (err) {
            $scope.pag += $soope.pag -1;
            alert("Erro Paginar");
        };


        AppTrabalhoService.listarDisciplinas($scope.pag,$scope.num).then(sucesso,erro);
    };

    $scope.voltar = function () {

        if ($scope.pag > 1) {
            $scope.pag -= 1;
        }

        var sucesso = function (dados) {
            $scope.disciplinas = dados.data;
        };

        var erro = function (err) {
            $scope.pag += $soope.pag + 1;
            alert("Erro Paginar");
        };


        AppTrabalhoService.listarDisciplinas($scope.pag,$scope.num).then(sucesso,erro);
    };


    // listar cursos
    $scope.listarCursos = function ()  {

        var sucesso = function (dados) {
            $scope.cursos = dados.data;
        };

        var erro = function (err) {
            alert("Erro listar Cursos");
        }

        AppTrabalhoService.listarCursos(1,2000).then(sucesso,erro);
    }


    $scope.listarCursos(1,2000);
    $scope.listarDisciplinas($scope.pag,$scope.num);
});
