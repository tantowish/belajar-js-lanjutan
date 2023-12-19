// const mhs = {
//     nama: 'Tantowi Shah Hanif',
//     umur: 20,
//     nrp: '502562',
//     email: 'tantows001@gmail.com'
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`

// looping

// const mhs = [
//     {
//         nama: "Tantowi Shah",
//         email: "tantows001@gmail.com"
//     },
//     {
//         nama: "Surya Alaudin",
//         email: "suryaalaudin@gmail.com"
//     },
//     {
//         nama: "Tantowi Shah",
//         email: "suryaalaudin@gmail.com"
//     },
// ]

// const el = `<div class="mhs">
//     ${mhs.map(mhs => `<ul>
//             <li>${mhs.nama}</li>
//             <li>${mhs.email}</li>
//         </ul>`).join('')}
// </div>`

// Conditional
// const lagu = {
//     judul: 'Tetap Dalam Jiwa',
//     penyanyi: 'Isyana Sarasvati',
//     feat:'yay'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.penyanyi} ${lagu.feat? `feat. ${lagu.feat}`:''}</li>
//     </ul>
// </div>`

// Nested (HTML Fragments Bersarang)
const  mhs = {
    nama: "Tantowi Shah Hanif",
    semester:5,
    mataKuliah:['Rekayasa Web',"Analisis Desain","OOP","PPW2"]
}

const el = `<div>
    <h2>${mhs.nama}</h2>
    <p>${mhs.semester}</p>
    <p>Mata Kuliah :</p>
    <ul>
        ${mhs.mataKuliah.map(mhs=>`
        <li>${mhs}</li>
        `)}
    </ul>
</div>`

document.body.innerHTML = el