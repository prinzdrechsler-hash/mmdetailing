import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";
import Select from "@/components/sections/Select";
import Gallery from "@/components/sections/Gallery";
import WhyUs from "@/components/sections/WhyUs";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <Pricing />
      <Services />
      <Select />
      <Gallery />
      <WhyUs />
      <About />
      <CTA />
    </>
  );
}
