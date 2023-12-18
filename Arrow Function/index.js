const tampilNama = (nama) => {
    return `Halo ${nama}`
}

console.log(tampilNama('Tantowi'))


let mahasiswa = ['Tantowi', 'Sandhika']

// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length
// })
// console.log(jumlahHuruf)

// let jumlahHuruf = mahasiswa.map(nama => nama.length)
// console.log(jumlahHuruf)

let jumlahHuruf = mahasiswa.map(nama=>({ nama: nama, jmlHuruf: nama.length }))
console.log(jumlahHuruf)