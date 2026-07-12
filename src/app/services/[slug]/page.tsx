import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { TickerBar } from "@/components/layout/ticker-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { services, uiCopy } from "@/content/site-content";
import { getServiceBySlug } from "@/lib/utils";
import { createMetadata } from "@/lib/metadata";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createMetadata(undefined, {
    title: `${service.name} | RayStar Media`,
    description: service.summary,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <TickerBar />
      <Navbar />
      <main className="pt-32">
        <section className="section-padding pb-12">
          <div className="container-custom max-w-4xl">
            <span className="font-mono text-xs text-accent">{service.id}</span>
            <span className="ml-4 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
              {service.category}
            </span>
            <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {service.headline}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              {service.overview}
            </p>
          </div>
        </section>

        <section className="pb-12">
          <div className="container-custom max-w-4xl">
            <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
              <h2 className="font-heading text-xl font-semibold text-foreground">
                {uiCopy.whatsIncluded}
              </h2>
              <ul className="mt-6 space-y-4">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-sm leading-relaxed text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="container-custom max-w-4xl">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              {uiCopy.whoThisIsFor}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {service.audience.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding border-t border-border">
          <div className="container-custom max-w-4xl text-center">
            <p className="text-lg text-muted">{service.cta}</p>
            <Button size="lg" className="mt-8 gap-2" asChild>
              <Link href="/strategy-call">
                {uiCopy.bookStrategyCall}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
