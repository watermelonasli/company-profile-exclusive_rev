import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import { POSTS } from "../data/posts.js";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog"
        description="Catatan dan pemikiran tim Katalis Digital seputar rekayasa perangkat lunak, keamanan aplikasi, dan strategi produk digital."
        path="/blog"
      />

      <section className="page-header">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Blog</p>
          </Reveal>
          <Reveal delay={80}>
            <h1>Catatan dari proses kerja kami.</h1>
          </Reveal>
        </div>
      </section>

      <section className="section section-top-tight">
        <div className="wrap blog-list-grid">
          {POSTS.map((p, i) => (
            <Reveal as="div" key={p.slug} delay={(i % 4) * 80}>
              <Link to={`/blog/${p.slug}`} className="blog-card blog-card-lg">
                <div className="blog-card-img">
                  <img src={p.cover} alt={p.title} loading="lazy" />
                </div>
                <span className="blog-card-cat">{p.category} · {formatDate(p.date)}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
