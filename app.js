const container = document.querySelector('.container');

function viraCartao(cartao) {
    cartao.querySelector('.cartao__conteudo').classList.toggle('active');
    cartao.querySelector('.cartao__conteudo__pergunta').style.transform = "rotateY(180deg)";
    cartao.querySelector('.cartao__conteudo__resposta').style.transform = "rotateY(0deg)";
}

perguntas.forEach(pergunta => {
    const cartao = document.createElement('div');
    cartao.classList.add('cartao');

    cartao.innerHTML = `
        <div class="cartao__conteudo cartao__conteudo__pergunta" style="${pergunta.background ? `background: ${pergunta.background}; background-size: cover; transform: rotate(-90deg);` : ''}">
            <h3>${pergunta.pergunta}</h3>
        </div>
        <div class="cartao__conteudo cartao__conteudo__resposta">
            <p>${pergunta.resposta}</p>
        </div>
    `;

    cartao.addEventListener('click', () => viraCartao(cartao));
    container.appendChild(cartao);
});
