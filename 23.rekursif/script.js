// for (var i = 10; i >= 1; i--) {
//     console.log(i);
// }

// function tampilAngka(n) {
//     if (n === 0) return;
//     console.log(n);
//     return tampilAngka(n - 1);
// }
// tampilAngka(10);

// menghitung faktorial contoh 5! = 5x4x3x2x1
function faktorial(n) {
    if (n === 0) return 1;
    return n * faktorial(n - 1);
}

console.log(faktorial(10));