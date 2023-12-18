// ambil semua elemen video
// pilih hanya yang "JAVASCRIPT LANJUTAN"

const videos = Array.from(document.querySelectorAll('[data-duration]'))

let count = 0
const filtered = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
                        .map(item => {
                            count++
                            return item.dataset.duration
                        })
                        .map(waktu => {
                            const parts = waktu.split(':')
                            return parseInt(parts[0])*60 + parseInt(parts[1])
                        })
                        .reduce((acc, curr)=>
                            acc+curr
                        )
console.log(filtered)

const durationTotal = Math.floor(filtered/3600).toString()+":"+ Math.floor(filtered%3600/60)+":"+Math.floor(filtered%3600%60/60)
                        
console.log(durationTotal)

const jumlahVideo = document.querySelector('.jumlah-video')
jumlahVideo.innerHTML = count
const totalDurasi = document.querySelector('.total-durasi')
totalDurasi.innerHTML = durationTotal
