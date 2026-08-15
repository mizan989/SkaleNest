import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import AmbientSpotlight from "@/components/AmbientSpotlight";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Method from "@/components/Method";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import Results from "@/components/Results";
import WhyUs from "@/components/WhyUs";
import Referral from "@/components/Referral";
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
        <AmbientSpotlight />
        <Navbar />
        <Hero />
        <Problem />
        <Services />
        <Method />
        <Process />
        <Industries />
        <Results />
        <WhyUs />
        <Referral />
        <About />
        <FAQ />
        <Contact />
        <FinalCTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
