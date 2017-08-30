$('#botao-frase').click(trocaFrase);
$('#botao-frase-id').click(buscaFrase);

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

function buscaFrase() {
    $('#spinner').show();
    var fraseId = $('#frase-id').val();
    var parametro = {
        id : fraseId
    };
    $.get('http://localhost:3000/frases', parametro, trocaFrase)
    .fail(function () {
        $('#erro').toggle();
        setTimeout(function () { //toggle o comportamento em 2s
            $('#erro').toggle();
        }, 2000);
    })
    .always(function () {
        $('#spinner').toggle();
    });

    console.log('buscando frase');
}

function trocaFrase(data) {
    
        console.log(data);
    
        var frase = $(".frase");
        frase.text(data.texto); //cuidado, texto com "o" no final 
        atualizaTamanhoFrase();
        atualizaTempoInicial(data.tempo);
    }