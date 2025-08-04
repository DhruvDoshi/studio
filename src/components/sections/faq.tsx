import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are you affiliated with the Canadian government?",
    answer:
      "No. NBV is a private venture incubator. We support entrepreneurs through business services only.",
  },
  {
    question: "Will I get permanent residency through NBV?",
    answer:
      "NBV does not guarantee PR. Some ventures may be eligible for programs like the Startup Visa or AAIP, but immigration outcomes depend entirely on IRCC.",
  },
  {
    question: "Do you take equity?",
    answer:
      "Yes, in select cases where there is strategic alignment. Equity is never linked to immigration eligibility.",
  },
  {
    question: "Do I need a business background?",
    answer:
      "Yes. NBV works only with operational founders. If you are passive or looking for investor-only roles, we are not the right fit.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Clear answers to common questions about our model, process, and relationship with the Canadian immigration system.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
