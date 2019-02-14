// membuat object angkot

function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    // penumpangnaik
    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    // penumpangturun
    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert('angkot masi kosong!');
            return false;
        }

        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }

        }
    }
}

var angkot1 = new Angkot('rio sahid', ['pondok labu', 'cilandak'], [], 0);
var angkot2 = new Angkot('david beckham', ['pasar labu', 'cinere'], [], 0);