var jmlAngkot = 10;
var noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log(" No Angkot " + noAngkot + " Beroperasi ");
  } else if (noAngkot === 8 || noAngkot === 10) {
    console.log(" No Angkot " + noAngkot + " Sedang Lembur ");
  } else {
    console.log(" No Angkot " + noAngkot + " Tidak beroperasi ");
  }
}
