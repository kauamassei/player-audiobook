const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nmCap = document.getElementById('capitulo')
const audioCapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let taTocando = 0;
let capAtual = 1

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill')

}
function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill')
}

function tocarOuPausar() {
    if( taTocando === 0 ) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa() {
    nmCap.innerText = 'Capítulo ' + capAtual;
}

function proximaFaixa() {
    if (capAtual === numeroCapitulos) {
        capAtual = 1;
    } else {

        capAtual = capAtual + 1
    }

    audioCapitulo.src = './src/books/dom-casmurro/' + capAtual + '.mp3'
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

function voltarFaixa() {
    if (capAtual === 1) {
        capAtual = numeroCapitulos;
    } else {

        capAtual = capAtual - 1
    }

    audioCapitulo.src = './src/books/dom-casmurro/' + capAtual + '.mp3'
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);