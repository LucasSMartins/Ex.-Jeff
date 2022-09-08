for (let i = 0; i <= vetor1.length + vetor2.length; i++){
      if (vetor1[i] == valorInformado) {
            for (i; i <= vetor2.length; i++) {
                  vetorFinal[i] = vetor2[a]
                  console.log(`${i} ${vetorFinal}`)
                  // console.log(`${a} igual "A"`)
                  a++
            }
      } else if (vetor1[i] != valorInformado) {
            vetorFinal[i] = vetor1[l]
            l++
            console.log(`${i} ${vetorFinal}`)
      }
}




for (let i = 0; i <= vetor1.length + vetor2.length; i++){
      vetorFinal[i] = vetor1[i]
      if (vetorFinal[i] == valorInformado) {
            i++
            for (i; i <= vetor2.length + 1; i++) {
                  vetorFinal[i] = vetor2[a]
                  a++
            }
      }
}