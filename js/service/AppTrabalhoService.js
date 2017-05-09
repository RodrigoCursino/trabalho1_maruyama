/**
 * Created by Rodrigo on 31/03/2017.
 */
angular.module("trabalhoApp").factory("AppTrabalhoService",

    function($http)
          {
              // cadastro curso
              var _salvarCurso = function (dados) {
                  return $http ({
                      method: "POST",
                      url: "http://siscadcpwiv.herokuapp.com/curso/",
                      data: dados
                  })
              };

              var _cadastroAluno = function (dados) {
                  return $http ({
                      method: "POST",
                      url:"http://siscadcpwiv.herokuapp.com/aluno/",
                      data: dados
                  })
              }

              var _cadastroDisciplina = function (dados) {
                  return $http ({
                      method: "POST",
                      url:"http://siscadcpwiv.herokuapp.com/disciplina/ ",
                      data: dados
                  })
              }
              
              // listar cursos
              var _listarCursos = function (pag,num) {
                  return $http({
                      method: "GET",
                      url: "http://siscadcpwiv.herokuapp.com/curso/list/"+pag+"/"+num,
                  });
              };

              var _listarDisciplinas = function (pag,num) {
                  return $http({
                      method: "GET",
                      url: "http://siscadcpwiv.herokuapp.com/disciplina/list/"+pag+"/"+num,
                  });
              };

              // listar alunos
              var _listagemAlunos = function (pag, num) {
                  return $http({
                      method: "GET",
                      url: "http://siscadcpwiv.herokuapp.com/aluno/list/"+pag+"/"+num,
                  });
              }

              // listar alunos por curso
              var _listarAlunosPorCurso = function (id) {
                  return $http({
                      method: "GET",
                      url: " http://siscadcpwiv.herokuapp.com/aluno/curso/"+id
                  });
              }

              // listar alunos por curso
              var _listarDisciplinaPorCurso = function (id) {
                  return $http({
                      method: "GET",
                      url: "http://siscadcpwiv.herokuapp.com/disciplina/curso/"+id
                  });
              }

              var _listarSemestre = function () {
                  return $http ({
                      method:"GET",
                      url:"http://siscadcpwiv.herokuapp.com/semestre/list",
                  })
              }

              var _listarMatriculados = function (semestre,disciplina) {
                  return $http ({
                      method:"GET",
                      url:"http://siscadcpwiv.herokuapp.com/matricula/semestre/disciplina/"+semestre+"/"+disciplina,
                  })
              }

              var _matricularAlunos = function (dados) {
                  return $http ({
                      method:"POST",
                      url: "http://siscadcpwiv.herokuapp.com/matricula/",
                      data: dados
                  })
              }

              return {
                  // cadstro curso
                  salvarCurso: _salvarCurso,
                  // cadastro aluno
                  cadastroAluno: _cadastroAluno,
                  // cadastro disciplina
                  cadastroDisciplina: _cadastroDisciplina,

                  // listagem
                  listarCursos: _listarCursos,
                  listagemAlunos: _listagemAlunos,
                  listarAlunoPorCurso: _listarAlunosPorCurso,
                  listarDisciplinas: _listarDisciplinas,
                  listarDisciplinaPorCurso: _listarDisciplinaPorCurso,
                  listarSemestres : _listarSemestre,
                  listarMatriculados : _listarMatriculados,

                  // matricular aluno
                  matricularAlunos: _matricularAlunos
                }

          });