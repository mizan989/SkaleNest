import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ParallaxShowcase from "@/components/ParallaxShowcase";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Method from "@/components/Method";
import Industries from "@/components/Industries";
import Results from "@/components/Results";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative selection:bg-gold selection:text-bg">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <ParallaxShowcase />
        <Problem />
        <Services />
        <Method />
        <Industries />
        <Results />
        <About />
        <FAQ />
        <Contact />
        <FinalCTA />
        <Footer />
        <ScrollToTop />
      </main>
    </SmoothScroll>
  );
}

