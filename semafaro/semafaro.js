// Selecionando o botão e a luz vermelha.
var botaoVermelho = document.querySelector('.redbtnlight');
var luzVermelha = document.querySelector('.red-light');

// Selecionando o botão e a luz amarela.
var luzAmarela = document.querySelector('.yellow-light');
var botaoAmarelo = document.querySelector('.yellowbtnlight');

// Selecionando o botão e a luz verde.
var botaoVerde = document.querySelector('.greenbtnlight');
var luzVerde = document.querySelector('.green-light');

// Selecionando o botão automatico
var botaoAutomatico = document.querySelector('.automatic');

// Definindo a função que acende a luz vermelha.
function acenderVermelho() {
  desligarTodasAsLuze();
  luzVermelha.style.opacity = 1;
}

function acenderAmarelo() {
  desligarTodasAsLuze();
  luzAmarela.style.opacity = 1;
}

function acenderVerde() {
  desligarTodasAsLuze();
  luzVerde.style.opacity = 1;
}

function desligarTodasAsLuze() {
  luzVermelha.style.opacity = 0.2;
  luzAmarela.style.opacity = 0.2;
  luzVerde.style.opacity = 0.2;
}

function acenderTodos() {
  var tempoVermelho = setInterval(acenderVermelho, 2000); // Acender Luz Vermelha Automatico.
  var tempoAmarelo = setInterval(acenderAmarelo, 4000);
  var tempoVerde = setInterval(acenderVerde, 6000);
}

// Adicionando o evento de clique ao botão
botaoAmarelo.addEventListener('click', acenderAmarelo);
botaoVerde.addEventListener('click', acenderVerde);
botaoVermelho.addEventListener('click', acenderVermelho);
botaoAutomatico.addEventListener('click', acenderTodos);
