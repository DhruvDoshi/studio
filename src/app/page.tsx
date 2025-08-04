import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Programs } from "@/components/sections/programs";
import { WhoWeWorkWith } from "@/components/sections/who-we-work-with";
import { Faq } from "@/components/sections/faq";
import { Application } from "@/components/sections/application";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Programs />
      <WhoWeWorkWith />
      <Application />
      <Faq />
      <Contact />
    </div>
  );
}
