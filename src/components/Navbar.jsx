import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const PRIMARY_LINKS = [
  { to: "/", label: "Beranda", end: true },
  { to: "/layanan", label: "Layanan" },
  { to: "/portofolio", label: "Portofolio" },
  { to: "/blog", label: "Blog" },
];

const MORE_LINKS = [
  { to: "/tentang-kami", label: "Tentang Kami" },
  { to: "/testimoni-faq", label: "Testimoni & FAQ" },
  { to: "/karier", label: "Karier" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap navbar-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M7 4 L7 20 M7 12 L17 4 M7 12 L17 20" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="brand-name">Katalis</span>
        </NavLink>

        <nav className="nav-links" aria-label="Navigasi utama">
          {PRIMARY_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}>
              {l.label}
            </NavLink>
          ))}

          <div
            className="nav-more"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              className="nav-more-trigger"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((v) => !v)}
            >
              Lainnya
              <span aria-hidden="true">⌄</span>
            </button>
            {moreOpen && (
              <div className="nav-more-menu">
                {MORE_LINKS.map((l) => (
                  <NavLink key={l.to} to={l.to} onClick={() => setMoreOpen(false)}>
                    {l.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        <Link className="btn btn-accent nav-cta" to="/kontak">
          Mulai Proyek
        </Link>

        <button
          className="nav-toggle"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {[...PRIMARY_LINKS, ...MORE_LINKS].map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <Link className="btn btn-accent" to="/kontak" onClick={() => setOpen(false)}>
            Mulai Proyek
          </Link>
        </div>
      )}
    </header>
  );
}
