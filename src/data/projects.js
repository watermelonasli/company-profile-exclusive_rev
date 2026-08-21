export const PROJECTS = [
  {
    slug: "sigap-logistik",
    name: "SIGAP — Aplikasi Logistik",
    category: "Aplikasi Mobile",
    client: "PT Sigap Rantai Nusantara",
    year: "2025",
    summary: "Aplikasi pelacakan armada dan optimasi rute untuk perusahaan logistik dengan 400+ kendaraan.",
    cover: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80",
    stack: ["React Native", "Node.js", "PostgreSQL", "Google Maps API"],
    challenge:
      "Sigap kesulitan memantau lokasi dan efisiensi rute ratusan armada secara real-time, menyebabkan keterlambatan pengiriman dan biaya bahan bakar yang membengkak.",
    solution:
      "Kami membangun aplikasi mobile untuk pengemudi dan dashboard web untuk tim operasional, dengan optimasi rute otomatis dan notifikasi keterlambatan secara real-time.",
    result:
      "Waktu tempuh rata-rata turun 18%, dan tim operasional bisa memantau seluruh armada dari satu dashboard terpusat.",
  },
  {
    slug: "bank-mitra",
    name: "Mitra — Super App Perbankan",
    category: "Aplikasi Mobile",
    client: "Bank Mitra Sejahtera",
    year: "2024",
    summary: "Redesain total aplikasi mobile banking dengan fokus pada kecepatan transaksi dan aksesibilitas.",
    cover: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    stack: ["Flutter", "Go", "Kubernetes", "PostgreSQL"],
    challenge:
      "Aplikasi lama memiliki waktu muat lambat dan alur transfer yang membingungkan, menyebabkan tingginya tiket keluhan nasabah.",
    solution:
      "Kami merombak arsitektur backend untuk latensi lebih rendah dan mendesain ulang alur transaksi berdasarkan riset pengguna langsung.",
    result:
      "Waktu transaksi turun dari rata-rata 12 detik menjadi 3 detik, rating aplikasi naik dari 3.2 menjadi 4.7.",
  },
  {
    slug: "warungku-pos",
    name: "Warungku — Platform POS",
    category: "Web Application",
    client: "Warungku Group",
    year: "2024",
    summary: "Sistem kasir dan manajemen stok berbasis web untuk jaringan minimarket independen.",
    cover: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1000&q=80",
    stack: ["React", "Express", "MySQL", "PWA"],
    challenge:
      "Pemilik warung independen kesulitan mencatat stok dan penjualan secara konsisten, sering kehabisan stok tanpa peringatan dini.",
    solution:
      "Kami membangun sistem POS berbasis web yang bisa dipakai offline (PWA) dengan sinkronisasi otomatis dan peringatan stok menipis.",
    result:
      "Digunakan oleh lebih dari 800 warung di 12 kota, dengan tingkat kehabisan stok turun 34% dalam 6 bulan pertama.",
  },
  {
    slug: "edulearn",
    name: "EduLearn — Platform Belajar",
    category: "Web Application",
    client: "Yayasan Cerdas Nusantara",
    year: "2023",
    summary: "Platform pembelajaran daring untuk siswa SMA di daerah dengan konektivitas internet terbatas.",
    cover: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    stack: ["Next.js", "Node.js", "MongoDB", "Video streaming adaptif"],
    challenge:
      "Materi video pembelajaran sulit diakses siswa dengan koneksi internet lambat di daerah 3T.",
    solution:
      "Kami membangun sistem streaming adaptif dan mode belajar hemat data, plus unduhan materi untuk akses offline.",
    result:
      "Digunakan oleh lebih dari 15.000 siswa di 9 provinsi, dengan tingkat penyelesaian modul naik 41%.",
  },
];
