const vetor1 = [1, 2, 4, 5, 8, 9]
const vetor2 = [3, 6, 7, 11, 15]
const valorInformado = 8
let vetorFinal = vetor1


if (valorInformado in vetor1) {
      for (let i = 0; i <= vetor1.length + vetor2.length; i++){
            if (vetor1[i] == valorInformado) {
                 i++
                  vetor1[i] = [...vetor2]
            }
      }
      console.log(vetorFinal)
} else console.log(vetorFinal)
