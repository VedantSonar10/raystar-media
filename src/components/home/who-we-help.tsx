"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { homePage } from "@/content/site-content";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionReveal } from "@/components/shared/section-reveal";

export function WhoWeHelp() {
  const { whoWeHelp } = homePage;
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".segment-card");
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="surface-light section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,124,255,0.09),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(176,92,255,0.08),transparent_24%)]" />
      <div className="container-custom">
        <SectionReveal>
          <SectionHeading
            label={whoWeHelp.label}
            headline={whoWeHelp.headline}
            description={whoWeHelp.description}
          />
        </SectionReveal>

        <div ref={gridRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {whoWeHelp.segments.map((segment) => (
            <div
              key={segment.id}
              className="segment-card group opacity-0 rounded-2xl border border-border bg-card p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:bg-card-hover hover:shadow-[0_24px_60px_-30px_rgba(79,124,255,0.25)]"
            >
              <span className="font-mono text-xs text-accent">{segment.id}</span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">
                {segment.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{segment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
