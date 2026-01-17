import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

// Lazy load Contact component (below the fold, heavy EmailJS dependency)
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="text-[var(--text-secondary)]">Loading...</div>
    </div>
  ),
  ssr: true,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <Hero />
      <About />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
