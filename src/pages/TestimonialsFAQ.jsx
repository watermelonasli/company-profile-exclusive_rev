import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";

const TESTIMONIALS = [
  {
    quote: "Katalis mengubah cara tim kami bekerja — update mingguan yang jelas membuat kami selalu tahu progres tanpa harus bertanya.",
    name: "Yoga Pratama",
    role: "CTO, Sigap Rantai Nusantara",
  },
  {
    quote: "Mereka tidak hanya menulis kode sesuai spesifikasi, tapi juga menantang asumsi kami yang ternyata keliru.",
    name: "Maria Angelina",
    role: "Head of Digital, Bank Mitra Sejahtera",
  },
  {
    quote: "Handover dokumentasi paling rapi yang pernah kami terima dari vendor eksternal.",
    name: "Fajar Ramadhan",
    role: "Founder, Warungku Group",
  },
  {
    quote: "Tim mereka paham keterbatasan koneksi di daerah kami, bukan cuma paham teknologi terbaru.",
    name: "Nurul Hidayah",
    role: "Program Manager, Yayasan Cerdas Nusantara",
  },
];

const FAQS = [
  { q: "Berapa lama waktu pengerjaan rata-rata sebuah proyek?", a: "Bergantung kompleksitas — website company profile biasanya 3–5 minggu, sementara aplikasi mobile dengan backend custom bisa 3–6 bulan. Estimasi detail selalu kami berikan setelah sesi discovery." },
  { q: "Apakah Katalis Digital mengerjakan proyek jangka pendek?", a: "Bisa. Selain proyek end-to-end, kami juga menerima engagement jangka pendek seperti audit teknis, code review, atau menambah kapasitas tim yang sudah ada." },
  { q: "Bagaimana model kerja sama dan pembayarannya?", a: "Umumnya kami menggunakan skema fixed price untuk scope yang jelas, atau time & material untuk proyek yang scope-nya berkembang. Pembayaran bertahap sesuai milestone." },
  { q: "Apakah kode sumber sepenuhnya menjadi milik klien?", a: "Ya. Setelah pelunasan, seluruh kode sumber dan dokumentasi diserahkan penuh ke klien, termasuk akses repository." },
  { q: "Apakah tersedia dukungan pasca peluncuran?", a: "Tersedia paket maintenance bulanan opsional untuk monitoring, perbaikan bug, dan pembaruan kecil setelah aplikasi live." },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.q}</span>
        <span className="faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="faq-answer">{item.a}</p>}
    </div>
  );
}

export default function TestimonialsFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <SEO
        title="Testimoni & FAQ"
        description="Testimoni klien Katalis Digital dan jawaban atas pertanyaan seputar proses kerja, waktu pengerjaan, model kerja sama, dan dukungan pasca peluncuran."
        path="/testimoni-faq"
      />

      <section className="page-header">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Testimoni & FAQ</p>
          </Reveal>
          <Reveal delay={80}>
            <h1>Dipercaya tim produk di berbagai industri.</h1>
          </Reveal>
        </div>
      </section>

      <section className="section section-top-tight">
        <div className="wrap testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="figure" className="testimonial-card card-glow" key={t.name} delay={i * 80}>
              <span className="testimonial-mark" aria-hidden="true">"</span>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span>{t.name}</span>
                <span>{t.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <Reveal className="section-head section-head-center">
            <p className="eyebrow">Pertanyaan Umum</p>
            <h2>Yang paling sering ditanyakan calon klien.</h2>
          </Reveal>

          <div className="faq-list">
            {FAQS.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-aurora" aria-hidden="true" />
        <div className="wrap cta-inner">
          <Reveal>
            <h2>Pertanyaanmu belum terjawab?</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>Kirimkan lewat form kontak, kami senang membantu dari nol.</p>
          </Reveal>
          <Reveal delay={140}>
            <Link className="btn btn-accent btn-shine" to="/kontak">Hubungi Kami</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
