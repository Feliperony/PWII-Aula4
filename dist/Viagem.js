var Viagem = /** @class */ (function () {
    //TempoGasto: number
    //VelocidadeMedia: number
    //RendimentoVeiculo: number
    function Viagem(TempoGasto, VelocidadeMedia, RendimentoVeiculo) {
        this.TempoGasto = TempoGasto;
        this.VelocidadeMedia = VelocidadeMedia;
        this.RendimentoVeiculo = RendimentoVeiculo;
    }
    Viagem.prototype.distancia = function () {
        Number;
        return (this.VelocidadeMedia * this.TempoGasto);
    };
    Viagem.prototype.consumo = function () {
        Number;
        return (this.distancia() / this.RendimentoVeiculo);
    };
    return Viagem;
}());
