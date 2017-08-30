$('#botao-frase').click(trocaFrase);

function trocaFrase() {
    $.get('http://localhost:3000/frases', function (data) {
        console.log('req para trocar frase');
        console.log(data);
        var frase = $('.frase');
        var i = Math.floor(Math.random() * data.length);
        console.log(i);
        frase.text(data[i].texto);
        atualizaTamanhoFrase();
        atualizaTempoInicial(data[i].tempo);
    });
}