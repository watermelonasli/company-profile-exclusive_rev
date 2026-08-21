const CLIENTS = [
  "Sigap Rantai Nusantara",
  "Bank Mitra Sejahtera",
  "Warungku Group",
  "Yayasan Cerdas Nusantara",
  "Nusantara Retail",
  "Kirana Finance",
  "Papan Cerdas",
  "Rantai Sejahtera",
];

export default function Marquee() {
  // Daftar digandakan supaya animasi scroll terlihat menerus tanpa jeda.
  // Salinan kedua ditandai aria-hidden agar screen reader tidak membaca
  // nama klien yang sama dua kali berturut-turut.
  return (
    <div className="marquee">
      <div className="marquee-track">
        <div className="marquee-set">
          {CLIENTS.map((name) => (
            <span className="marquee-item" key={name}>
              {name}
            </span>
          ))}
        </div>
        <div className="marquee-set" aria-hidden="true">
          {CLIENTS.map((name) => (
            <span className="marquee-item" key={`dup-${name}`}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
