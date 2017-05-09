/**
 * Created by Rodrigo on 04/05/2017.
 */
angular.module("trabalhoApp").controller("MatriculaController", function ($scope, AppTrabalhoService, $location){

    $scope.disciplinas = [];
    $scope.cursos = [];
    $scope.alunos = [];
    $scope.matriculados = [];
    $scope.semestres = [];
    $scope.alunosMatricular = [];
    $scope.alunosParaCadastro = [];
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


    // chamando do form ce curso na view matricula
    $scope.listarDisciplinasPorCurso = function (curso) {

        alert(curso);
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

    //matriculando alunos
    $scope.matricular = function (disciplina, semestre) {
        for (var i = 0; i < $scope.alunosMatricular.length; i++) {
            $scope.alunosParaCadastro.push($scope.alunosMatricular[i]);
        }
    }

    $scope.marcado = function (alunoCheck) {
        return $scope.alunosMatricular.indexOf(alunoCheck) > -1;
    }

    $scope.checkBox = function (aluno) {
        var index = $scope.alunosMatricular.indexOf(aluno);

        if (index > -1) {
            $scope.alunosMatricular.splice(index,1);
        } else {
            $scope.alunosMatricular.push(aluno);
        }
    }

    $scope.vetorCadastro = [];
    $scope.cadastrarAluno = function (disciplina, semestre) {

        alert (disciplina+" "+semestre);
        $scope.vetorCadastro = [];
        for (var i = 0; i < $scope.alunosParaCadastro.length; i++) {

            var referencias = {};

                        referencias.DisciplinaId =  disciplina.id,
                        referencias.AlunoId = $scope.alunosParaCadastro[i].id,
                        referencias.SemestreId =  semestre.id


            $scope.vetorCadastro.push(referencias)
        }

        var sucesso = function () {
            alert("Sucess ao Matricular");
        };

        var erro = function (err) {
            alert("Erro ao Matricular");
        };

        AppTrabalhoService.matricularAlunos($scope.vetorCadastro).then(sucesso,erro);

    }

    listarCursos ();
});
