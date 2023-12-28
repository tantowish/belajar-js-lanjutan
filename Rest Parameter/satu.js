// function myFunc(a,b, ...myArgs){
//     return `a = ${a}, b = ${b}, myArgs = ${myArgs}`
// }

// console.log(myFunc(1,2,3,4,5))

function calculate(...angka){
    // let total = 0
    // for (const a of angka){
    //     total+=a
    // }
    // return total

    return angka.reduce((a,b)=>a+b)
}

console.log(calculate(1,2,3,4,5))

// Array destructuring
const kelompok1 = ['Tantowi', "Supraiadi", "Lol", "Sahid"]
const [ketua, wakil, ...anggota] = kelompok1
console.log(ketua)
console.log(wakil)
console.log(anggota)

const team = {
    pm: 'Tarskuy',
    frontEnd1: 'Naufal',
    frontEnd2: 'Angel',
    backEnd: 'Tantowi',
    uiux:'Shyra',
    devOps: 'Faadhil'
}

const {pm, ...myTeam} = team
console.log(myTeam)


function filterBy(type, ...values){
    return values.filter(v => typeof v === type)
}

console.log(filterBy('boolean',1,2,'Tantowi', false, 10, true, 'doddy'))