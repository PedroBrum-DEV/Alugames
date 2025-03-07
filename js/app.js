function alterarStatus(id) { 
    // Seleciona o elemento com o ID `game-${id}`
    let gameClicado = document.getElementById(`game-${id}`);
    
    // Verifica se o elemento foi encontrado
    if (gameClicado) {
        let imagem = gameClicado.querySelector('.dashboard__item__img');
        let botao = gameClicado.querySelector('.dashboard__item__button');  // Agora a variável 'botao' é selecionada corretamente

        // Verifica se o elemento de imagem foi encontrado
        if (imagem && botao) {  // Verifica se tanto imagem quanto botao foram encontrados
            // Verifica se a classe 'dashboard__item__img--rented' existe
            if (imagem.classList.contains('dashboard__item__img--rented')) {
                imagem.classList.remove('dashboard__item__img--rented'); 
                botao.classList.remove('dashboard__item__button--return');
                botao.textContent = 'alugar';
            } else {
                imagem.classList.add('dashboard__item__img--rented');
                botao.classList.add('dashboard__item__button--return');
                botao.textContent = 'devolver';
            }
        } else {
            console.log("Imagem ou botão não encontrados dentro do elemento.");
        }
    } else {
        console.log(`Elemento com ID 'game-${id}' não encontrado.`);
    }
}

