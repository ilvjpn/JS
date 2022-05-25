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
