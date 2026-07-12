"use client";

import { homePage } from "@/content/site-content";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionReveal } from "@/components/shared/section-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const { faq } = homePage;

  return (
    <section className="surface-light relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,124,255,0.06),transparent_32%)]" />
      <div className="container-custom">
        <SectionReveal>
          <SectionHeading
            label={faq.label}
            headline={faq.headline}
            description={faq.description}
            align="center"
            className="mx-auto"
          />
        </SectionReveal>

        <SectionReveal className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faq.items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionReveal>
      </div>
    </section>
  );
}
