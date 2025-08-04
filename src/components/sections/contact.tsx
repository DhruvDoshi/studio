import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

const contactDetails = [
  {
    icon: Mail,
    text: "info@nextbridgeventures.ca",
    href: "mailto:info@nextbridgeventures.ca"
  },
  {
    icon: MapPin,
    text: "Calgary, Alberta, Canada",
    href: "#"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let’s Talk Business
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Interested in building your venture in Canada with integrity and real traction? Reach out to start the conversation.
          </p>
        </div>
        <div className="max-w-md mx-auto space-y-6 text-center">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-center justify-center gap-4">
              <detail.icon className="h-6 w-6 text-primary" />
              <Link href={detail.href} className="text-lg hover:underline">
                {detail.text}
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/apply">Apply Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#">Book an Intro Call</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
