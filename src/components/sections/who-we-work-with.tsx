import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle } from "lucide-react";

const nonIdealPartners = [
  "Seeking passive investment-based migration",
  "Looking for immigration shortcuts",
  "Submitting shell company concepts",
  "Avoiding operational responsibility",
];

export function WhoWeWorkWith() {
  return (
    <section id="who-we-dont-work-with" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
             <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Who We Don’t Work With
            </h2>
            <p className="text-lg text-foreground/80">
              To maintain our integrity and focus, we are selective about our partners. We are not the right fit for everyone, especially those looking for a passive route to Canada.
            </p>
            <p className="text-lg font-semibold text-primary">
              NBV is a business-first platform. Entry to Canada is not our product — execution is.
            </p>
          </div>
          <div>
            <Card className="bg-card border-destructive/20 shadow-lg">
              <CardHeader>
                 <CardTitle className="font-headline text-xl">We're not the right fit if you're:</CardTitle>
              </CardHeader>
              <CardContent>
                 <ul className="space-y-4">
                  {nonIdealPartners.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                      <p className="text-foreground/90">{point}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <p className="text-xs text-muted-foreground mt-4">
              <strong>Disclaimer:</strong> NBV is not a licensed immigration consultant or government-affiliated entity. All immigration outcomes are solely determined by IRCC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
