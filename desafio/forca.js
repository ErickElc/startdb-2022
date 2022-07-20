class Forca {
  
  constructor(palavra){

    this.estadoGame = "aguardando chute";
    this.vidas = 6;
    this.quantidadeAcertos = 0;
    this.letrasChutadas = [];
    this.letraDigitada = '';
    this.palavra = palavra;
    this.palavraEmCaracteres = palavra.split('');
    this.HideCaracter = this.palavraEmCaracteres;
    this.palavraEscondida = this.palavraEmCaracteres;
    this.n = 0;

  }

  chutar(letra) {
    let letraFormatada = letra.toLowerCase();

    if(letraFormatada.length > 1 || letraFormatada == ''){                                      // verificando se está sendo digitado é apenas uma letra;
      console.log("Dado inválido, digite de novo");
      return this.estadoGame;
    }
    
    for(let i in this.letrasChutadas){                         // verificando se a letra já foi digitada
      if(this.letrasChutadas[i] === letraFormatada){             
        console.log("Não pode repetir caracteres, por favor digite novamente!!");
        return this.estadoGame;
      } 
    }
    this.letraDigitada = letraFormatada;
    this.letrasChutadas.push(letraFormatada);

    let palavra = this.palavra;                                // Palavra escondida!
    
    let palavraCaracteres = palavra.split('');                // Array de caracteres
    
    this.palavraEmCaracteres = palavraCaracteres;

    let quantCaracteres = palavraCaracteres.length;            // Número de caracteres
    
    let acertosRodada  = 0;                                    //  <----
    
    

    for(let i in palavraCaracteres){              
      if(palavraCaracteres[i] === letraFormatada){                      // Verificando o Array de Caracteres, para saber se um algum caracter está correto!
        this.quantidadeAcertos += 1;
        acertosRodada += 1
      } 
    }

    if(acertosRodada == 0){                                    // Verificando se há erro, e descontando às vidas;
      this.vidas -= 1;
    }
    this.VerificarVitoria(quantCaracteres);
    this.EsconderPalavra();
    this.MostrarPalavra();

  }

  VerificarVitoria(numeroCarac){                               //      <---

    if(numeroCarac == this.quantidadeAcertos){  
      this.estadoGame = 'ganhou';
    }

  }
  EsconderPalavra(){
    
    if(this.n == 0){
      for(let i = 0; i < this.palavra.length; i++){
        this.HideCaracter[i] = '_';
      }
      this.palavraEscondida = this.HideCaracter;
      this.n = 1;
    }
    return '';
  }

  MostrarPalavra(){
    for(let i = 0; i < this.palavra.length; i++){
      if(this.palavraEscondida[i] == "_"){
        if(this.palavraEmCaracteres[i] == this.letraDigitada){
          this.palavraEscondida[i] = `${this.letraDigitada}`;
        }
        else{
          this.palavraEscondida[i] = '_'
        }
      }
    }
    return (this.palavraEscondida).join('');
  }

  buscarEstado() { 
    
    if(this.vidas == 0){
      this.estadoGame = 'perdeu';
      console.log(`A palavra era ${this.palavra}`)
    }
    
    return this.estadoGame;                                  // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
  
  } 
  
  buscarDadosDoJogo() {
    
    return{
      quantidadeChutes: this.letrasChutadas.length,
      numeroVidas: this.vidas,
      acertos: this.quantidadeAcertos,
      Chutes: this.letrasChutadas,
      Status: this.estadoGame,
      Resposta: this.MostrarPalavra()
    }
  }
}

module.exports = Forca;
