# Katalis Digital — Company Profile (Paket Exclusive · Retouched)

Website hingga 10 halaman untuk company profile dengan desain custom,
dibuat dengan React + Vite + React Router. Versi ini sudah melalui
**retouch desain menyeluruh** supaya terasa jauh lebih eksklusif
dibanding paket Starter dan Premium — bukan cuma beda warna, tapi beda
lapisan sistem visual dan interaksinya.

## Apa yang berubah di retouch ini

Sistem desain lama (dark tech biasa) diupgrade jadi punya **kedalaman
visual berlapis**:

1. **Aurora gradient background** — tiga blob gradient blur yang
   bergerak pelan di hero (`.aurora-a/b/c` di `index.css`), bukan
   background flat.
2. **Cursor spotlight** — radial glow lembut yang mengikuti pergerakan
   mouse di hero (`Home.jsx` → `handleHeroMove`, dikendalikan lewat CSS
   var `--spot-x`/`--spot-y`).
3. **Grain/noise texture** — lapisan tekstur sangat halus di seluruh
   halaman (`body::before` di `index.css`) supaya dark theme tidak
   terasa flat/vector, lebih terasa "material".
4. **Tilt 3D on hover** — kartu servis, portofolio, value, dan
   testimoni miring mengikuti posisi kursor (`src/components/Tilt.jsx`),
   dipadukan dengan glow border yang mengikuti titik kursor
   (`.card-glow` di CSS, pakai radial-gradient mask trick).
5. **Gradient text & border** — judul aksen, angka statistik, dan label
   kategori proyek memakai gradient mint→violet (`--gradient-brand`),
   bukan warna solid.
6. **Tombol shine sweep** — highlight diagonal melintas saat tombol utama
   di-hover (`.btn-shine`).
7. **Marquee "trusted by"** — ticker nama klien berjalan otomatis di
   bawah hero (`src/components/Marquee.jsx`), jeda saat di-hover.
8. **Scroll progress bar** — garis gradient tipis di atas layar yang
   mengisi sesuai posisi scroll (`src/components/ScrollProgress.jsx`).
9. **Transisi halaman fade** — setiap pindah rute, konten muncul dengan
   fade + geser halus (`.route-fade` di `App.jsx`/`index.css`), bukan
   langsung "meloncat".
10. **Aksen serif editorial** — kutipan testimoni dan huruf pertama
    paragraf pembuka artikel blog pakai font serif miring
    (**Instrument Serif**) dengan drop-cap gradient, kontras dengan
    tipografi grotesk teknis di elemen lain — kesan majalah premium,
    bukan template SaaS generik.

Semua efek di atas otomatis nonaktif/statis kalau pengguna mengaktifkan
"reduce motion" di OS mereka (`prefers-reduced-motion`), jadi tetap
accessible.

## Halaman (10 rute)

| Rute | Halaman |
|---|---|
| `/` | Beranda |
| `/tentang-kami` | Tentang Kami |
| `/layanan` | Layanan |
| `/portofolio` | Portofolio (list + filter kategori) |
| `/portofolio/:slug` | Detail studi kasus proyek (4 contoh) |
| `/blog` | Blog (list artikel) |
| `/blog/:slug` | Detail artikel (4 contoh) |
| `/testimoni-faq` | Testimoni & FAQ |
| `/karier` | Karier |
| `/kontak` | Kontak |

## Fitur (tetap dipertahankan dari sebelumnya)

- Blog & Portofolio berbasis data (`src/data/`) — tambah entri, halaman
  detail otomatis terbentuk
- Optimasi performa: lazy-load per halaman (`React.lazy` + `Suspense`),
  vendor chunk terpisah, cache header di `netlify.toml`
- Live Chat WhatsApp dengan panel quick-reply
- Google Analytics (GA4) dengan page view otomatis + event kustom
- SEO lanjutan: JSON-LD (Organization, Article, CreativeWork), sitemap,
  canonical, Open Graph per halaman

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Hal yang perlu diganti sebelum publish

Sama seperti sebelumnya — identitas perusahaan, nomor WhatsApp, endpoint
Formspree, GA4 Measurement ID, Google Maps, konten portofolio/blog, dan
domain di SEO. Detail lengkap lokasinya:

1. **Identitas** — `index.html`, `Navbar.jsx`, `Footer.jsx`, `SEO.jsx`
2. **GA4** — ganti `G-XXXXXXXXXX` (2 tempat) di `index.html`
3. **WhatsApp** — cari `6281199988877` di `WhatsAppChat.jsx`,
   `Footer.jsx`, `Contact.jsx`
4. **Form (Formspree)** — `FORMSPREE_ENDPOINT` di `src/pages/Contact.jsx`
5. **Google Maps** — `src` iframe di `Contact.jsx`
6. **Portofolio & Blog** — `src/data/projects.js` dan `src/data/posts.js`
7. **Nama klien di marquee** — array `CLIENTS` di
   `src/components/Marquee.jsx`
8. **Domain SEO** — `index.html`, `SEO.jsx`, `public/robots.txt`,
   `public/sitemap.xml`

### Mengganti warna & font (branding custom)

Seluruh sistem warna gradient diatur lewat 3 variable di bagian atas
`src/index.css`:

```css
--accent: #7cffc4;   /* warna utama */
--accent2: #7c9cff;  /* warna sekunder untuk gradient */
--gradient-brand: linear-gradient(135deg, #7cffc4 0%, #7c9cff 100%);
```

Ganti dua warna dasarnya, gradient dan semua elemen yang memakainya
(tombol, teks aksen, angka statistik, border kartu, scroll bar) otomatis
ikut berubah. Font diganti lewat link Google Fonts di `index.html` plus
variable `--font-display` / `--font-body` / `--font-mono` / `--font-serif`.

## Deploy ke Netlify

### Cara 1 — Drag & drop

1. `npm run build` → folder `dist/`
2. Seret ke [app.netlify.com/drop](https://app.netlify.com/drop)
3. Jika halaman dinamis 404 saat direfresh, atur redirect manual di
   **Site settings → Build & deploy → Redirects** (`/*` → `/index.html`).

### Cara 2 — GitHub (disarankan)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Lalu di [app.netlify.com](https://app.netlify.com) → **Add new site** →
**Import an existing project** → pilih repo ini. `netlify.toml` sudah
mengatur build command, publish directory, redirect, dan cache header
secara otomatis.

## Catatan performa & SEO

Sama seperti sebelumnya — lihat komentar di `vite.config.js` dan
`src/components/SEO.jsx`. Efek visual baru (aurora, grain, tilt, marquee)
seluruhnya CSS/JS ringan tanpa library tambahan, jadi tidak menambah
bundle size vendor. Cek ukuran akhir tiap halaman lewat output
`npm run build` — tiap halaman tetap dalam hitungan kilobyte karena
lazy-loading per rute.
