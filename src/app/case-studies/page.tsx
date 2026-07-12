import { TickerBar } from "@/components/layout/ticker-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/shared/section-heading";
import { caseStudiesPage } from "@/content/site-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("caseStudies");

export default function CaseStudiesPage() {
  return (
    <>
      <TickerBar />
      <Navbar />
      <main className="pt-32">
        <section className="section-padding pb-12">
          <div className="container-custom">
            <SectionHeading
              label={caseStudiesPage.label}
              headline={caseStudiesPage.headline}
              description={caseStudiesPage.description}
            />
          </div>
        </section>

        <section className="pb-24">
          <div className="container-custom space-y-8">
            {caseStudiesPage.studies.map((study) => (
              <div
                key={study.id}
                className="rounded-3xl border border-border bg-card p-8 font-mono md:p-10"
              >
                <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                  <span className="text-xs text-accent">{study.id}</span>
                  <span
                    className={
                      study.status.includes("PROFITABLE")
                        ? "text-xs text-positive"
                        : "text-xs text-muted"
                    }
                  >
                    {study.status}
                  </span>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">Instrument</p>
                    <p className="mt-1 text-sm text-foreground">{study.instrument}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">Duration</p>
                    <p className="mt-1 text-sm text-foreground">{study.duration}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs uppercase tracking-wider text-muted">The Problem</p>
                    <p className="mt-1 text-sm text-foreground">{study.problem}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs uppercase tracking-wider text-muted">The Approach</p>
                    <p className="mt-1 text-sm text-foreground">{study.approach}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">Entry</p>
                    <p className="mt-1 text-sm text-negative">{study.entry}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">Exit</p>
                    <p className="mt-1 text-sm text-positive">{study.exit}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">Return</p>
                    <p className="mt-1 text-lg font-bold text-positive">{study.return}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs uppercase tracking-wider text-muted">Key Insight</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{study.insight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
