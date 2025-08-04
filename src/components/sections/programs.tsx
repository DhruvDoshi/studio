import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    title: "Startup Incubation",
    description: "Our flagship program supports founders in validating and scaling Canadian ventures, aligning with AAIP FGES/GES expectations and startup visa eligibility.",
    features: [
      "1:1 Venture Coaching",
      "Business Model Refinement",
      "Canadian Market Strategy",
      "Ecosystem Introductions",
      "Compliance-Aware Training",
    ],
    cta: {
      text: "Apply Now",
      href: "/apply",
    },
  },
  {
    title: "Strategic Co-Investment",
    description: "NBV may invest in select startups where alignment is strong. This is offered on a case-by-case basis as strategic equity participation, not a ticket to residency.",
    features: [
      "Case-by-case evaluation",
      "Strategic equity participation",
      "Not an investment for permit scheme",
      "No guaranteed immigration outcome",
    ],
    cta: {
      text: "Explore Investment Criteria",
      href: "#",
    },
  },
  {
    title: "FGES/GES Training (AAIP-Aligned)",
    description: "Structured entrepreneurial development that aligns with Alberta’s AAIP FGES and GES requirements. This is for operational entrepreneurs, not passive investors.",
    features: [
      "Hands-on business training",
      "Business planning support",
      "Milestone tracking",
      "For founders with clear business goals",
    ],
    cta: {
      text: "Start Training",
      href: "#",
    },
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            We provide a suite of services designed to build real, sustainable businesses in Canada. Our focus is on strategic support that creates value and aligns with national economic goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.title} className="flex flex-col bg-card border-border shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={program.cta.href}>
                    {program.cta.text} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
