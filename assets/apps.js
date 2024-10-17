criarCartao(categoria, pergunta, resposta); {
}
function criarCartao(categoria, pergunta, resposta) {
}
function criaCartao(categoria, pergunta, resposta) {
    console.log(categoria, pergunta, resposta);
    }
    let respostaEstaVisivel = false
    function viraCartao () {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toogle( 'active', respostaEstaVisivel)
    }
    cartao.addEventListener( 'click', viraCartao)
