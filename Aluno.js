"use strict";
exports.__esModule = true;
var Disciplina_1 = require("./Disciplina");
var Aluno = /** @class */ (function () {
    function Aluno() {
        this.disciplinas = [];
    }
    Aluno.prototype.matricular = function (disciplina) {
        this.disciplinas.push(disciplina);
    };
    Aluno.prototype.trancar = function (disciplina) {
        var cont = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(cont, cont);
    };
    Aluno.prototype.situacao = function () {
        var texto = this.nome + " Matrícula: " + this.matricula + " Disciplinas: \n";
        this.disciplinas.forEach(function (element) {
            texto += element.nome + "\n";
        });
        return texto;
    };
    return Aluno;
}());
var d1 = new Disciplina_1.Disciplina("Programacao Orientada a Objetos");
var d2 = new Disciplina_1.Disciplina("Programacao Estruturada");
var d3 = new Disciplina_1.Disciplina("Autoria Web");
var a1 = new Aluno();
a1.nome = "Joao Pedro";
a1.endereco = "Rua das Casas";
a1.matricula = 2019001;
a1.matricular(d1);
a1.matricular(d2);
a1.matricular(d3);
console.log("----");
console.log(a1.situacao());
a1.trancar(d2);
console.log("----");
console.log(a1.situacao());
