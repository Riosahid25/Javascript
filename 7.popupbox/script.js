// menggunakan alert

// alert('helo');
// alert('saya');
// alert('nama');
// alert('saya');
// alert('rio');

// menggunkan prompt

// var nama = prompt('masukan nama anda : ');
// alert(nama);

// menggunkan confirm

// var tes = confirm('kamu yakin?');

// if (tes === true) {
//     alert('user menekan ok');
// } else {
//     alert('user menekan cancel');
// }

// membuat program sederhana

alert('selamat datang..');
var lagi = true;

while (lagi === true) {
    var nama = prompt('masukan nama anda: ');
    alert('halo ' + nama);

    lagi = confirm('coba lagi?');
}

alert('terima kasih ..');