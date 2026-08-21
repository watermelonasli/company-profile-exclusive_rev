import { useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import Tilt from "../components/Tilt.jsx";
import Marquee from "../components/Marquee.jsx";
import { PROJECTS } from "../data/projects.js";
import { POSTS } from "../data/posts.js";

const STATS = [
  { to: 60, suffix: "+", label: "Proyek dikirim" },
  { to: 9, suffix: "", label: "Tahun beroperasi" },
  { to: 98, suffix: "%", label: "Klien merekomendasikan" },
  { to: 24, suffix: "/7", label: "Monitoring produksi" },
];

const SERVICES_PREVIEW = [
  { title: "Pengembangan Web", text: "Website & web app performa tinggi dengan arsitektur yang mudah diskalakan." },
  { title: "Aplikasi Mobile", text: "iOS & Android native atau cross-platform, dari MVP hingga skala jutaan pengguna." },
  { title: "Software Custom", text: "Sistem internal yang dirancang sesuai proses bisnis, bukan sebaliknya." },
];

export default function Home() {
  const heroRef = useRef(null);

  function handleHeroMove(e) {
    const node = heroRef.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    node.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <>
      <SEO
        title="Beranda"
        description="Katalis Digital merancang dan membangun website, aplikasi mobile, dan software custom untuk startup serta perusahaan di Indonesia."
        path="/"
      />

      <section className="hero" ref={heroRef} onMouseMove={handleHeroMove}>
        <div className="hero-aurora" aria-hidden="true">
          <span className="aurora aurora-a" />
          <span className="aurora aurora-b" />
          <span className="aurora aurora-c" />
        </div>
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-spotlight" aria-hidden="true" />

        <div className="wrap hero-inner">
          <Reveal>
            <p className="eyebrow eyebrow-badge">Studio Pengembangan Produk Digital</p>
          </Reveal>
          <Reveal delay={80}>
            <h1>
              Kami membangun produk digital
              <br />
              yang <span className="text-accent">benar-benar dipakai.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero-desc">
              Katalis Digital bekerja sama dengan startup dan perusahaan untuk
              merancang, membangun, dan menskalakan website, aplikasi mobile,
              dan software custom — dari riset hingga produksi.
            </p>
          </Reveal>
          <Reveal delay={240} className="hero-actions">
            <Link className="btn btn-accent btn-shine" to="/kontak">
              Mulai Proyek
            </Link>
            <Link className="btn btn-outline" to="/portofolio">
              Lihat Portofolio
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="marquee-section">
        <div className="wrap marquee-label">
          <p className="eyebrow" style={{ marginBottom: 20 }}>Dipercaya oleh tim produk dari</p>
        </div>
        <Marquee />
      </section>

      <section className="stats-strip">
        <div className="wrap stats-grid">
          {STATS.map((s, i) => (
            <Reveal as="div" className="stat-item" key={s.label} delay={i * 80}>
              <p className="stat-number">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="stat-label">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head-row">
            <div className="section-head">
              <p className="eyebrow">Layanan</p>
              <h2>Dari ide hingga produk yang stabil di produksi.</h2>
            </div>
            <Link className="text-link" to="/layanan">
              Lihat semua layanan →
            </Link>
          </Reveal>

          <div className="services-preview-grid">
            {SERVICES_PREVIEW.map((s, i) => (
              <Reveal as="div" delay={i * 90} key={s.title}>
                <Tilt className="service-preview-card card-glow">
                  <span className="service-preview-index">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <Reveal className="section-head-row">
            <div className="section-head">
              <p className="eyebrow">Portofolio</p>
              <h2>Beberapa produk yang telah kami bangun.</h2>
            </div>
            <Link className="text-link" to="/portofolio">
              Lihat semua proyek →
            </Link>
          </Reveal>

          <div className="portfolio-preview-grid">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <Reveal as="div" key={p.slug} delay={i * 90}>
                <Tilt as={Link} to={`/portofolio/${p.slug}`} className="portfolio-card card-glow">
                  <div className="portfolio-card-img">
                    <img src={p.cover} alt={`Tampilan proyek ${p.name}`} loading="lazy" />
                    <span className="portfolio-card-shine" aria-hidden="true" />
                  </div>
                  <span className="portfolio-card-cat">{p.category}</span>
                  <h3>{p.name}</h3>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head-row">
            <div className="section-head">
              <p className="eyebrow">Blog</p>
              <h2>Catatan dari proses kerja tim kami.</h2>
            </div>
            <Link className="text-link" to="/blog">
              Lihat semua artikel →
            </Link>
          </Reveal>

          <div className="blog-preview-grid">
            {POSTS.slice(0, 3).map((p, i) => (
              <Reveal as="div" key={p.slug} delay={i * 90}>
                <Link to={`/blog/${p.slug}`} className="blog-card">
                  <div className="blog-card-img">
                    <img src={p.cover} alt={p.title} loading="lazy" />
                  </div>
                  <span className="blog-card-cat">{p.category}</span>
                  <h3>{p.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-aurora" aria-hidden="true" />
        <div className="wrap cta-inner">
          <Reveal>
            <h2>Punya ide produk yang ingin diwujudkan?</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>Ceritakan rencanamu, kami bantu petakan langkah teknisnya.</p>
          </Reveal>
          <Reveal delay={140}>
            <Link className="btn btn-accent btn-shine" to="/kontak">
              Diskusikan Proyek
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
