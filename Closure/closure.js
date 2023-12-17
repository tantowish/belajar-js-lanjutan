function init(){
    // let nama = 'Tantowi'
    return function (nama) { 
        console.log(nama)
    }
    // return tampilNama
}
let panggilNama = init()
panggilNama('Tantowi')