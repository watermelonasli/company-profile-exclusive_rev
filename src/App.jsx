import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppChat from "./components/WhatsAppChat.jsx";
import RouteEffects from "./components/RouteEffects.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import MobileActionBar from "./components/MobileActionBar.jsx";

// Setiap halaman di-lazy-load agar bundle awal tetap kecil — pengguna
// hanya mengunduh kode halaman yang benar-benar mereka kunjungi.
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio.jsx"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.jsx"));
const TestimonialsFAQ = lazy(() => import("./pages/TestimonialsFAQ.jsx"));
const Careers = lazy(() => import("./pages/Careers.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

function PageFallback() {
  return (
    <div className="page-fallback" aria-hidden="true">
      <div className="page-fallback-bar" />
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollProgress />
      <RouteEffects />
      <Navbar />
      <main>
        <Suspense fallback={<PageFallback />}>
          {/* key={pathname} memaksa remount saat rute berpindah, memicu
              animasi fade-in halus lewat class .route-fade di CSS. */}
          <div key={location.pathname} className="route-fade">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/tentang-kami" element={<About />} />
              <Route path="/layanan" element={<Services />} />
              <Route path="/portofolio" element={<Portfolio />} />
              <Route path="/portofolio/:slug" element={<ProjectDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/testimoni-faq" element={<TestimonialsFAQ />} />
              <Route path="/karier" element={<Careers />} />
              <Route path="/kontak" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppChat />
      {/* Hanya tampil di mobile lewat CSS (lihat .mobile-action-bar) */}
      <MobileActionBar />
    </>
  );
}
