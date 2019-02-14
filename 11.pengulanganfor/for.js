// menggunakan for dan while untuk menghitung angkot.

var jmlangkot = 10;
var angkotberoperasi = 6;
var noangkot = 1;

while (noangkot <= angkotberoperasi) {
    console.log('angkot no. ' + noangkot + ' beroperasi dengan baik');
    noangkot++
}

for (noangkot = angkotberoperasi + 1; noangkot <= jmlangkot; noangkot++) {
    console.log('angkot no. ' + noangkot + ' tidak beroperasi');
}