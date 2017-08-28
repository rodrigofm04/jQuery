const tempoInicial = $('#tempo-digitacao').text();
const campo = $('#campo');
var frase = $('.frase').text();

function iniciaMarcadores() {
  campo.on('input', function() {
    var digitado = campo.val();
    var correto = frase.startsWith(digitado);
    campo.toggleClass('borda-verde', correto);
    campo.toggleClass('borda-vermelha', !correto);
  });
}

function atualizaTamanhoFrase() {
  const tamanhoFrase = frase.split(' ').length;
  const numeroPalavras = $('#numero-palavras');
  numeroPalavras.text(tamanhoFrase);
}

function iniciaContadores() {
  campo.on('input', () => {
    const conteudo = campo.val();
    $('#contador-palavras').text(conteudo.split(/\S+/).length - 1);
    $('#contador-caracteres').text(conteudo.length);
  });
}

function iniciaCronometro() {
  
  campo.on('focus', function() {
    var tempoRestante = tempoInicial;
    var cronometroID = setInterval(function() {
        tempoRestante--;
        $('#tempo-digitacao').text(tempoRestante);
        if (tempoRestante < 1) {
            clearInterval(cronometroID);
            finalizaJogo();
        }
    }, 1000);
  });
}

function finalizaJogo() {
  campo.attr('disabled', true);
  campo.toggleClass('campo-desativado');
  $('#botao-reiniciar').attr('disabled', false);
  inserePlacar();
}

 function reiniciaJogo(){
  $('#botao-reiniciar').attr('disabled', true);
   campo.attr('disabled',false);
   campo.val('');
   $('#contador-palavras').text('0');
   $('#contador-caracteres').text('0');
   $('#tempo-digitacao').text(tempoInicial);
   iniciaCronometro();
   campo.toggleClass('campo-desativado');
   campo.removeClass('borda-vermelha');
   campo.removeClass('borda-verde');
 }

$(document).ready(() => {
  $('#botao-reiniciar').attr('disabled', true);
  atualizaTamanhoFrase();
  iniciaContadores();
  iniciaCronometro();
  iniciaMarcadores();
  $('#botao-reiniciar').on('click', reiniciaJogo);
});
