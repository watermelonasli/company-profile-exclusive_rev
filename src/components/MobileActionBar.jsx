import { Link } from "react-router-dom";
import { trackEvent } from "../lib/analytics.js";

const PHONE = "6281199988877";

/**
 * Bar aksi mengambang khusus mobile (disembunyikan di desktop lewat CSS,
 * lihat .mobile-action-bar di index.css). Pola ini umum di app/produk
 * premium: CTA utama selalu satu jangkauan ibu jari, dan sekaligus
 * mengisi ruang kosong di bagian paling bawah layar saat halaman
 * di-scroll di HP.
 */
export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar" role="navigation" aria-label="Aksi cepat">
      {/* <a
        className="mobile-action-item"
        href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Halo Katalis Digital, saya ingin bertanya")}`}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent("mobile_bar_whatsapp_click")}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.97L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.1h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.19 8.19 0 0 1-1.26-4.34c0-4.53 3.69-8.22 8.24-8.22 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.53-3.69 8.17-8.24 8.17Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.76-1.85-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.48-.02-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.41 1.02 2.58.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z"
          />
        </svg>
        <span>WhatsApp</span>
      </a> */}

      <Link
        className="mobile-action-item mobile-action-primary"
        to="/kontak"
        onClick={() => trackEvent("mobile_bar_cta_click")}
      >
        <span>Mulai Proyek</span>
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}
