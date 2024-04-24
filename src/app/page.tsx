import { HeroHigh } from "@/components/ui/HeroHighlight";
import { StickyScrollReveal } from "@/components/ui/stickyscrollreveal";
import Sparkles from "@/components/ui/sparkles";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { InfiniteMovinfCardsTestimonial } from "@/components/ui/InfiniteMovinfCardsTestimonial";
import Footer from "@/components/custom/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col dark">
      <HeroHigh />
      <StickyScrollReveal />
      <Sparkles title="Biggest Contributors to this platform" />
      <CanvasRevealEffect />
      <InfiniteMovinfCardsTestimonial />
      <Footer />
    </main>
  );
}
