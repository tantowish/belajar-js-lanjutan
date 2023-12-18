// Cari angka > 5, hasilnya dikalikan 3, lalu jumlahkan

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

const hasil = angka.filter(a => a>5)
                    .map(a=>a*3)
                    .reduce((sum, current)=>sum+current)

console.log(hasil)