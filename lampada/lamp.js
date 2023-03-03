/* Aqui são as variáveis pegando todas as ID's.*/
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lampada = document.getElementById('lampada');

function isLampBroken () {
    return lampada.src.indexOf ('quebrada') > -1 
    /* essa função verifica se a lampada está quebrada!
    o indexOf (' quebrada ') verifica se a lamp esta quebrada.*/
}

function lampOn () {
    if ( !isLampBroken ()) {
        lampada.src = './imglamp/ligada.png';
        /* !isLampBroken quer dizer: Se a lampada não estiver quebrada, pode LIGAR. */
    }
}   
function lampOff () {
    if ( !isLampBroken ()) { 
        lampada.src = './imglamp/desligada.png';
        /* !isLampBroken quer dizer: Se a lampada não estiver quebrada, pode DESLIGAR.*/
}
}
function lampBroken (){
    lampada.src = './imglamp/quebrada.png';
}


/* Aqui em baixo são as chamadas de para o botão ouvir o click, e em sequida
é feita a criação das funções! */
turnOn.addEventListener('click', lampOn );
turnOff.addEventListener('click', lampOff );
lampada.addEventListener('mouseover', lampOn);
lampada.addEventListener('mouseleave', lampOff);
lampada.addEventListener('dblclick', lampBroken );
