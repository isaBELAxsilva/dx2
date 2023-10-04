function teste(){
var texto = document.querySelector("h1");
var texto2 = document.querySelector("h2");
var texto3 = document.querySelector("h3");
var alunos = 0;
var valor = document.querySelector('#valor').value;

while(alunos < valor){
    texto.innerHTML = `Numero de alunos ${alunos + 1}`;
    texto2.innerHTML += (`Informe o nome dos alunos ${alunos + 1}: <input type="text" placeholder="Nome do aluno"> Informe a nota: <input type="number" placeholder="Digite a nota"> <br>`);
    alunos++;
    texto3.innerHTML =  `<button onclick="encontrarMaiorNotaComNome()">qual o maior?</button>`
}        
}



function encontrarMaiorNotaComNome() {
    var text = document.querySelector('#sim');
    var inputsNome = document.querySelectorAll('input[type="text"]');
    var inputsNota = document.querySelectorAll('input[type="number"]');
    
    var maiorNota = -Infinity;
    var nomeMaiorNota = '';
  
    for (var i = 0; i < inputsNota.length; i++) {
      var nota = parseFloat(inputsNota[i].value);
      var nome = inputsNome[i+1].value;
      
      if (!isNaN(nota) && nome) {
        if (nota > maiorNota) {
          maiorNota = nota;
          nomeMaiorNota = nome;
        }
      }
    }
  
    if (maiorNota !== -Infinity) {
      document.getElementById("sim").innerHTML = "O aluno com maior nota se chama " + nomeMaiorNota + " e tirou nota "  + maiorNota;
    } else {
        document.getElementById("sim").innerHTML = ('Nenhum número válido encontrado.');
    }
  }