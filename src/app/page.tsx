import { TickerBar } from "@/components/layout/ticker-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { WhoWeHelp } from "@/components/home/who-we-help";
import { WhyRaystar } from "@/components/home/why-raystar";
import { ServicesPreview } from "@/components/home/services-preview";
import { Process } from "@/components/home/process";
import { FAQ } from "@/components/home/faq";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <TickerBar />
      <Navbar />
      <main>
        <Hero />
        <WhoWeHelp />
        <WhyRaystar />
        <ServicesPreview />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
