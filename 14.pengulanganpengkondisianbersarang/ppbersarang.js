// var s = '';
// for (var i = 0; i < 5; i++) {
//     // for atas untuk baris
//     for (var j = 0; j <= i; j++) {
//         // for untuk kesamping bintangnya
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

var s = '';
for (var y = 0; y < 11; y++) {
    for (var z = 0; z < y; z++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

var s = '';
for (var i = 9; i > 0; i--) {
    for (j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);