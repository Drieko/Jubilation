let mostrouMensagem = false;
function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function logar(event){ 
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página

    var pergunta1 = document.getElementById('pergunta1').value;
    pergunta1 = Capitalize(pergunta1);
    var pergunta2 = document.getElementById('pergunta2').value;
    var pergunta3 = document.getElementById('pergunta3').value;
    pergunta3 = Capitalize(pergunta3);
    var pergunta4 = document.getElementById('pergunta4').value;
    pergunta4 = Capitalize(pergunta4);
    var pergunta5 = document.getElementById('pergunta5').value;
    pergunta5 = Capitalize(pergunta5);
    var pergunta6 = document.getElementById('pergunta6').value;
    pergunta6 = Capitalize(pergunta6);

    if (pergunta1 === "1" && pergunta2 === "8" && pergunta3 === "0" && pergunta4 === "4" && pergunta5 === "2" && pergunta6 === "2"){
        window.location.href = "page3.html"; // Redireciona para outra página
    }
    else if(pergunta1 === "Gabriella" && pergunta2 === "2022" && pergunta3 === "Casados" && pergunta4 === "Piquenique" && pergunta5 === "Escola" && pergunta6 === "Infinito"){
        document.querySelector('h1').textContent = 'Eu te amo muito';
        const painel = document.querySelector('.painel');
        const novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = '"Para cada questão, insira um dígito da data em que nosso relacionamento começou."';
        painel.appendChild(novoParagrafo);
        alert('Por favor vá lá para o topo do site');
    }
    else if (pergunta3 !== "Casados"){
        alert('somos Casados viu bb');
    }
    else {
        alert('Errou');
    }
}
