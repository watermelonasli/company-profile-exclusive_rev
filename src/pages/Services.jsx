import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";

const SERVICES = [
  {
    code: "01",
    title: "Pengembangan Web",
    text: "Website company profile, web app, hingga e-commerce dengan arsitektur yang mudah diskalakan dan performa tinggi.",
    points: ["React / Next.js", "Optimasi kecepatan & SEO", "Integrasi CMS & payment gateway"],
  },
  {
    code: "02",
    title: "Aplikasi Mobile",
    text: "Aplikasi iOS & Android, native atau cross-platform, dari tahap MVP hingga skala jutaan pengguna aktif.",
    points: ["React Native / Flutter", "Push notification & offline mode", "Publikasi ke App Store & Play Store"],
  },
  {
    code: "03",
    title: "Software Custom",
    text: "Sistem internal — ERP ringan, dashboard operasional, atau API — yang dirancang mengikuti proses bisnis kamu.",
    points: ["Arsitektur backend & database", "Integrasi sistem lama", "Dokumentasi & handover teknis"],
  },
  {
    code: "04",
    title: "Konsultasi Produk",
    text: "Sesi audit teknis dan strategi produk untuk tim yang sudah punya aplikasi berjalan namun butuh arah baru.",
    points: ["Audit performa & keamanan", "Roadmap teknis 6–12 bulan", "Rekomendasi tech stack"],
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Layanan"
        description="Layanan Katalis Digital: pengembangan web, aplikasi mobile, software custom, dan konsultasi produk untuk startup serta perusahaan."
        path="/layanan"
      />

      <section className="page-header">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Layanan</p>
          </Reveal>
          <Reveal delay={80}>
            <h1>Empat layanan inti, satu standar eksekusi.</h1>
          </Reveal>
        </div>
      </section>

      <section className="section section-top-tight">
        <div className="wrap">
          <div className="services-list">
            {SERVICES.map((s, i) => (
              <Reveal as="article" className="service-row" key={s.code} delay={i * 80}>
                <span className="service-row-code">{s.code}</span>
                <div className="service-row-body">
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                  <ul>
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-aurora" aria-hidden="true" />
        <div className="wrap cta-inner">
          <Reveal>
            <h2>Belum yakin layanan mana yang kamu butuhkan?</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>Ceritakan tantangan produkmu, kami bantu petakan solusinya.</p>
          </Reveal>
          <Reveal delay={140}>
            <Link className="btn btn-accent btn-shine" to="/kontak">
              Konsultasi Gratis
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
