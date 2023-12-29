// async Callback
function getDataMahasiswa(url, succes, error){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                succes(xhr.response)
            }
            else if(xhr.status === 404){
                error()
            }
        }
    }

    xhr.open('get', url)
    xhr.send()
}

console.log('mulai')
getDataMahasiswa('data/mahasiswa.json', 
                (response)=>{
                    const mhs = JSON.parse(response)
                    mhs.forEach(m => {
                        console.log(m.nama)
                    });
                }, 
                ()=>{
                    console.log()
                })
console.log('selesai')