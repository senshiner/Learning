// console.info("Array Learning, Run in HTML Inspect ")
// let kontak = [];
// kontak.push("nama", "alamat", "umur");
// kontak.push("email", "nomor");
// console.table(kontak);
// delete kontak[3];
// console.table(kontak);
// kontak.push("TTL");
// kontak[3] = "email";
// console.table(kontak);
// kontak.push(["tempat", "tanggal lahir"]);
// console.table(kontak);
// negara = [["Indonesia","Singapura"],["Rusia","Amerika","Australia"]];
// console.table(negara)
// console.log("Jumlah array = " + kontak.length)

let arr1 = [1,2,3,4,5,6];
let arr2 = [5,6,7,8,9,10];

// function irisan(arr1,arr2) {
//     return arr1.filter(function(value) {
//         return arr2.includes(value);
//     });
// }
const irisan = (arr1,arr2) => arr1.filter(value => 
    arr2.includes(value)
);

const iris = irisan(arr1,arr2);
console.log(iris);

// const total = iris.reduce(function (jumlah,nilai) {
//     return jumlah + nilai;
// })
const total = iris.reduce ((jumlah,nilai) => jumlah + nilai);
console.log(total);
