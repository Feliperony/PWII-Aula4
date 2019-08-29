//let Tempogasto: number = 2
//let Velocidade: number = 100
//let Rendimento: number = 10
//let distancia = Tempogasto * Velocidade
//let consumo = distancia /Rendimento

//console.log("Distância: " + distancia +" KM  " + " Consumo: " + consumo + " L")

import {Viagem} from "./Viagem"

let vg1 = new Viagem(2,100,10)
console.log(vg1.distancia())
console.log(vg1.consumo())
