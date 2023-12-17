// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

console.log(nama)
var name = 'Sandhika'

// Creation phase ada Global Context
// nama variabel discan lalu undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// exection phase
// Catatan : hoisting melihat semua variabel lalu set ke undifined, dan membaca function (dapat dijalankan lebih dulu) lalu dilakukan exectuion phase



var nama = 'Sandhika'
var umur = 33

console.log(sayHello())

function sayHello(){
    return `Halo, nama saya ${nama}, saya ${umur} tahun.`
}

// Function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

var nama = 'Sandhika Galih'
var username = '@sandhikagalih'

function cetakURL(username){
    var instagramURL = 'https://instagram.com'
    return instagramURL+username
}

console.log(cetakURL(username))