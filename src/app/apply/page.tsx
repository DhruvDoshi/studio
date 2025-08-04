import { ApplicationForm } from "@/components/application-form";

export default function ApplyPage() {
  return (
    <section id="apply" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Build?
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Tell us about your business. We only work with founders who are building something real. This application is designed to understand your business vision — not your visa goals.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ApplicationForm />
        </div>
      </div>
    </section>
  );
}
