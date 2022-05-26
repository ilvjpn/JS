console.log("Hello JavaScript");

document.write("Hello JavaScript");

console.log("JavaScript Javadan kolay dildir. ");

// Kullaniciya hata yaptigini bildirmek icin

console.error("Bu bir hatadir");

console.warn("Bu bir uyaridir");

//?? alert("Dikkat");

//**========= Degisken Tanimlama **=========
// !! VAR keyword ile degisken tanimlanabilr. Ancak modern JS Var keyword'unun kullanimi azaldi cunku global bir degisken olarak dusunuluyor.

var pi = 3.14;

console.log(pi);
console.log(typeof pi);

pi = "3";
console.log(pi);
console.log(typeof pi);

pi = true;
console.log(pi);
console.log(typeof pi);

isim = "Ahmet";
console.log(isim);
console.log(typeof isim);

isim = 4;
console.log(isim);
console.log(typeof isim);

//*========CONST===========

//? const ve Let kullanmak daha iyi
// * CONST: Sadece baslangicta deger atilabilir.(Non-primitive haric) Sonradan deger degistirilmez.

const piSayisi = 3.14;
console.log(piSayisi);

console.log();
// ! piSayisi = 3; Burada deger atama olmaz. Basina tekrarda pisayisi yerine yeni deger atamaliyiz yazmamiz gerek.

//*======== LET ===========

//! Egerki degiskenizmizin degerinin degismesi gerekiyor ise const kullanmayiz. Bunun yerine LET kullanbiliriz

//* LET ve CONST block-scope bir degiskendir. VAR ise global-scope bir tanimlamadadir.
//? block scope: sadece tanimli oldugu yerde gecerlidir.local degisken
//?

let fiyat;
console.log(fiyat);

fiyat = 50.5;
console.log(fiyat);
console.log(typeof fiyat);

let isim1 = "Mustafa";
let isim2 = "muhammed";
let isim3 = `murat`;
console.log(isim2);

const dil = null;
console.log(dil);
console.log(typeof dil);

const sucuk = 40;
const sakiz = 30;
const kola = 20;

let toplam = sucuk + sakiz + kola;
//* yukaridaki CONST olsa asagidaki degerler olmazdi
toplam++;
toplam += 50;
console.log(toplam);
//* birden fazla degisken yazdirmak icin
console.log(toplam, kola);

//* Sabit ifade yazmak icin
console.log("Toplam Fiyat: ", toplam);

const ad = "can";
const soyad = "canan";
console.log(ad + soyad);
console.log(ad, soyad);

const sayi1 = 5,
  sayi2 = "7";
console.log(sayi1 + sayi2);

const ad1 = "muhammed";
const yas = 30;

console.log(`ismi: ${ad1}'dir.
 yasi: ${yas}'dur`);
console.log("ismi: " + ad1, "yasi: " + yas);

const taban = 3.14;
const us = 2;

const result = taban ** us;
console.log(result);

//! artirma azaltma yapacaksak CONST kullanilmaz.

// MOD Alma

const a = 654;
const birler = a % 10;
console.log(`Birler Basamagi= ${birler} `);
const onlar = Math.floor(a / 10) % 10;
console.log(`Onlar Basamagi= ${onlar} `);
console.log(`Yuzler Basamagi= ${Math.floor(a / 100) % 10} `);

const number = 100;
const number2 = "100";

console.log(number == number2);
console.log(number === number2);
console.log(number != number2);
console.log(number !== number2);

console.log(typeof number, typeof number2);
