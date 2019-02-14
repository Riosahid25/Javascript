// membuat object

// cara 1 functions declaration
// function halo() {
//     console.log('halo');
// }
// halo();

// // cara 2 object literal
// var obj = {};
// obj.halo = function () {
//     console.log('halo');
// }
// obj.halo();

// // cara3 constructor
// function Halo() {
//     console.log('halo');
// }

// new Halo();


// konsep this---------------------------------

// cara1
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// this mengembalikan object global

// // cara2
// var obj = {
//     a: 1,
//     nama: "rio"
// };
// obj.halo = function () {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// mengembalikan object yang bersangkutan

// cara3
function Halo() {
    console.log(this);
    console.log('halo');
}

new Halo();
// this mengembalikan object yang baru dibuat