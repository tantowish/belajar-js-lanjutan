// function halo(nama){
//     alert(`Halo, ${nama}`)
// }

function tampilkanPesan(callback){
    const nama = prompt('Masukkan Nama : ')
    callback(nama)
}

tampilkanPesan((nama)=>{
    alert(`Halo, ${nama}`)
})

const mhs = [
    {
        "nama": "Tantowi Shah Hanif",
        "nrp":"03423121",
        "email":"tantows001@gmail.com",
        "jurusan":"TRPL",
        "idDosenWali":1
    },
    {
        "nama": "Billy Lats",
        "nrp":"123412412",
        "email":"billielsda@gmail.com",
        "jurusan":"TRI",
        "idDosenWali":2
    },
    {
        "nama": "Sayikoji",
        "nrp":"134453121",
        "email":"sayurkoji@gmail.com",
        "jurusan":"TRPL",
        "idDosenWali":2
    },
    {
        "nama": "Fadhillah",
        "nrp":"349922",
        "email":"fadhillah@gmail.com",
        "jurusan":"TRPL",
        "idDosenWali":1
    }
]

console.log("mulai")
mhs.forEach(m => {
    for(let i=0; i<10000000;i++){
        let date = new Date()
    }
    console.log(m.nama)
})
console.log("selesai")