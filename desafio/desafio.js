const readline = require('readline-sync');
const Forca = require('./forca');
const jogo = new Forca('abacaxi');

console.log("Apenas Chutar UMA letra por vez!!!!")
while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {
    const chute = readline.question("Aguardando chute: \n");
    jogo.chutar(chute);
    console.log(jogo.buscarDadosDoJogo());
}

console.log("você " + jogo.buscarEstado());
