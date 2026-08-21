import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import Tilt from "../components/Tilt.jsx";

const VALUES = [
  { title: "Transparan", text: "Progres, kendala, dan keputusan teknis selalu kami komunikasikan apa adanya." },
  { title: "Berorientasi hasil", text: "Kode yang bagus adalah kode yang menyelesaikan masalah nyata pengguna." },
  { title: "Belajar berkelanjutan", text: "Tim kami rutin mengevaluasi proyek selesai untuk memperbaiki proses berikutnya." },
];

const TEAM = [
  { name: "Rangga Prawira", role: "Founder & Engineering Lead", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
  { name: "Dinda Larasati", role: "Head of Product Design", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
  { name: "Aditya Nugroho", role: "Lead Backend Engineer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
  { name: "Salsabila Putri", role: "Client Success Manager", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" },
];

export default function About() {
  return (
    <>
      <SEO
        title="Tentang Kami"
        description="Katalis Digital adalah studio pengembangan produk digital yang berdiri sejak 2017, membangun website, aplikasi mobile, dan software custom."
        path="/tentang-kami"
      />

      <section className="page-header">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Tentang Kami</p>
          </Reveal>
          <Reveal delay={80}>
            <h1>Tim kecil, standar kerja yang ketat.</h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="page-header-desc">
              Katalis Digital berdiri sejak 2017 dari tiga engineer yang lelah
              melihat proyek software gagal karena komunikasi yang buruk,
              bukan karena kurangnya kemampuan teknis.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-top-tight">
        <div className="wrap">
          <Reveal className="section-head section-head-center">
            <p className="eyebrow">Nilai Kerja</p>
            <h2>Yang kami pegang di setiap proyek.</h2>
          </Reveal>

          <div className="values-grid">
            {VALUES.map((v, i) => (
              <Reveal as="div" delay={i * 90} key={v.title}>
                <Tilt className="value-card card-glow">
                  <span className="value-index">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <Reveal className="section-head section-head-center">
            <p className="eyebrow">Tim Inti</p>
            <h2>Orang-orang di balik proyek kamu.</h2>
          </Reveal>

          <div className="team-grid">
            {TEAM.map((t, i) => (
              <Reveal as="div" className="team-card" key={t.name} delay={i * 80}>
                <div className="team-card-img">
                  <img src={t.img} alt={`Foto ${t.name}, ${t.role}`} loading="lazy" />
                </div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
