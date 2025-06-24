// console.info("Object Learning, Run in HTML Inspect ");
// const orang = {};
// orang["nama"] = "Sen";
// orang["alamat"] = "Indo";
// orang["umur"] = 19;
// console.table(orang);
// delete orang["umur"];
// console.table(orang);

// const person = {
//     nama: "Sean",
//     "alamat negara": "indo",
//     umur: 19,
// };
// console.log(`Nama : ${person.nama}`);
// person.nama = "Sen";
// console.table(person);
// delete person.umur;
// console.table(person);

// class trainer {
//     constructor(nama, umur, money, need) {
//         this.nama = nama;
//         this.umur = umur;
//         this.money = money;
//         this.need = need;
//     }
//     askMoney(orang) {
//         if (orang.money >= this.need) {
//             orang.money -= this.need;
//             console.log(`${orang.nama} meminjamkan uang kepada ${this.nama} sebanyak ${this.need}`);
            
//         } else {
//             console.log(`uang ${orang.nama} tidak cukup untuk membayar kebutuhan ${this.nama}`);
            
//         }
//     }
// }

// const sendi = new trainer('sendi',20,10000,2000);
// sendi.umur = 21;
// const abiel = new trainer('abiel',20,8000,5000);
// console.log(sendi);
// abiel.askMoney(sendi);

class person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.friends = [];
    }
    addFriend(teman) {
        this.friends.push(teman);
    }
    mutualFriend(other){
        const myFriend = this.friends.map(teman => teman.name);
        const otherFriend = other.friends.map(teman => teman.name);
        const mutual = myFriend.filter(nama => otherFriend.includes(nama));
        return mutual;
    }
}
const tika = new person('tika','perempuan');
const meli = new person('meli','perempuan');
const sendi = new person('sendi','laki');
const arya = new person('arya','laki');
const ari = new person('ari','laki');

tika.addFriend(meli);
tika.addFriend(arya);
tika.addFriend(ari);
console.log(tika.friends);

sendi.addFriend(arya);
sendi.addFriend(ari);
console.log(sendi.friends);

const mutualan = tika.mutualFriend(sendi);
console.log(mutualan);

