import { useEffect } from "react";

const SITE = "Katalis Digital";
const BASE_URL = "https://katalis-digital.netlify.app";
const JSONLD_ID = "seo-jsonld";

function setMeta(name, content, attr = "name") {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function SEO({ title, description, path = "/", image, jsonLd }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE}` : SITE;
    document.title = fullTitle;

    if (description) {
      setMeta("description", description);
      setMeta("og:title", fullTitle, "property");
      setMeta("og:description", description, "property");
      setMeta("twitter:title", fullTitle);
      setMeta("twitter:description", description);
    }

    if (image) {
      setMeta("og:image", image, "property");
    }

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${BASE_URL}${path}`);

    let script = document.getElementById(JSONLD_ID);
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = JSONLD_ID;
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }
  }, [title, description, path, image, jsonLd]);

  return null;
}
