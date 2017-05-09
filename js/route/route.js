/**
 * Created by Rodrigo on 27/03/2017.
 */
angular.module("trabalhoApp").config(["$routeProvider", function($routeProvider){
    // home
    $routeProvider.when("/",{
        templateUrl:"view/home.html"
    });
    // cadastro aluno
    $routeProvider.when("/cadastroDeAluno",{
        templateUrl:"view/cadastro_aluno.html",
        controller:"AlunoController"
    });

    // listar alunos
    $routeProvider.when("/listagemAluno",{
        templateUrl:"view/listar_alunos.html",
        controller:"AlunoController",
    });

    // listar alunos
    $routeProvider.when("/listarDisciplina",{
        templateUrl:"view/listar_disciplina.html",
        controller:"DisciplinaController",
    });

    // cadastro Curso
    $routeProvider.when("/cadastroDeCurso",{
        templateUrl:"view/cadastro_curso.html",
        controller: "CursoController"
    });

    // listar disciplina
    $routeProvider.when("/listarDisciplina",{
        templateUrl:"view/listar_disciplina.html",
        controller:"DisciplinaController"
    });

    // listar disciplina
    $routeProvider.when("/cadastroDeDisciplina",{
        templateUrl:"view/cadastro_Disciplina.html",
        controller:"DisciplinaController"
    });

    // matricular Alunos
    $routeProvider.when("/matricula",{
        templateUrl:"view/matricula.html",
        controller:"MatriculaController"
    });

}]);