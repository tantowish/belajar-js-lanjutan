const coba = ['satu','dua','tiga']
const [a,b,c] = coba
console.log(a)
console.log(b)
console.log(c)

const mhs = {
    nama:"Tantowi",
    umur:33,
    email:'Tantows001@gmail.com'
}

const {nama,umur,email} = mhs
console.log(nama)
console.log(umur)
console.log(email)

function test(){
    return [1,2]
}

const [nilai1,nilai2] = test()
console.log(nilai2)

const [value1, ...values] = [1,2,3]
console.log(value1)
console.log(values)


// Alia
const {nama:n, umur:u, e="sadjsakk@gmail.com"}=mhs
console.log(n)
console.log(u)

const mahasiswa = {
    id : 21213,
    nama: "Tantowi Shah Hanbif",
    umur:33,
    email: "jsalkdj@gmail.com"
}

function getIdMahasiswa({id}){
    return id
}

console.log(getIdMahasiswa(mahasiswa))