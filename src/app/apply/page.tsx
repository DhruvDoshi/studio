import { ApplicationForm } from "@/components/application-form";

export default function ApplyPage() {
  return (
    <section id="apply" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Ready to Build?
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Tell us about your business. We only work with founders who are building something real. This application is designed to understand your business vision — not your visa goals.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl border border-brand-teal/20 p-8">
            <ApplicationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
