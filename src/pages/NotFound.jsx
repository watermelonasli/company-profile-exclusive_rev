import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO title="Halaman Tidak Ditemukan" description="Halaman yang kamu cari tidak tersedia." path="/404" />
      <section className="section not-found">
        <div className="wrap">
          <p className="eyebrow" style={{ justifyContent: "center" }}>404</p>
          <h1>Halaman tidak ditemukan.</h1>
          <p>Halaman yang kamu cari mungkin sudah dipindahkan atau tidak ada.</p>
          <Link className="btn btn-accent btn-shine" to="/">Kembali ke Beranda</Link>
        </div>
      </section>
    </>
  );
}
