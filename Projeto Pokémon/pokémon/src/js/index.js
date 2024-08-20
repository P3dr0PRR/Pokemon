/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
passo 1 - dar um jeito de pegar o elemento HTML dos botões
passo 2 - dar um jeito de identificar o clique do usuário no botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicado como se estivesse selecionado
passo 5 - esconder a imagem anteriormente selecionada
passo 6 - fazer aparecer a imagem correspondente ao botão clicado
passo 7 - esconder a informação do dragão anteriormente selecionado
passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

//passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoescarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//passo 2 - dar um jeito de identificar o clique do usuário no botão
botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
     //passo 3 - desmarcar o botão selecionado anterior
     const botaoselecionado = document.querySelector(".selecionado");

     botaoselecionado.classList.remove("selecionado")

     //passo 4 - marcar o botão clicado como se estivesse selecionado
    botao.classList.add("selecionado");

    //passo 5 - esconder a imagem anteriormente selecionada
    const imagemativa = document.querySelector(".ativa");
    imagemativa.classList.remove("ativa");

    //passo 6 - fazer aparecer a imagem correspondente ao botão clicado
   imagens[indice].classList.add("ativa");

   //passo 7 - esconder a informação do dragão anteriormente selecionado
   const informacoesativa = document.querySelector(".informacoes.ativa");
   informacoesativa.classList.remove("ativa");

   //passo 8 - mostrar a informação do dragão referente ao botão clicado
   informacoes[indice].classList.add("ativa");


  });
});