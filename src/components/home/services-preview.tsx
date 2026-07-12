"use client";

import Link from "next/link";
import {
  Target,
  Share2,
  TrendingUp,
  Search,
  Globe,
  Palette,
  Video,
  Send,
  MessageCircle,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import { homePage, uiCopy } from "@/content/site-content";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionReveal } from "@/components/shared/section-reveal";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  target: Target,
  share2: Share2,
  "trending-up": TrendingUp,
  search: Search,
  globe: Globe,
  palette: Palette,
  video: Video,
  send: Send,
  "message-circle": MessageCircle,
  lightbulb: Lightbulb,
};

export function ServicesPreview() {
  const { servicesPreview } = homePage;

  return (
    <section className="surface-light section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(176,92,255,0.08),transparent_28%),radial-gradient(circle_at_top_left,rgba(79,124,255,0.08),transparent_30%)]" />
      <div className="container-custom">
        <SectionReveal>
          <SectionHeading
            label={servicesPreview.label}
            headline={servicesPreview.headline}
            description={servicesPreview.description}
          />
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {servicesPreview.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Target;
            return (
              <SectionReveal key={service.id} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_60px_-28px_rgba(79,124,255,0.25)]"
                >
                  <span className="font-mono text-xs text-accent">{service.id}</span>
                  <div className="mt-4 mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/20 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors group-hover:text-accent-2">
                    {uiCopy.learnMore}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href={servicesPreview.cta.href}>{uiCopy.viewAllServices}</Link>
          </Button>
        </SectionReveal>
      </div>
    </section>
  );
}
