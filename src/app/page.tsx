import Navbar from "@/components/navbar";
import PatternBackground from "@/components/pattern-background";
import ScrollIndicator from "@/components/scroll-indicator";
import SplineModel from "@/components/spline-model";
import { Spotlight } from "@/components/spot-light";
import About from "@/layouts/about";
import Biography from "@/layouts/biography";
import Contact from "@/layouts/contact";
import Footer from "@/layouts/footer";
import Hero from "@/layouts/hero";
import TechnicalSkills from "@/layouts/technical-skills";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-x-hidden">
      <Navbar />
      <PatternBackground />
      <Spotlight className="-top-8 -left-12 h-[500px] md:h-[700px] md:left-40 lg:left-64" />
      <Spotlight
        className="top-16 -left-16 h-[450px] md:h-[600px] md:-left-8"
        fill="#61CC9C"
      />
      <ScrollIndicator />
      <Hero />
      <SplineModel />
      <About />
      <Biography />
      <TechnicalSkills />
      <Contact />
      <Footer />
    </main>
  );
}
