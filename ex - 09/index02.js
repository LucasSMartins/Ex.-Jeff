const vetor1 = [1, 2, 4, 5, 8, 9]
const vetor2 = [3, 6, 7, 11, 15]
let vetorFinal = []
let a = 0
let l = 0
const valorInformado = 2

function True_OR_False(valor) {
      if (vetor1.indexOf(valor) != -1) {return true
      } else return false
}

if (True_OR_False(valorInformado)) {
      for (let i = 0; i <= vetor1.length + vetor2.length; i++){
      vetorFinal[i] = vetor1[l]
      l++
      if (vetorFinal[i] == valorInformado) {
            i++
            for (i; i <= vetor2.length + 1; i++) {
                  vetorFinal[i] = vetor2[a]
                  a++
            }
      }}
} else {
      for (let i = 0; i < vetor1.length; i++) {
            vetorFinal[i] = vetor1[i]
      }
}

console.log(vetorFinal)