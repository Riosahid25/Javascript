// var angka = prompt('masukan angka : ');

// switch (angka) {
//     case '1':
//         alert('anda memasukan angka 1 ');
//         break;
//     case '2':
//         alert('anda memasukan angka 2 ');
//         break;
//     case '3':
//         alert('anda memasukan angka 3 ');
//         break;
//     default:
//         alert('angka yang anda masukan salah');
// }

var item = prompt('masukan makanan / minuman: \n (nasi , daging , ayam , hamburger)');

switch (item) {
    case 'nasi':
        alert('makanan yang sangat sehat');
        break;
    case 'daging':
        alert('makanan yg tidak sehat ');
        break;
    case 'ayam':
        alert('makanan yang sehat');
        break;
    case 'hamburger':
        alert('makanan yang tidak sehat');
        break;
    default:
        alert('makanan yg anda masukan tidak ada');
}