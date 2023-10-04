function CampeaStreaming(){
    var texto = document.querySelector("h1");
    var bruh = document.querySelector("h2");
    var numMusic = 0;
    var valor = document.querySelector('#valor').value;

    while(numMusic < valor){
        texto.innerHTML = `Numero de musicas ${numMusic + 1}`
        bruh.innerHTML += `musga numero ${numMusic + 1} <input type="number"> <br>`
        numMusic++;
    }
}