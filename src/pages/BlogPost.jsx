import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import NotFound from "./NotFound.jsx";
import { POSTS } from "../data/posts.js";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: post.cover,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "Katalis Digital" },
  };

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.cover}
        jsonLd={jsonLd}
      />

      <section className="page-header">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <Reveal>
            <Link className="text-link" to="/blog">← Kembali ke Blog</Link>
          </Reveal>
          <Reveal delay={60}>
            <p className="eyebrow" style={{ marginTop: 24 }}>
              {post.category} · {formatDate(post.date)}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1>{post.title}</h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="page-header-desc">Ditulis oleh {post.author}</p>
          </Reveal>
        </div>
      </section>

      <Reveal as="div" className="wrap project-cover">
        <img src={post.cover} alt={post.title} loading="lazy" />
      </Reveal>

      <section className="section">
        <div className="wrap article-body">
          {post.content.map((para, i) => (
            <Reveal as="p" key={i} delay={i * 60}>
              {para}
            </Reveal>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-tint">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">Baca Juga</p>
            </Reveal>
            <div className="blog-list-grid" style={{ marginTop: 24 }}>
              {related.map((p, i) => (
                <Reveal as="div" key={p.slug} delay={i * 90}>
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
          </div>
        </section>
      )}
    </>
  );
}
