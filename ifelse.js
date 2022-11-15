// // let username = "utkuablak"
// // let password = "1234"

// // if(username == "utkuablak"){
// //     if(password == "1234"){
// //         console.log("Giriş Başarılı.")
// //     }else{
// //         console.log("Kullanıcı Adı veya Parola yanlış. Tekrar deneyiniz!")
// //     }
// // }else{
// //     console.log("Kullanıcı Adı veya Parola yanlış. Tekrar deneyiniz!")
// // }

// var yas = 20;
// var mezuniyet = "üniversite"
// if ((yas >= 18) && (mezuniyet == "lise" || mezuniyet == "üniversite")) {
//     console.log("Ehliyet alabilirsiniz.")
// }else{
//     console.log("Ehliyet şartları karşılanmamaktadır.")
// }


// Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.

// var sayi = 60;

// if((sayi <=50) && (sayi >= 10) ){
//     console.log("Seçtiğiniz sayı 10 ve 50 arasındadır.")
// }else{
//     console.log("Seçtiğiniz sayı 10 ve 50 dışındadır.")
// }

// Bir sayının pozitif tek  olup olmadığını kontrol edelim

// let sayi1 = -21;

// if(Math.abs(sayi1 %2) == 1 && sayi1 > 0){
//     console.log("Sayı pozitif tek sayıdır.")
// }else{
//     console.log("Sayı pozitif tek sayı değildir.")
// }


// x , y , z sayılarının büyüklük karşılaştırmasını yapalım

// let x = 50;
// let y = 50;
// let z = 51;

// if(x > y && x > z){
//     console.log("X en büyük")
// } else if(z > y && z > x){
//     console.log("z en büyük")
// }else if(y > x && y > z){
//     console.log("y en büyük")
// }else{
//     console.log("Sayılar eşittir.")
// }

let vize1 = 50;
let vize2 = 60;
let final = 50;

let ortalama = ((vize1 + vize2) / 2) *0.4 + final*0.6;

console.log("ortalamanız :" + " " + ortalama)
if(ortalama >= 50){
   console.log("Geçtiniz")
}else{
   console.log("Başaramadınız.")
}