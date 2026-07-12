import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TickerBar } from "@/components/layout/ticker-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/shared/section-heading";
import { insightsPage } from "@/content/site-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("insights");

export default function InsightsPage() {
  return (
    <>
      <TickerBar />
      <Navbar />
      <main className="pt-32">
        <section className="section-padding pb-12">
          <div className="container-custom">
            <SectionHeading
              label={insightsPage.label}
              headline={insightsPage.headline}
              description={insightsPage.description}
            />
          </div>
        </section>

        <section className="pb-24">
          <div className="container-custom space-y-4">
            {insightsPage.articles.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-accent/30 md:flex-row md:items-center md:justify-between md:p-8"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
                      {article.category}
                    </span>
                    <span className="font-mono text-xs text-muted">{article.readTime}</span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-accent md:text-xl">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
                </div>
                <ArrowUpRight className="mt-4 h-5 w-5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:mt-0" />
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
