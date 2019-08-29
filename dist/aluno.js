"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    //nome: string
    function Aluno(nome) {
        this.nome = nome;
    }
    //this.nome = nome
    Aluno.prototype.exibir = function () {
        console.log("Nome: " + this.nome);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
