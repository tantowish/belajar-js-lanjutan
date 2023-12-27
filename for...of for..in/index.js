// for..of

const mhs = ['Tantowi', 'fadhil', 'erok']

mhs.forEach((element, i) => {
    console.log(`${element} adalah mahasiswa ke-${i+1} `)
});

// mhs.forEach(i => {
//     console.log(i)
// });

// for(const i of mhs){
//     console.log(i)
// }

// String
// const nama = "Tantowi Shah"
// for(const i of nama){
//     console.log(i)
// }

// for (const [i,m] of mhs.entries()){
//     console.log(i, m)
// }

// const liNama = document.querySelectorAll('.nama')
// console.log(liNama)

// liNama.forEach(nama => console.log(nama.textContent))
// console.log(nama)

function jumlahAngka(){
    // return [1,2,3,4,5].reduce((a, i)=>a+i) 
    let jumlahs = 0
    for (a of arguments){
        jumlahs += a
    }
    return jumlahs
}

console.log(jumlahAngka(1,2,3,4))

const mahasiswa = {
    nama: "Tantowi Shah Hanif",
    umur: 33,
    email: "tantows0012gmial.com"
}

for (m in mhs){
    console.log(m)
}