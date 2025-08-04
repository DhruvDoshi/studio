import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative bg-primary/5 py-24 sm:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl max-w-4xl mx-auto">
          Build Bold Ventures. Backed by Strategy, Not Shortcuts.
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-3xl mx-auto">
          Next Bridge Ventures (NBV) is a Canadian startup incubator for
          globally-minded founders. We support validated ventures — not visa
          seekers — with training, co-investment, and strategic support.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#apply">Apply Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#programs">Explore Our Model</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
