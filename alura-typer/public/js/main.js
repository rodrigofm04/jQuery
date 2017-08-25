const tamanhoFrase = $('.frase').text().split(' ').length;
$('#numero-palavras').text(tamanhoFrase);

const campo = $('#campo');
campo.on('input', () => {
  const conteudo = campo.val();
  $('#contador-palavras').text(conteudo.split(/\S+/).length - 1);
  $('#contador-caracteres').text(conteudo.length);
});
