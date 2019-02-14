// belajar membuat n menjalankan function
function jumlahVolumeDuaKubus(a, b) {
    var volumA;
    var volumB;
    var total;

    volumA = a * a * a;
    volumB = b * b * b;

    total = volumA + volumB;

    return total;
}

console.log('volumA + VolumB = ' +
    jumlahVolumeDuaKubus(8, 3));
console.log('volumA + VolumB = ' +
    jumlahVolumeDuaKubus(10, 5));