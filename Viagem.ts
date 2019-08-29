export class Viagem{

    //TempoGasto: number
    //VelocidadeMedia: number
    //RendimentoVeiculo: number

    constructor(public TempoGasto: number, public VelocidadeMedia: number, public RendimentoVeiculo: number){}

    distancia(){Number
        return( this.VelocidadeMedia * this.TempoGasto);
    }

    consumo(){Number
        return( this.distancia() /this.RendimentoVeiculo);
    }
}