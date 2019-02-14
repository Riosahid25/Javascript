// contoh penggunaan array:
// var hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];

// var binatang = [];
// binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];
// console.log(typeof (binatang));
// console.log(binatang.length);

var hari = ['senin', 'selasa', 'rabu'];
var mhs = ['rio', 'sahid', 'wijaykusuma'];
var myArr = ['teks', 2, false];
var angka = [10, 123, 2004];

// tambah function expression
var myFunc = function () {
    alert('hello word');
};

var myArray2 = ['teks', 2, false, myFunc, [4, 5, 6]];

console.log(myArray2[4][1]);