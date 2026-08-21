import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-about">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M7 4 L7 20 M7 12 L17 4 M7 12 L17 20" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="brand-name">Katalis</span>
          </div>
          <p className="footer-tagline">
            Studio pengembangan produk digital untuk startup dan perusahaan
            di Indonesia.
          </p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/katalis-digital" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/katalis-digital" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.instagram.com/katalis.digital" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>

        <nav className="footer-nav">
          <p>Perusahaan</p>
          <Link to="/tentang-kami">Tentang Kami</Link>
          <Link to="/karier">Karier</Link>
          <Link to="/kontak">Kontak</Link>
        </nav>

        <nav className="footer-nav">
          <p>Karya</p>
          <Link to="/layanan">Layanan</Link>
          <Link to="/portofolio">Portofolio</Link>
          <Link to="/blog">Blog</Link>
        </nav>

        <nav className="footer-nav">
          <p>Dukungan</p>
          <Link to="/testimoni-faq">Testimoni & FAQ</Link>
          <a href="https://wa.me/6281199988877">WhatsApp</a>
          <a href="mailto:halo@katalis.digital">Email</a>
        </nav>
      </div>

      <div className="wrap footer-bottom">
        <span>© {year} PT Katalis Digital Indonesia.</span>
        <span>Jakarta Selatan, Indonesia</span>
      </div>
    </footer>
  );
}
