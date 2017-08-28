let tempo = $('#tempo-restante').text();
const campo = $('#campo');

function atualizaTamanhoFrase() {
  const frase = $('.frase');
  const tamanhoFrase = frase.text().split(' ').length;
  const numeroPalavras = $('#numero-palavras');
  numeroPalavras.text(tamanhoFrase);
}

function inicializaContadores() {
  campo.on('input', () => {
    const conteudo = campo.val();
    $('#contador-palavras').text(conteudo.split(/\S+/).length - 1);
    $('#contador-caracteres').text(conteudo.length);
  });
}

function inicializaCronometro() {
  campo.on('focus', () => {
    const cronometroID = setInterval(() => {
      console.log(tempo);
      $('#tempo-restante').text(tempo -= 1);
      if (tempo < 1) {
        campo.attr('disabled', true);
        clearInterval(cronometroID);
      }
    }, 1000);
  });
}

function reiniciaJogo() {
  campo.attr('disabled', false);
  campo.val('');
  $('#tempo-restante').text('9');
  tempo = $('#tempo-restante').text();
  $('#contador-palavras').text('0');
  $('#contador-caracteres').text('0');
}

$(document).ready(() => {
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  $('#botao-reiniciar').on('click', reiniciaJogo);
});
