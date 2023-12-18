const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

const sumAngka = angka.reduce((accumulator, currentValue)=>accumulator+currentValue,0) 

console.log(sumAngka)