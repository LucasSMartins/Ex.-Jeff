// Exercicio 5

// Escreva um programa que simule um carrinho de um site e retorne o valor final de uma compra.

// A loja tem 3 produtos: Camisa, Bermuda e Boné. O valor dos produtos são 25, 20 e 10.

// O programa da 2 opções ao usuário:
// 1) adicionar produto e
// 2) fechar carrinho.
 
// Quando a opção 1 é selecionada, o usuário poderá escolher 3 opções:
// 1) Camisa ,
// 2) Bermuda  e
// 3) Boné;

// Após a escolha o programa da a opção de 1) adicionar produto e 2) fechar carrinho novamente.
// Caso o usuário feche o carrinho, o programa finaliza retornando o valor total da compra e as quantidades e produtos.

// Exemplo: Usuário adicionou 2 Camisas e 1 Boné; O programa deve retornar:

// 2 Camisas
// 1 Boné
// Total: R$ 60

function adicionarProduto() {
      const DivAdicionarProduto = document.querySelector("#adicionarProduto")
      // DivAdicionarProduto.classList.toggle("esconder")
      if (DivAdicionarProduto.style.display === "none") {
            DivAdicionarProduto.style.display = "block"
      } else {
            DivAdicionarProduto.style.display = "none"
      }
}


function fecharCarrinho() {
      
      const DivFecharCarrinho = document.querySelector("#fecharCarrinho")
      const camisa = Number(document.querySelector("#camisa").value)
      const bermuda = Number(document.querySelector("#bermuda").value)
      const bone = Number(document.querySelector("#bone").value)
      const valorTotalDeCamisas = camisa * 25
      const valorTotalDeBermudas = bermuda * 20
      const valorTotalDeBone = bone * 10
      const totalDosProdutos = valorTotalDeCamisas + valorTotalDeBermudas + valorTotalDeBone

      DivFecharCarrinho.innerHTML = ``
      
      if (camisa != 0) {
            
            DivFecharCarrinho.innerHTML += `${camisa}x Camisas R$${valorTotalDeCamisas.toFixed(2).replace(".",",")}<br>`
      }
      
      if (bermuda != 0) {
            DivFecharCarrinho.innerHTML += `${bermuda}x Bermudas R$${valorTotalDeBermudas.toFixed(2).replace(".",",")}<br>`
      }
      
      if (bone != 0) {
            DivFecharCarrinho.innerHTML += `${bone}x Boné R$${valorTotalDeBone.toFixed(2).replace(".",",")}<br>`
      }

      if (camisa == 0 && bermuda == 0 && bone == 0) {
            DivFecharCarrinho.innerHTML = ``
      } else {
            DivFecharCarrinho.innerHTML += `Total de Produtos R$${totalDosProdutos.toFixed(2).replace(".",",")}<br>`
      }

}