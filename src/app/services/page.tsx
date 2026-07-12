import Link from "next/link";
import {
  Target,
  Search,
  Globe,
  Palette,
  Video,
  Share2,
  Send,
  MessageCircle,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import { TickerBar } from "@/components/layout/ticker-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { servicesPage, services, uiCopy } from "@/content/site-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("services");

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  target: Target,
  search: Search,
  globe: Globe,
  palette: Palette,
  video: Video,
  share2: Share2,
  send: Send,
  "message-circle": MessageCircle,
  lightbulb: Lightbulb,
};

export default function ServicesPage() {
  return (
    <>
      <TickerBar />
      <Navbar />
      <main className="pt-32">
        <section className="section-padding pb-12">
          <div className="container-custom">
            <SectionHeading
              label={servicesPage.label}
              headline={servicesPage.headline}
              description={servicesPage.description}
            />
          </div>
        </section>

        <section className="pb-24">
          <div className="container-custom grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Target;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col rounded-3xl border border-border bg-card p-8 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_60px_-28px_rgba(79,124,255,0.25)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-accent">{service.id}</span>
                    <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
                      {service.category}
                    </span>
                  </div>
                  <div className="mt-6 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/20 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    {uiCopy.learnMore}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="section-padding border-t border-border">
          <div className="container-custom text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              {uiCopy.readyToGetStarted}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Book a strategy call and we&apos;ll map out a compliant growth plan for your business.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link href={servicesPage.cta.href}>{servicesPage.cta.label}</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
