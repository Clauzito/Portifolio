const resultado = document.getElementById('resultado');

function imc () { 
    const nome = document.getElementById('nome').value; /* .value: Serve Para pegar o que está dentro das entradas(input).*/
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const calcular = document.getElementById('calcular'); 

if (nome !== '' && altura !== '' && peso !== ''){
        
    const valorIMC = (peso / (altura * altura)).toFixed(1); 
    /* O valorIMC recebe o calculo do (peso / (altura * altura)). 
    .toFixed(1) serve para deixar uma casa depois do ponto 14.1 por exemplo*/

    let classificacao = '';

    if (valorIMC < 18.5 ) {  
        /* (valorIMC) -> isso é uma condição!*/ 
        classificacao = 'abaixo do peso.';
    }
    else if (valorIMC < 25){
        classificacao = 'no peso ideal, Parabéns!!';
    }
        else if (valorIMC < 30) {
        classificacao = 'levemente acima do peso.';
    } else if (valorIMC < 35) {
        classificacao = 'com obesidade grau I.';
    }
        else if (valorIMC < 40) {
        classificacao = 'com obesidade grau II.';
    } else if (valorIMC > 40 ){
         classificacao = 'com obesidade grau III, cuidado!';
    }
        resultado.textContent = ` ${nome} seu IMC é ${valorIMC} e você está ${classificacao}`; /* TextContent pega todo o elemento do html */
    } else {
        resultado.textContent = 'Preencha todos os campos'
    }
}
calcular.addEventListener('click', imc);