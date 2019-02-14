// var angka = prompt('masukan angka: ')
// if (angka % 2 === 0) {
//     alert(angka + ' adalah bilangan genap');
// } else if (angka % 2 == 1) {
//     alert(angka + ' adalah bilangan ganjil');
// } else {
//     alert('anda bukan memasukan angka!!');
// }

var jmlangkot = 10;
var angkotberopersi = 6;
for (var noangkot = 1; noangkot <= jmlangkot; noangkot++) {
    if (noangkot <= 6 && noangkot !== 5) {
        console.log('angkot no. ' + noangkot + ' dapat beroperasi dengan baik');
    } else if (noangkot === 8 || noangkot === 10 || noangkot === 5) {
        console.log('angkot no ' + noangkot + ' sedang lembur');
    } else {
        console.log('angkot no. ' + noangkot + ' tidak dapat beroperasi');
    }
}