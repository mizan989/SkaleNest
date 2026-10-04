import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#F7F6F2] text-[#171715]">
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <About />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
