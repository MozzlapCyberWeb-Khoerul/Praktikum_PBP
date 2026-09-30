const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan sebuah angka: ", function (angka) {
  angka = parseInt(angka);

  if (isNaN(angka)) {
    console.log("Input harus berupa angka!");
  } else if (angka % 2 === 0) {
    console.log("Angka " + angka + " adalah bilangan genap");
  } else {
    console.log("Angka " + angka + " adalah bilangan ganjil");
  }

  rl.close();
});