// membuat object
// ini adlaah jenis object literal
// ini juga cara memanggil/mengeksekusi object
// var mhs = {
//     nama: "rio sahid",
//     umur: 23,
//     ips: [3.00, 3.01, 3.21],
//     alamat: {
//         jalan: "jl.pinang 4 pondok labu",
//         kota: "jakarta selatan",
//         provinsi: "DKI Jakarta"
//     }
// };


// function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('rio sahid', '19114463', 'riosahid25@gmail.com', 'sisteminformasi')
var mhs4 = buatObjectMahasiswa('juwita', '19114464', 'juwita@gmail.com', 'akuntansi')



//function constractor

function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs5 = new Mahasiswa('johan', '09123422', 'johan@gmail.com', 'teknik informatika');