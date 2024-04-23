import { Button } from "@/components/ui/button";
import { HeroHigh } from "@/components/ui/HeroHighlight";
import { StickyScrollReveal } from "@/components/ui/stickyscrollreveal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col dark">
      {/* <div className="flex flex-row justify-between dark:bg-black py-5 px-10">
        <p className="text-lg">StudySync</p>
        <Button variant="secondary">Register</Button>
      </div> */}
      <HeroHigh />
      <StickyScrollReveal />
      <div style={{height: 500}}>
        a
      </div>
    </main>
  );
}
