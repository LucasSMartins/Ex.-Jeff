const vetor1 = [1, 2, 4, 5, 8, 9]
const vetor2 = [3, 6, 7, 11, 15]
const valorInformado = 5

if (valorInformado in vetor1) {
      let idx = vetor1.indexOf(valorInformado) + 1
      vetor1.splice(idx, 0, ...vetor2)
      console.log(vetor1)
} else console.log(vetor1)