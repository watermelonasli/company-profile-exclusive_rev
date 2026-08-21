import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import NotFound from "./NotFound.jsx";
import { PROJECTS } from "../data/projects.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return <NotFound />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    creator: { "@type": "Organization", name: "Katalis Digital" },
    about: project.summary,
    datePublished: project.year,
  };

  return (
    <>
      <SEO
        title={project.name}
        description={project.summary}
        path={`/portofolio/${project.slug}`}
        image={project.cover}
        jsonLd={jsonLd}
      />

      <section className="page-header">
        <div className="wrap">
          <Reveal>
            <Link className="text-link" to="/portofolio">← Kembali ke Portofolio</Link>
          </Reveal>
          <Reveal delay={60}>
            <p className="eyebrow" style={{ marginTop: 24 }}>{project.category} · {project.year}</p>
          </Reveal>
          <Reveal delay={100}>
            <h1>{project.name}</h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="page-header-desc">{project.summary}</p>
          </Reveal>
        </div>
      </section>

      <Reveal as="div" className="wrap project-cover">
        <img src={project.cover} alt={`Tampilan utama proyek ${project.name}`} loading="lazy" />
      </Reveal>

      <section className="section">
        <div className="wrap project-detail-grid">
          <div className="project-detail-main">
            <Reveal as="div" className="project-block">
              <h2>Tantangan</h2>
              <p>{project.challenge}</p>
            </Reveal>
            <Reveal as="div" className="project-block" delay={80}>
              <h2>Solusi</h2>
              <p>{project.solution}</p>
            </Reveal>
            <Reveal as="div" className="project-block" delay={140}>
              <h2>Hasil</h2>
              <p>{project.result}</p>
            </Reveal>
          </div>

          <Reveal as="aside" className="project-sidebar card-glow" delay={100}>
            <div>
              <p className="project-sidebar-label">Klien</p>
              <p className="project-sidebar-value">{project.client}</p>
            </div>
            <div>
              <p className="project-sidebar-label">Tahun</p>
              <p className="project-sidebar-value">{project.year}</p>
            </div>
            <div>
              <p className="project-sidebar-label">Tech Stack</p>
              <div className="project-stack-tags">
                {project.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
            <Link className="btn btn-accent btn-shine" to="/kontak" style={{ marginTop: 8 }}>
              Diskusikan Proyek Serupa
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
