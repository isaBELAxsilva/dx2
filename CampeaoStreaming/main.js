function teste(){
var texto = document.querySelector("h1");
var texto2 = document.querySelector("h2");
var texto3 = document.querySelector("h3");
var numMusic = 0;
var valor = document.querySelector('#valor').value;

while(numMusic < valor){
    texto.innerHTML = `Numero de musicas${numMusic + 1}`;
    texto2.innerHTML += (`Informe o nome da musica ${numMusic + 1}: <input type="text" placeholder="O nome da musica"> Informe as views: <input type="number" placeholder="Digite o numero de views"> <br>`);
    numMusic++;
    texto3.innerHTML =  `<button onclick="encontrarMaiorNumeroComNome()">qual o maior?</button>`
}        
}



function encontrarMaiorNumeroComNome() {
    var text = document.querySelector('#sim');
    var inputsNome = document.querySelectorAll('input[type="text"]');
    var inputsNumero = document.querySelectorAll('input[type="number"]');
    
    var maiorNumero = -Infinity;
    var nomeMaiorNumero = '';
  
    for (var i = 0; i < inputsNumero.length; i++) {
      var numero = parseFloat(inputsNumero[i].value);
      var nome = inputsNome[i+1].value;
      
      if (!isNaN(numero) && nome) {
        if (numero > maiorNumero) {
          maiorNumero = numero;
          nomeMaiorNumero = nome;
        }
      }
    }
  
    if (maiorNumero !== -Infinity) {
      document.getElementById("sim").innerHTML = "A musica com maior numero de views é " + nomeMaiorNumero + " e possui "  + maiorNumero + " views";
    } else {
        document.getElementById("sim").innerHTML = ('Nenhum número válido encontrado.');
    }
  }