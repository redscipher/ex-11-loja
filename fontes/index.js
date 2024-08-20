//executa jquery
$(document).ready(()=>{
    // valida se inicializou
    console.log($(document));

    // funcoes jquery
    let executaCliqueAnimacao = function(e){
        try {
            //exibe mensagem sucesso
            e.preventDefault();
            console.log('voce clicou');
            //variaveis
            let itemClicado, destino
            // busca o h3 mais proximo do item clicado
            itemClicado = $(this).closest('li a').text();
            //verifica item clicado + define destino
            if (itemClicado == 'Sobre a loja'){
                destino = $('#idScSobreLoja');
            }else{
                destino = $('#idScProdutos');
            }
            // exibe destino
            console.log(destino);
            // executa animacao, em 1 segundo = 1000 milisegundos
            $('html').animate({
                //offset: local do objeto final
                scrollTop: destino.offset().top
            }, 1000);
        } catch (error) {
            console.log(error.message);
        }
    }

    // eventos
    $('#idLstCab').on('click', 'li a', executaCliqueAnimacao);
    // adicao ao carrinho
    $('button').on('click', (e)=>{alert('Produto adicionado ao carrinho')});
});