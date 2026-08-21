import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../lib/analytics.js";

export default function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    const id = setTimeout(() => trackPageView(pathname, document.title), 50);
    return () => clearTimeout(id);
  }, [pathname]);

  return null;
}
