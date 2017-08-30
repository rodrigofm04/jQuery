var tempoInicial = $('#tempo-digitacao').text();
var campo = $('#campo');

$(document).ready(() => {
  $('#botao-reiniciar').attr('disabled', true);
  atualizaTamanhoFrase();
  iniciaContadores();
  iniciaCronometro();
  iniciaMarcadores();
  $('#botao-reiniciar').on('click', reiniciaJogo);
});

function atualizaTamanhoFrase() {
  var frase = $('.frase').text();
  const tamanhoFrase = frase.split(' ').length;
  const numeroPalavras = $('#tamanho-frase');
  numeroPalavras.text(tamanhoFrase);
}

function atualizaTempoInicial(tempo) {
  tempoInicial = tempo;
  $("#tempo-digitacao").text(tempo);
}

function iniciaContadores() {
  campo.on('input', () => {
    const conteudo = campo.val();
    $('#contador-palavras').text(conteudo.split(/\S+/).length - 1);
    $('#contador-caracteres').text(conteudo.length);
  });
}

function iniciaCronometro() {
  campo.one('focus', function() {
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

function iniciaMarcadores() {
  campo.on('input', function() {
    var frase = $('.frase').text();
    var digitado = campo.val();
    var correto = frase.startsWith(digitado);
    campo.toggleClass('borda-verde', correto);
    campo.toggleClass('borda-vermelha', !correto);
  });
}

function finalizaJogo() {
  campo.attr('disabled', true);
  campo.toggleClass('campo-desativado');
  $('#botao-reiniciar').attr('disabled', false);
  inserePlacar();
}

 function reiniciaJogo() {
  $('#botao-reiniciar').attr('disabled', true);
   campo.attr('disabled',false);
   campo.val('');
   $('#nome-usuario').val('');
   $('#contador-palavras').text('0');
   $('#contador-caracteres').text('0');
   $('#tempo-digitacao').text(tempoInicial);
   iniciaCronometro();
   campo.removeClass('campo-desativado');
   campo.removeClass('borda-vermelha');
   campo.removeClass('borda-verde');
 }
