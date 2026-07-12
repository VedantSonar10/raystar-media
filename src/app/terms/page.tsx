import { TickerBar } from "@/components/layout/ticker-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { legalPages } from "@/content/site-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("terms");

export default function TermsPage() {
  const { terms } = legalPages;

  return (
    <>
      <TickerBar />
      <Navbar />
      <main className="pt-32">
        <section className="surface-light">
          <div className="container-custom max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
              {terms.label}
            </span>
            <h1 className="mt-4 font-heading text-3xl font-bold text-foreground">
              {terms.headline}
            </h1>
            <p className="mt-6 text-muted leading-relaxed">{terms.description}</p>

            <div className="mt-12 space-y-8">
              {terms.sections.map((section) => (
                <div key={section.title} className="rounded-3xl border border-border bg-card p-6 md:p-8">
                  <h2 className="font-heading text-xl font-semibold text-foreground">{section.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
