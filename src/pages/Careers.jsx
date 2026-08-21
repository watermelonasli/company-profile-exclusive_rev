import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";

const OPENINGS = [
  { role: "Frontend Engineer (React)", type: "Full-time · Remote/Jakarta", level: "2–4 tahun pengalaman" },
  { role: "Backend Engineer (Node.js / Go)", type: "Full-time · Remote/Jakarta", level: "3+ tahun pengalaman" },
  { role: "Product Designer", type: "Full-time · Jakarta", level: "2+ tahun pengalaman" },
  { role: "QA Engineer", type: "Full-time · Remote", level: "1–3 tahun pengalaman" },
];

const PERKS = [
  { title: "Kerja fleksibel", text: "Remote-friendly dengan jam kerja inti yang fleksibel." },
  { title: "Anggaran belajar", text: "Dukungan biaya kursus, konferensi, atau sertifikasi tahunan." },
  { title: "Proyek beragam", text: "Kesempatan mengerjakan berbagai industri, bukan satu produk saja." },
];

export default function Careers() {
  return (
    <>
      <SEO
        title="Karier"
        description="Lowongan kerja di Katalis Digital untuk posisi Frontend Engineer, Backend Engineer, Product Designer, dan QA Engineer."
        path="/karier"
      />

      <section className="page-header">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Karier</p>
          </Reveal>
          <Reveal delay={80}>
            <h1>Bangun karier di tim yang mengutamakan hasil.</h1>
          </Reveal>
        </div>
      </section>

      <section className="section section-top-tight">
        <div className="wrap">
          <div className="opening-list">
            {OPENINGS.map((o, i) => (
              <Reveal as="a" href="mailto:karier@katalis.digital?subject=Lamaran%20Posisi" className="opening-row" key={o.role} delay={i * 70}>
                <div>
                  <h3>{o.role}</h3>
                  <p>{o.type} · {o.level}</p>
                </div>
                <span className="opening-arrow" aria-hidden="true">→</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <Reveal className="section-head section-head-center">
            <p className="eyebrow">Kenapa Bergabung</p>
            <h2>Yang kami tawarkan ke tim kami.</h2>
          </Reveal>

          <div className="values-grid">
            {PERKS.map((p, i) => (
              <Reveal as="div" className="value-card card-glow" key={p.title} delay={i * 90}>
                <span className="value-index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-aurora" aria-hidden="true" />
        <div className="wrap cta-inner">
          <Reveal>
            <h2>Tidak menemukan posisi yang cocok?</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>Kirim CV terbuka kamu, kami simpan untuk kebutuhan mendatang.</p>
          </Reveal>
          <Reveal delay={140}>
            <Link className="btn btn-accent btn-shine" to="/kontak">Hubungi Kami</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
