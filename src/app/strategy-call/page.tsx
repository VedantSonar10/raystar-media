import Link from "next/link";
import { Check } from "lucide-react";
import { MinimalFooter } from "@/components/layout/footer";
import { FinalCTA } from "@/components/home/final-cta";
import { strategyCallPage, uiCopy } from "@/content/site-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("strategyCall");

export default function StrategyCallPage() {
  return (
    <>
      <main className="surface-dark min-h-screen pt-16 pb-8">
        <div className="container-custom max-w-3xl">
          <Link
            href="/"
            className="mb-12 inline-block font-mono text-sm font-bold tracking-wider text-cyan"
          >
            RAYSTAR_MEDIA
          </Link>

          <p className="max-w-2xl text-sm leading-relaxed text-muted">{strategyCallPage.intro}</p>

          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {strategyCallPage.headline}
          </h1>

          <ul className="mt-10 space-y-4">
            {strategyCallPage.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-positive/10">
                  <Check className="h-3 w-3 text-positive" />
                </div>
                <span className="text-base text-foreground/90">{point}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-muted">{strategyCallPage.trustLine}</p>

          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card">
            <div className="border-b border-border p-6 text-center">
              <p className="font-mono text-xs text-muted">{uiCopy.calendlyEmbed}</p>
              <p className="mt-2 text-sm text-muted">{uiCopy.selectTimeSlot}</p>
            </div>
            <div className="flex min-h-[600px] items-center justify-center p-8">
              <iframe
                src={strategyCallPage.calendlyEmbed}
                title="Book a Strategy Call"
                className="h-[600px] w-full rounded-xl border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <FinalCTA />
      </main>
      <MinimalFooter />
    </>
  );
}
