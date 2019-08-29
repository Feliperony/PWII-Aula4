"use strict";
//let Tempogasto: number = 2
//let Velocidade: number = 100
//let Rendimento: number = 10
//let distancia = Tempogasto * Velocidade
//let consumo = distancia /Rendimento
exports.__esModule = true;
//console.log("Distância: " + distancia +" KM  " + " Consumo: " + consumo + " L")
var Viagem_1 = require("./Viagem");
var vg1 = new Viagem_1.Viagem(2, 100, 10);
console.log(vg1.distancia());
console.log(vg1.consumo());
