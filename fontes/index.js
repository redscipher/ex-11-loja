// == funcoes
let incializaJQuery = function(){
    try {
        // valida se inicializou
        console.log($(document));

        // funcoes jquery
        let executaCliqueAnimacao = function(){
            try {
                //exibe mensagem sucesso
                console.log('voce clicou');
                //variaveis
                let itemClicado, destino
                // busca o h3 mais proximo do item clicado
                itemClicado = $(this).closest('li h3').text();
                //verifica item clicado + define destino
                if (itemClicado == 'Sobre a loja'){
                    destino = $('#idLstItemSobreLoja');
                }else{
                    destino = $('#idLstItemProdutos');
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
        $('#idLstCab').on('click', 'li h3', executaCliqueAnimacao);
        // adicao ao carrinho
        $('button').on('click', function(e){alert('Produto adicionado ao carrinho');});
    } catch (error) {
        console.log(error.message);
    }
}

//executa jquery
$(document).ready(incializaJQuery);