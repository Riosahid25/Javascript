// global scope / window scope
var a = 1

function tes() {

    // name conflict/ dimana kita mempunyai dua variable yg sama tetapi scope nya berbeda.
    var a = 3;

    var b = 2;
    console.log(a);
}
tes();