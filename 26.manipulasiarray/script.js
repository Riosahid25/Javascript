// manipulasi array 

// 1.menambah isi array
// var arr = ["a", 1, true];
// console.log(arr[1]);
// atau
// var arr = [];
// arr[1] = "rio";
// arr[2] = "sahid";
// arr[3] = 'wijaya';
// console.log(arr);

// // 2.menghapus array
// var array = ["rio", "sahid", "wijaya"];
// // digunakan untuk menghapus
// array[1] = undefined;
// console.log(array);

// 3.menampilkan isi array
// var array = ["rio", "sahid", "wijaya"];
// for (var i = 0; i < array.length; i++) {
//     console.log('mahasiswa ke-' + (i + 1) + ' : ' + array[i]);
// }

// method pada array
// // 1.join
// var arr = ['rio', 'sahid', 'wijaya'];
// console.log(arr.join(' - '));

// 2.push/pop
//push menambah elemen diakhir array
// arr.push('kentut');
// pop menghilangan elemen terakhir dari array
// arr.pop();
// console.log(arr.join(' - '));

// 3.unshift dan shift
// menambah elemen pertama
// arr.unshift('doddy');
// menghilangkan elemen pertama
// arr.shift();
// console.log(arr.join(' - '))

//4.splice
// rumus : splice(indexawal, maudihapusbrp, elemen1,elemen2);
// var arr = ['rio', 'sahid', 'wijaya'];
// arr.splice(2, 1, 'doddy', 'bapuk');
// console.log(arr.join(' - '));

// 5.slice :mengiris sebuah array menjadi array baru
// rumus : slice(indexawal,akhir);
// var arr = ['rio', 'sahid', 'wijaya', 'doddy', 'bapuk'];
// var arr2 = arr.slice(0, 1);
// console.log(arr2.join());

// 6.foreach hampir sama fungsi kaya for
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ['rio', 'sahid', 'wijaya', 'kusuma', 'gendon', 'bapuk', 'reja', 'arif', 'pekong'];
// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }


// angka.forEach(function (e) {
//     console.log(e);
// });

// nama.forEach(function (e, i) {
//     console.log('mahasiswa ke- ' + i + ' adalah: ' + e);
// });

// 7.map
// mengembalikan array
// var angka = [1, 2, 5, 3, 6, 8, ];
// var angka2 = angka.map(function (e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '));

// 8.sort
// var angka = [1, 10, 2, 20, 5, 3, 6, 8, ];
// angka.sort(function (b, c) {
//     return b - c;
// });
// console.log(angka.join(' - '));

// 9.filter
// mencari nilai pada array dan mengembalikan dalam bentuk array/dapat menemukan banyak nilai.
// var angka = [1, 10, 2, 20, 5, 3, 6, 8, ];
// var angka2 = angka.filter(function (x) {
//     return x > 5;
// });
// console.log(angka2.join(' - '));

//10.find
// hanya menemukan satu nilai saja
var angka = [1, 10, 2, 20, 5, 3, 6, 8, ];
var angka2 = angka.find(function (x) {
    return x > 5;
});
console.log(angka2);