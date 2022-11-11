let y = run(1000, 9999)
let user = prompt('E-mailingizni kiriting')
let password = prompt('Siz uchun xos raqam ' + y)

password == y ? alert('Anonymus oilasiga xush kelibsiz ') : alert(' Sizning bank kartangiz buzib kirildi !!! Kartangizni tekshiring') 



function run(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}