CONST burada olmaz

for (let i = 1; i < 11; i++) {
  console.log(`${i}- Merhaba`);
  console.log("merhaba");
}

const sayi = prompt("sayi giriniz");
for (let i = 1; i < sayi; i++) {
  console.log(`${i} - sanane`);
}

const sayi2 = +prompt("sayi giriniz");

let asal = true;
for (let i = 1; i < sayi2; i++) {
  if (sayi2 % i == 0) {
    asal = false;
    break;
  }

  asal = true;
}

const sonuc = asal ? "asal" : "asal degil";
console.log(sonuc);

let i;
i = +prompt("not giriniz lutfen");
while (i < 0 || i > 100) {
  console.log("1-100 arasinda not giriniz");
  i = +prompt("1-100 arasinda not giriniz");
}
console.log("dogru not girdiniz");

let not1;
let i1 = 1;
while (true) {
  not1 = prompt(i1 + ". kisinin notunu giriniz");

  not1 = not1.toLowerCase();

  if (not1 == "q") {
    break;
  }
  i1++;

  console.log(not1);
}





