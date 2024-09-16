function fuja(){
    var botaoNao = document.getElementById("nao");

    // pra ver o tamanho da janela
    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - botaoNao.offsetWidth;
    var maxY = alturaJanela - botaoNao.offsetHeight;

    // floor vai arredontar o valor
    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    // o style é pra manipular o css px seria pra concatenar e fazer virar pixel
    // left seria pra mudar a esquerda 
    botaoNao.style.left = aleatorioX + "px";
    // top seria o topo duh 
    botaoNao.style.top = aleatorioY + "px";
}

function parabens(){
    alert("Feliz aniversário amor, parábens por ser incrivel sempre <3  \nEu te amo muito <3")
}