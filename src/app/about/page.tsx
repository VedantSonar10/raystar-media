import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TickerBar } from "@/components/layout/ticker-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { aboutPage, uiCopy } from "@/content/site-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("about");

export default function AboutPage() {
  const { founder, vision, mission, timeline, raystarGroup } = aboutPage;

  return (
    <>
      <TickerBar />
      <Navbar />
      <main className="pt-32">
        <section className="section-padding pb-12">
          <div className="container-custom max-w-4xl">
            <SectionHeading label={aboutPage.label} headline={aboutPage.headline} />
          </div>
        </section>

        <section className="pb-24">
          <div className="container-custom">
            <div className="grid items-start gap-12 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-card">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {founder.name}
                  </h3>
                  <p className="font-mono text-sm text-muted">{founder.role}</p>
                </div>
              </div>

              <div className="space-y-6 lg:col-span-3">
                <h2 className="max-w-3xl font-heading text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                  {founder.lead}
                </h2>
                {founder.story.map((paragraph, i) => (
                  <p key={i} className="text-base leading-relaxed text-foreground/85 md:text-lg">
                    {paragraph}
                  </p>
                ))}

                <Button size="lg" className="mt-2 gap-2" asChild>
                  <Link href={founder.cta.href}>
                    {founder.cta.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding border-t border-border bg-card/20">
          <div className="container-custom max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              {mission.label}
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
              {mission.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              {mission.description}
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              {vision.label}
            </span>
            {vision.content.map((paragraph, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                {paragraph}
              </p>
            ))}
            <blockquote className="mt-8 rounded-2xl border border-border bg-card p-8">
              <p className="font-heading text-lg italic leading-relaxed text-foreground md:text-xl">
                &ldquo;{vision.quote}&rdquo;
              </p>
            </blockquote>
          </div>
        </section>

        <section className="section-padding border-t border-border">
          <div className="container-custom max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              {uiCopy.timeline}
            </h2>
            <div className="mt-12 space-y-0">
              {timeline.map((item, i) => (
                <div key={item.year} className="relative flex gap-8 pb-12">
                  {i < timeline.length - 1 && (
                    <div className="absolute top-8 left-[27px] h-full w-px bg-border" />
                  )}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-card font-mono text-sm font-bold text-accent">
                    {item.year.slice(2)}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding border-t border-border bg-card/20">
          <div className="container-custom max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              {raystarGroup.label}
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
              {raystarGroup.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              {raystarGroup.description}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
