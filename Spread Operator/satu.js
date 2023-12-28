const mhs = ['Sandhika', 'Doddy', 'Erik']
const dosen = ['Ade', 'Hendra', 'Wanda']

const orang = [...mhs,'Aji', ...dosen]
// const orang = mhs.concat(dosen)

console.log(orang)

// const mhs1 = mhs
const mhs1 = [...mhs]
mhs1[0] = 'Fajar'
console.log(mhs1)

const liMhs = document.querySelectorAll('li')
console.log(liMhs)
// const mahasiswa = [...liMhs]
const mahasiswa = [...liMhs].map(m => m.textContent)
console.log(mahasiswa)


const nama = document.querySelector('.nama')
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')
nama.innerHTML = huruf