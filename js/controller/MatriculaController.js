/**
 * Created by Rodrigo on 04/05/2017.
 */
angular.module("trabalhoApp").controller("MatriculaController", function ($scope, AppTrabalhoService, $location){

    $scope.disciplinas = [];
    $scope.cursos = [];
    $scope.alunos = [];
    $scope.matriculados = [];
    $scope.alunosMatricular = [];
    $scope.semestres = [];
    $scope.tamanhoVetorCurso;


    // listar cursos
    var listarCursos = function ()  {

        var sucesso = function (dados) {
            $scope.cursos = dados.data;
            $scope.tamanhoVetorCurso = dados.data.length;
        };

        var erro = function (err) {
            alert("Erro listar Cursos");
        }

        AppTrabalhoService.listarCursos(1,2000).then(sucesso,erro);
    }

    $scope.matricular = function (aluno) {
        $scope.alunosMatricular.pop();
    }


    // chamdo do form ce curso na view matricula
    $scope.listarDisciplinasPorCurso = function (curso) {

        var sucesso = function (dados) {
            $scope.disciplinas = dados.data;
        };

        var erro = function (err) {
            alert("Erro ao encontra curso na matricula");
        };

        AppTrabalhoService.listarDisciplinaPorCurso(curso).then(sucesso,erro);

    }

    // listar semestre
    $scope.listarSemestre = function () {

        var sucesso = function (dados) {
            $scope.semestres = dados.data;
        };

        var erro = function (err) {
            alert("Erro ao listar semestres");
        };

        AppTrabalhoService.listarSemestres().then(sucesso,erro);
    }

    // listar alunos por curso
    $scope.listarAlunosPorCurso = function (curso) {
        //alert(curso);
        var sucesso = function (dados) {
            $scope.alunos = dados.data;
        };

        var erro = function (err) {
            alert("Erro ao listar os alunos");
        };

        AppTrabalhoService.listarAlunoPorCurso(curso).then(sucesso,erro);

    }

    // listar alunos matriculados
    $scope.listarMatriculados = function (semestre,disciplina) {
        //alert(disciplina+"/"+semestre);
        var sucesso = function (dados) {
            $scope.matriculados = dados.data;
        };

        var erro = function (err) {
            alert("Erro ao listar os alunos Matriculados");
        };

        AppTrabalhoService.listarMatriculados(semestre,disciplina).then(sucesso,erro);

    }

    listarCursos ();
});
