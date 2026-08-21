import { useState } from "react";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import { trackEvent } from "../lib/analytics.js";

// Ganti dengan endpoint Formspree kamu sendiri (lihat README.md)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

const PROJECT_TYPES = ["Website", "Aplikasi Mobile", "Software Custom", "Konsultasi", "Lainnya"];
const BUDGET_RANGES = ["< Rp50 juta", "Rp50–150 juta", "Rp150–500 juta", "> Rp500 juta", "Belum yakin"];

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        trackEvent("contact_form_submit");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <SEO
        title="Kontak"
        description="Diskusikan proyek website, aplikasi mobile, atau software custom kamu dengan tim Katalis Digital. Isi form proyek atau hubungi kami langsung."
        path="/kontak"
      />

      <section className="page-header">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Kontak</p>
          </Reveal>
          <Reveal delay={80}>
            <h1>Ceritakan proyekmu ke kami.</h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="page-header-desc">
              Isi form di bawah, dan tim kami akan menjadwalkan sesi
              discovery call dalam 1x24 jam kerja.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-top-tight">
        <div className="wrap contact-grid">
          <form className="contact-form card-glow" onSubmit={handleSubmit}>
            <div className="form-row-split">
              <div>
                <label htmlFor="name">Nama</label>
                <input id="name" name="name" type="text" required placeholder="Nama lengkap" />
              </div>
              <div>
                <label htmlFor="company">Perusahaan</label>
                <input id="company" name="company" type="text" placeholder="Nama perusahaan (opsional)" />
              </div>
            </div>

            <div className="form-row-split">
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="nama@perusahaan.com" />
              </div>
              <div>
                <label htmlFor="phone">No. WhatsApp</label>
                <input id="phone" name="phone" type="tel" placeholder="08xxxxxxxxxx" />
              </div>
            </div>

            <div className="form-row-split">
              <div>
                <label htmlFor="projectType">Jenis Proyek</label>
                <select id="projectType" name="projectType" defaultValue="" required>
                  <option value="" disabled>Pilih jenis proyek</option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="budget">Estimasi Budget</label>
                <select id="budget" name="budget" defaultValue="">
                  <option value="" disabled>Pilih kisaran budget</option>
                  {BUDGET_RANGES.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="message">Ceritakan proyekmu</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tujuan proyek, target waktu peluncuran, atau tantangan yang dihadapi"
              />
            </div>

            <button className="btn btn-accent btn-shine" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Mengirim…" : "Kirim Pesan"}
            </button>

            {status === "sent" && (
              <p className="form-note form-note-ok">
                Terkirim. Terima kasih, tim kami akan segera menghubungi kamu.
              </p>
            )}
            {status === "error" && (
              <p className="form-note form-note-error">
                Pesan belum terkirim. Pastikan endpoint Formspree sudah diatur, atau hubungi kami via WhatsApp.
              </p>
            )}
          </form>

          <div className="contact-side">
            <div className="contact-map">
              <iframe
                title="Lokasi Kantor Katalis Digital"
                src="https://www.google.com/maps?q=Jakarta%20Selatan&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <dl className="contact-info">
              <div>
                <dt>Kantor</dt>
                <dd>Jl. TB Simatupang, Jakarta Selatan</dd>
              </div>
              <div>
                <dt>Telepon / WhatsApp</dt>
                <dd><a href="https://wa.me/6281199988877">+62 811-9998-8877</a></dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href="mailto:halo@katalis.digital">halo@katalis.digital</a></dd>
              </div>
              <div>
                <dt>Jam Operasional</dt>
                <dd>Senin–Jumat, 09.00–18.00 WIB</dd>
              </div>
            </dl>

            <div className="contact-socials">
              <a href="https://www.linkedin.com/company/katalis-digital" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/katalis-digital" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.instagram.com/katalis.digital" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
