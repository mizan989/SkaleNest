import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Work from "@/components/Work";
import CaseStudies from "@/components/CaseStudies";
import HowItWorks from "@/components/HowItWorks";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
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
        <TrustBar />
        <Problem />
        <Services />
        <Work />
        <CaseStudies />
        <HowItWorks />
        <Packages />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
        <FinalCTA />
        <Footer />
        <StickyWhatsApp />
        <ScrollToTop />
      </main>
    </SmoothScroll>
  );
}
