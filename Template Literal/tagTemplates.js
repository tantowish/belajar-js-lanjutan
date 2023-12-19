const nama = "Tantowi Shah Hanif"
const umur = 20

function highlight(strings, ...values){
    // let result = ''
    // strings.forEach((str, i) => {
    //     result+=`${str}${values[i] || ''}`
    // });
    // return result

    return strings.reduce((acc, str,i)=>{
        return `${acc}${str}<span class="hl">${values[i]||''}</span>`
    },'')
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur}tahun`


document.body.innerHTML = str