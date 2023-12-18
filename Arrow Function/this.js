//  const Mahasiswa = function(){
//     this.nama = 'Tantowi'
//     this.umur = 20
//     this.sayHello = function(){
//         console.log(`Halo nama saya ${this.nama} dan saya ${this.umur} tahun.`)
//     }
//  }

//  const tanto = new Mahasiswa()
//  tanto.sayHello()

// const Mahasiswa = function() {
//     this.nama = 'Tantowi'
//     this.umur = 20
//     this.sayHello = () => {
//         console.log(`Halo nama saya ${this.nama} dan saya ${this.umur} tahun.`)
//     }
//  }

//  const tanto = new Mahasiswa()
//  tanto.sayHello()


//  Object Literal
// const mhs1 = {
//     nama: "Tantowi Shah Hanif",
//     umur: 20,
//     sayHello: ()=> {
//         console.log(`Halo nama saya ${this.nama} dan saya ${this.umur} tahun.`)
//     }
// }

// mhs1.sayHello()


// const Mahasiswa = function() {
//     this.nama = 'Tantowi'
//     this.umur = 20
//     this.sayHello = () => {
//         console.log(`Halo nama saya ${this.nama} dan saya ${this.umur} tahun.`)
//     }

//     setInterval(()=>{
//         console.log(this.umur++)
//     },500)
//  }

//  const tanto = new Mahasiswa()
//  tanto.sayHello()

const box = document.querySelector('.box')
box.addEventListener('click', function(){
    let satu = 'size'
    let dua = 'caption'
    console.log("masuk")
    if(this.classList.contains(satu)){
        [satu,dua]=[dua,satu]
    }

    this.classList.toggle(satu)
    
    setTimeout(()=>{
        this.classList.toggle(dua)
    },600)
})