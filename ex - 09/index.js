
const vetor1 = [1, 2, 4, 5, 8, 9]
const vetor2 = [3, 6, 7, 11, 15]
let vetorFinal = []
const valorInformado = 2


vetor1.includes(valorInformado) ? existeValorInformado() : naoExisteValorInformado()

function existeValorInformado() {
      const indiceDoValorInformado = vetor1.indexOf(valorInformado)
      vetor2.forEach((elemento, idx) => {
           vetorFinal = vetor1.splice(indiceDoValorInformado + (idx + 1), 0, elemento)      
      })     
      console.log(vetor1)
}

function naoExisteValorInformado() {
      vetorFinal = vetor1.concat(vetor2)
      console.log(vetorFinal)
}