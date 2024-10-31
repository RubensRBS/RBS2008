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
    function criaCartao(categoria, pergunta, resposta) {
        let container = document.getElementById('container')
        let cartao = document.createElement('article')
        cartao.className = 'cartao'
    }

cartao.innerHTML =`<div class="cartao__conteudo__pergunta">
                O que é JavaScript?
             </div>
             <div class="cartao__pergunta__resposta">
                <p>o que é uma linguagem de Programação</p>`
                container.appendChild(cartao)