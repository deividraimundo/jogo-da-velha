var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById(elementid = 'jogador-selecionado');
var vencedorSelecionado = document.getElementById(elementid = 'vencedor-selecionado');
var blocos = document.getElementById(classNames = 'blocos');

mudarJogador(valor = 'X');

function escolherQuadrado(id) {

    if (vencedor !== null) {
        return;
    }

    var bloco = document.getElementById(id);
    if (bloco.innerHTML !== '-') {
        return;
    }

    bloco.innerHTML = jogador;
    bloco.style.color = '#000';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor(vencedor);
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var bloco1 = document.getElementById(elementid = 1);
    var bloco2 = document.getElementById(elementid = 2);
    var bloco3 = document.getElementById(elementid = 3);
    var bloco4 = document.getElementById(elementid = 4);
    var bloco5 = document.getElementById(elementid = 5);
    var bloco6 = document.getElementById(elementid = 6);
    var bloco7 = document.getElementById(elementid = 7);
    var bloco8 = document.getElementById(elementid = 8);
    var bloco9 = document.getElementById(elementid = 9);

    if (checaSequencia(bloco1, bloco2, bloco3)) {
        mudaCorBloco(bloco1, bloco2, bloco3);
        mudarVencedor(bloco1);
        return;
    }

    if (checaSequencia(bloco4, bloco5, bloco6)) {
        mudaCorBloco(bloco4, bloco5, bloco6);
        mudarVencedor(bloco4);
        return;
    }

    if (checaSequencia(bloco7, bloco8, bloco9)) {
        mudaCorBloco(bloco7, bloco8, bloco9);
        mudarVencedor(bloco7);
        return;
    }

    if (checaSequencia(bloco4, bloco5, bloco6)) {
        mudaCorBloco(bloco4, bloco5, bloco6);
        mudarVencedor(bloco4);
        return;
    }

    if (checaSequencia(bloco1, bloco5, bloco9)) {
        mudaCorBloco(bloco1, bloco5, bloco9);
        mudarVencedor(bloco1);
        return;
    }

    if (checaSequencia(bloco3, bloco5, bloco7)) {
        mudaCorBloco(bloco3, bloco5, bloco7);
        mudarVencedor(bloco3);
        return;
    }

    if (checaSequencia(bloco1, bloco4, bloco7)) {
        mudaCorBloco(bloco1, bloco4, bloco7);
        mudarVencedor(bloco1);
        return;
    }

    if (checaSequencia(bloco2, bloco5, bloco8)) {
        mudaCorBloco(bloco2, bloco5, bloco8);
        mudarVencedor(bloco2);
        return;
    }

    if (checaSequencia(bloco3, bloco6, bloco9)) {
        mudaCorBloco(bloco3, bloco6, bloco9);
        mudarVencedor(bloco3);
        return;
    }
}

function mudarVencedor(bloco) {
    vencedor = bloco.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorBloco(bloco1, bloco2, bloco3) {
    bloco1.style.backgroundColor = '#0f0';
    bloco2.style.backgroundColor = '#0f0';
    bloco3.style.backgroundColor = '#0f0';
}

function checaSequencia(bloco1, bloco2, bloco3) {
    var eigual = false;

    if (bloco1.innerHTML !== '-' && bloco1.innerHTML === bloco2.innerHTML && bloco2.innerHTML === bloco3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var bloco = document.getElementById(i);
        bloco.style.backgroundColor = '#eee';
        bloco.style.color = '#eee';
        bloco.innerHTML = '-';
    }

    mudarJogador(valor = 'X');
}