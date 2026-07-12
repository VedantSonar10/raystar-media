"use client";

import { Shield, Brain, MessageSquare } from "lucide-react";
import { homePage } from "@/content/site-content";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionReveal } from "@/components/shared/section-reveal";

const icons = [Brain, Shield, MessageSquare];

export function WhyRaystar() {
  const { whyRaystar } = homePage;

  return (
    <section className="surface-dark section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,140,255,0.12),transparent_35%),linear-gradient(180deg,transparent,rgba(5,8,22,0.2),transparent)]" />
      <div className="container-custom relative">
        <SectionReveal>
          <SectionHeading
            label={whyRaystar.label}
            headline={whyRaystar.headline}
            description={whyRaystar.description}
          />
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {whyRaystar.points.map((point, i) => {
            const Icon = icons[i];
            return (
              <SectionReveal key={point.title} delay={i * 0.1}>
                <div className="group h-full rounded-3xl border border-border bg-card p-8 shadow-[0_28px_70px_-45px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_34px_80px_-40px_rgba(91,140,255,0.28)]">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/20 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{point.description}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
