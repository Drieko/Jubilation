function logar(){
    var pergunta1 = document.getElementById('pergunta1').value;
    var pergunta2 = document.getElementById('pergunta2').value;

    if(pergunta1 === "resposta1" && pergunta2 === "resposta2"){
        alert('Sucesso')
    }
    else{
        alert('Errou')
    }
}