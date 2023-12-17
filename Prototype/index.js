// Cara untuk membuat Object pada javascript
// 1. Object Literal
let mahasiswa = {
    name: 'Tantowi Shah',
    energy: 10,
    makan: function(portion){
        this.energy+=portion
        console.log(`Halo ${this.name}, Selamat makan`)
    }
}

// 2. Function declaration
const methodMahasiswa = {
    makan :  function(portion){
        this.energy+=portion
        console.log(`Halo ${this.name}, Selamat makan`)
    },
    main :  function(jam){
        this.energy-=jam
        console.log(`Halo ${this.name}, Selamat bermain`)
    },
    tidur :  function(jam){
        this.energy+=jam*2
        console.log(`Halo ${this.name}, Selamat Tidur`)
    }
}

// function Mahasiswa(name,energy){
//     let mahasiswa = Object.create(methodMahasiswa)
//     mahasiswa.name = name
//     mahasiswa.energy = energy
//     // mahasiswa.makan = methodMahasiswa.makan
//     // mahasiswa.main = methodMahasiswa.main

//     return mahasiswa
// }

// let tanto = Mahasiswa('Tantowi', 20)


// 3. Constructor Function
// Keyword new

function Student(name,energy){
    this.name = name
    this.energy = energy

    this.makan = function(portion){
        this.energy+=portion
        console.log(`Halo ${this.name}, Selamat makan`)
    }
    this.main = function(jam){
        this.energy-=portion
        console.log(`Halo ${this.name}, Selamat bermain`)
    }

}

let shyra = new Student('Shyra', 14)

// Prototype 
function Mahasiswa(name,energy){
    this.name = name
    this.energy = energy
}

Mahasiswa.prototype.makan = function(portion){
    this.energy += portion;
    return `Halo ${this.name}, selamat makan!`
}

Mahasiswa.prototype.main = function(jam){
    this.energy-=jam
    return `Halo ${this.name}, selamat bermain!`

}
Mahasiswa.prototype.tidur = function(jam){
    this.energy+=jam*2
    return `Halo ${this.name}, selamat tidur!`

} 

let sandhika = new Mahasiswa('Sandhika', 10)

// Versi kelas
class Mahasiswa{
    constructor(name, energy){
        this.name = name;
        this.energi = energy
    }
    makan(portion){
        this.energy += portion;
        return `Halo ${this.name}, selamat makan!`
    }
    main(jam){
        this.energy-=jam
        return `Halo ${this.name}, selamat bermain!`
    }
    tidur(jam){
        this.energy+=jam*2
        return `Halo ${this.name}, selamat tidur!`
    }
}
