function kerjakanTugas(matakuliah, selesai){
    console.log(`Mulai mengerjakan tugas ${matakuliah}`)
    selesai();
}

function selesai(){
    alert('Selesai mengerjakan tugas!')
}

function repeat(n, action){
    for (let i = 0; i<n;i++){
        action(i);
    }
}

repeat(10,console.log)
repeat(10,alert)