const dataTransaksiAwal = [
{ id: "T001", produk: "Laptop Gaming", kategori: "Elektronik", harga: 8500000, tanggal: "2024-06-01", kuantitas: 1 },
{ id: "T002", produk: "Mouse Wireless", kategori: "Elektronik", harga: 150000, tanggal: "2024-06-01", kuantitas: 2 },
{ id: "T003", produk: "Kemeja Formal", kategori: "Fashion", harga: 250000, tanggal: "2024-06-02", kuantitas: 3 },
{ id: "T004", produk: "Smartphone", kategori: "Elektronik", harga: 4200000, tanggal: "2024-06-02", kuantitas: 1 },
{ id: "T005", produk: "Sepatu Sneakers", kategori: "Fashion", harga: 800000, tanggal: "2024-06-03", kuantitas: 2 },
{ id: "T006", produk: "Headset Gaming", kategori: "Elektronik", harga: 450000, tanggal: "2024-06-03", kuantitas: 1 }
];

class Penjualan {
    constructor(dataAwal) {
        this.barang = dataAwal;
    }
    pendapatan(){
        let totalPendapatan = 0;
        this.barang.forEach(item => {
            totalPendapatan += item.kuantitas * item.harga;
        });
        return totalPendapatan;
    }
    listKategori(kategori){
        const kItem = this.barang.find(k => k.kategori === kategori);
        if (kItem) {
        return kItem;
        } else{
        return "Kategori tidak ditemukan";
        }
    }
    nilaiTertinggi() {
        let max = 0;

        this.barang.forEach(b => {
        if (b.harga > max) {
            max = b.harga;
        }
        });

        return max;
    }
}
const analisisPenjualan = new Penjualan(dataTransaksiAwal);
// console.log(analisisPenjualan.pendapatan());

console.log(analisisPenjualan.listKategori("Elektronik"));
console.log(analisisPenjualan.nilaiTertinggi());
// console.log(analisisPenjualan);