export const POSTS = [
  {
    slug: "memilih-tech-stack-startup",
    title: "Cara Memilih Tech Stack yang Tepat untuk Startup Tahap Awal",
    date: "2026-06-12",
    author: "Tim Katalis Digital",
    category: "Engineering",
    excerpt:
      "Memilih tech stack di fase awal startup sering jadi keputusan yang terburu-buru. Berikut kerangka berpikir yang kami pakai bersama klien.",
    cover: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
    content: [
      "Banyak startup tahap awal terjebak memilih teknologi berdasarkan tren, bukan kebutuhan tim dan produk. Padahal, keputusan ini akan memengaruhi kecepatan development selama bertahun-tahun ke depan.",
      "Pertimbangan pertama yang kami ajukan ke klien selalu sama: seberapa cepat tim perlu mengirim versi pertama produk? Untuk kebanyakan MVP, kerangka kerja yang matang seperti React atau Vue jauh lebih masuk akal dibanding menulis semuanya dari nol.",
      "Pertimbangan kedua adalah ketersediaan talenta. Teknologi tercanggih tidak ada gunanya jika sulit mencari orang yang menguasainya, atau jika biaya perekrutannya jauh melebihi manfaatnya.",
      "Terakhir, pikirkan biaya operasional jangka menengah — bukan hanya biaya development, tapi juga biaya hosting, maintenance, dan skalabilitas saat traffic mulai naik signifikan.",
    ],
  },
  {
    slug: "checklist-keamanan-aplikasi",
    title: "Checklist Keamanan Dasar Sebelum Aplikasi Kamu Diluncurkan",
    date: "2026-05-20",
    author: "Tim Katalis Digital",
    category: "Security",
    excerpt:
      "Sebelum go-live, ada beberapa hal keamanan dasar yang sering terlewat oleh tim kecil yang fokus mengejar deadline peluncuran.",
    cover: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1000&q=80",
    content: [
      "Keamanan aplikasi sering jadi prioritas terakhir saat tim mengejar tenggat peluncuran. Namun beberapa langkah dasar sebenarnya tidak memakan banyak waktu jika dilakukan sejak awal.",
      "Pastikan seluruh input pengguna divalidasi di sisi server, bukan hanya di sisi klien. Validasi di frontend mudah dilewati oleh siapa pun yang mengerti cara kerja browser.",
      "Gunakan environment variable untuk seluruh kredensial dan kunci API — jangan pernah menaruhnya langsung di kode yang di-commit ke repository.",
      "Terakhir, aktifkan HTTPS di semua environment, termasuk staging, dan pastikan dependency pihak ketiga rutin diperbarui untuk menghindari kerentanan yang sudah diketahui publik.",
    ],
  },
  {
    slug: "dari-mvp-ke-scale",
    title: "Dari MVP ke Skala: Kapan Waktu yang Tepat untuk Refactor?",
    date: "2026-04-08",
    author: "Tim Katalis Digital",
    category: "Product",
    excerpt:
      "MVP yang dibangun cepat biasanya menumpuk utang teknis. Berikut sinyal-sinyal yang menandakan sudah waktunya melakukan refactor besar.",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    content: [
      "Wajar jika MVP dibangun dengan sedikit jalan pintas demi kecepatan. Tapi ada titik di mana jalan pintas itu mulai menghambat, bukan mempercepat.",
      "Sinyal pertama biasanya waktu development fitur baru yang terus memanjang, padahal kompleksitas fiturnya tidak bertambah signifikan.",
      "Sinyal kedua adalah meningkatnya jumlah bug produksi yang berulang di area kode yang sama — tanda bahwa fondasinya perlu diperkuat, bukan sekadar ditambal.",
      "Kami biasanya menyarankan klien melakukan refactor bertahap, modul demi modul, dibanding menulis ulang seluruh sistem sekaligus yang berisiko tinggi terhadap stabilitas bisnis.",
    ],
  },
  {
    slug: "tren-produk-digital-2026",
    title: "Tren Produk Digital yang Kami Lihat Sepanjang 2026",
    date: "2026-02-14",
    author: "Tim Katalis Digital",
    category: "Insight",
    excerpt:
      "Dari proyek-proyek yang kami kerjakan tahun ini, ada beberapa pola kebutuhan klien yang berulang dan layak diperhatikan.",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    content: [
      "Semakin banyak klien meminta aplikasi yang tetap bisa dipakai saat koneksi internet tidak stabil, terutama untuk pengguna di luar kota besar.",
      "Permintaan integrasi pembayaran lokal — bukan hanya kartu kredit — juga meningkat signifikan dibanding beberapa tahun sebelumnya.",
      "Kami juga melihat semakin banyak tim produk yang ingin dashboard analitik internal sejak versi pertama, bukan ditambahkan belakangan.",
    ],
  },
];
