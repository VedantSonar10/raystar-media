"use client";

import { homePage } from "@/content/site-content";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionReveal } from "@/components/shared/section-reveal";

export function Process() {
  const { process } = homePage;

  return (
    <section className="surface-dark section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent-2/10 blur-[120px]" />
      <div className="container-custom relative">
        <SectionReveal>
          <SectionHeading
            label={process.label}
            headline={process.headline}
            description={process.description}
          />
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <SectionReveal key={step.number} delay={i * 0.1}>
              <div className="group relative h-full rounded-3xl border border-border bg-card p-8 shadow-[0_28px_70px_-45px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/30">
                <span className="font-mono text-4xl font-bold gradient-text">{step.number}</span>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-accent/50 to-transparent" />
                <h3 className="mt-6 font-heading text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
