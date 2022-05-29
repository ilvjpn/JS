const sayi = 41;
console.log(String(sayi), sayi);

const s1 = +prompt("sayi1 giriniz");
const islem = prompt("islemi giriniz");
const s2 = +prompt("sayi2 giriniz");
let sonuc;

if (islem == "+") {
  sonuc = s1 + s2;
} else if (islem === "-") {
  sonuc = s1 - s2;
} else if (islem === "/") {
  sonuc = s1 / s2;
} else if (islem == "*") {
  sonuc = s1 * s2;
} else {
  alert("Yanlis islem girdiniz");
}
console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

const age = +prompt("yasinizi giriniz");
const healt = prompt("saglikli misiniz");

result = age > 15 && healt == "e" ? "askere gidebilir" : "askere gidemez";

console.log(result);

const hiz = +prompt("hiz limitini giriniz");
const hizsonuc = hiz >= 120 ? "hizli" : hiz >= 90 ? "normal" : "yavas";
console.log(hizsonuc);

const maas = +prompt("maasinizi giriniz");
const maassonuc =
  maas >= 5000
    ? "ideal maas"
    : maas >= 4000
    ? "yoksulluk sinirinda"
    : "aclik sinirinda";
console.log(maassonuc);

const maas1 = +prompt("maasinizi giriniz");
const calismasuresi = +prompt("calisma surenizi giriniz");
const zamorani =
  calismasuresi < 5
    ? maas1 * 1.1
    : calismasuresi < 10
    ? maas1 * 1.2
    : maas1 * 1.5;
console.log(zamorani);

const borc = 0;
const maas2 = 4820;
console.log(!borc && maas2 > 4820 ? "kredi alabilir 😂" : "kredi alamaz 😒");

document.write(!borc && maas2 > 4820 ? "kredi alabilir 😂" : "kredi alamaz 😒");
