    // pseudo code / algoritmanya

    //jika angkot kosong
    //tambah penumpang diawal array
    // kembalikan isi array & keluar dari function

    // telusuri seluruh kursi dari awal
    // jika tidak ada kursi kosong
    // tambah penumpang di kursi tersebut
    // kembalikan isi array & keluar dari funtion

    // jika sudah ada nama yang
    // tampikan pesan kesalahan
    // kembalikan isi array & keluar dari function

    // jika seluruh kursi terisi
    // tambah penumpang di akhir array
    // kembalikan isi array & keluar dari function

    // var penumpang = ['rio', undefined, 'sahid'];
    // var tambahPenumpang = function (namaPenumpang, penumpang) {
    //     if (penumpang.length == 0) {
    //         penumpang.push(namaPenumpang);
    //         return penumpang;
    //     } else {
    //         for (var i = 0; i < penumpang.length; i++) {
    //             if (penumpang[i] == undefined) {
    //                 penumpang[i] = namaPenumpang;
    //                 return penumpang;
    //             } else if (penumpang[i] == namaPenumpang) {
    //                 console.log(namaPenumpang + 'sudah ada didalam angkot');
    //                 return penumpang;
    //             } else if (i == penumpang.length - 1) {
    //                 penumpang.push(namaPenumpang);
    //                 return penumpang;
    //             }
    //         }
    //     }
    // }

    var penumpang = [];
    var tambahPenumpang = function (namaPenumpang, penumpang) {
        if (penumpang.length == 0) {
            penumpang.push(namaPenumpang);

            return penumpang;
        } else {
            for (var i = 0; i < penumpang.length; i++) {
                if (penumpang[i] == undefined) {
                    penumpang[i] = namaPenumpang;
                    return penumpang;
                } else if (penumpang[i] == namaPenumpang) {
                    console.log(namaPenumpang + ' sudah ada didalam angkot');

                    return penumpang;
                } else if (i == penumpang.length - 1) {
                    penumpang.push(namaPenumpang);

                    return penumpang;
                }
            }
        }
    }

    var hapusPenumpang = function (namaPenumpang, penumpang) {
        if (penumpang.length == 0) {
            console.log('angkot masi kosong');

            return penumpang;
        } else {
            for (var i = 0; i < penumpang.length; i++) {
                if (penumpang[i] == namaPenumpang) {
                    penumpang[i] = undefined;

                    return penumpang;
                } else if (i == penumpang.length - 1) {
                    console.log(namaPenumpang + ' tidak ada didalam angkot');

                    return penumpang;
                }
            }
        }
    }