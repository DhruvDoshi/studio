import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const whyNbvPoints = [
  "100% compliance with IRCC and AAIP guidelines",
  "Transparent equity participation (not tied to permits)",
  "Credible startup ecosystem positioning",
  "Designed to resonate with officers, not exploit them",
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Who We Are
            </h2>
            <p className="text-lg text-foreground/80">
              NBV is a venture-building platform headquartered in Canada, supporting innovative founders through incubation, mentorship, and business validation. Our role is to bridge serious entrepreneurs with Canadian economic opportunities — with a firm focus on execution, not immigration promises.
            </p>
            <h3 className="font-headline text-2xl font-bold pt-4">Our Mission</h3>
            <p className="text-lg text-foreground/80">
              To empower globally ambitious entrepreneurs with the tools, insights, and strategic support needed to launch viable ventures in Canada — and beyond.
            </p>
            <h3 className="font-headline text-2xl font-bold pt-4">Our Approach</h3>
            <p className="text-lg text-foreground/80">
              We don’t offer pathways. We offer performance. NBV aligns with Canadian policy by focusing on real-world traction, not loophole-based entry.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Why NBV?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {whyNbvPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground/90">{point}</p>
                  </div>
                ))}
                <div className="flex flex-wrap gap-4 pt-4">
                    <Button variant="outline" asChild>
                        <Link href="#">Meet Our Team <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="#">Learn About Our Network <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
