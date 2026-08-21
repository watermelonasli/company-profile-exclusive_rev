import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import Tilt from "../components/Tilt.jsx";
import { PROJECTS } from "../data/projects.js";

const CATEGORIES = ["Semua", "Aplikasi Mobile", "Web Application"];

export default function Portfolio() {
  const [active, setActive] = useState("Semua");

  const filtered = useMemo(
    () => (active === "Semua" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <SEO
        title="Portofolio"
        description="Kumpulan proyek website, aplikasi mobile, dan software custom yang telah dibangun oleh Katalis Digital untuk klien di berbagai industri."
        path="/portofolio"
      />

      <section className="page-header">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Portofolio</p>
          </Reveal>
          <Reveal delay={80}>
            <h1>Produk nyata, dipakai pengguna nyata.</h1>
          </Reveal>
        </div>
      </section>

      <section className="section section-top-tight">
        <div className="wrap">
          <Reveal className="filter-row" as="div">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`filter-chip ${active === c ? "is-active" : ""}`}
                onClick={() => setActive(c)}
                aria-pressed={active === c}
              >
                {c}
              </button>
            ))}
          </Reveal>

          <div className="portfolio-full-grid">
            {filtered.map((p, i) => (
              <Reveal as="div" key={p.slug} delay={(i % 4) * 80}>
                <Tilt as={Link} to={`/portofolio/${p.slug}`} className="portfolio-card portfolio-card-lg card-glow">
                  <div className="portfolio-card-img">
                    <img src={p.cover} alt={`Tampilan proyek ${p.name}`} loading="lazy" />
                    <span className="portfolio-card-shine" aria-hidden="true" />
                  </div>
                  <span className="portfolio-card-cat">{p.category} · {p.year}</span>
                  <h3>{p.name}</h3>
                  <p>{p.summary}</p>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
