function penjumlahanPerkalian(a,b){
    return [a+b, a*b]
}

const [penjumlahan, perkalian] = penjumlahanPerkalian(2,4)
console.log(penjumlahan)
console.log(perkalian)

function kalkulasi(a,b){
    return {
        tambah: a+b,
        kurang: a-b,
        kali: a*b,
        bagi: a/b
    }
}

const {tambah, kurang, kali, bagi="tidak ada"} = kalkulasi(6,8)
console.log(bagi)

const mhs = {
    nama: 'Tantowi Shah',
    umur: 33,
    email: 'tantows001@gmail.com',
    nilai: {
        uts: 70,
        uas:90,
    }
}

function cetakMhs({nama,umur, nilai:{uts,uas}}){
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`
}

console.log(cetakMhs(mhs))