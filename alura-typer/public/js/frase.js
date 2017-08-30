$('#botao-frase').click(trocaFrase);

function trocaFrase() {
    $('#spinner').show();
    $.get('http://localhost:3000/frases', trocaFraseAleatoria)
    .fail(function () {
        $('#erro').toggle();
        setTimeout(function () { //toggle o comportamento em 2s
            $('#erro').toggle();
        }, 2000);
    })
    .always(function () {
        $('#spinner').toggle();
    });
}

function trocaFraseAleatoria(data) {
    var frase = $('.frase');
    var i = Math.floor(Math.random() * data.length);
    frase.text(data[i].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[i].tempo);
}