// * ===============================================

//*               FONKSIYONLAR

// * ===============================================

// ! 1.  YONTEM :

function yazdir() {
  console.log("Ahmet");
}

yazdir(); // Fonksiyon cagirma

// Ornek : PAramaetreli fonksiyon

function yazdirAd(ad, yas) {
  console.log(`Adiniz :${ad} Yasiniz : ${yas}`);
}
yazdirAd("muhammed", 30);
yazdirAd("can", 21);

// RETURN

function yasHesapla(dogum) {
  return 2022 - dogum;
}

console.log(`Yasiniz: ${yasHesapla(1992)} `);
