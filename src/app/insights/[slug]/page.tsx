import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { TickerBar } from "@/components/layout/ticker-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { insightsPage, uiCopy } from "@/content/site-content";
import { getArticleBySlug } from "@/lib/utils";
import { createMetadata } from "@/lib/metadata";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightsPage.articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return createMetadata(undefined, {
    title: `${article.title} | RayStar Media Insights`,
    description: article.excerpt,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <>
      <TickerBar />
      <Navbar />
      <main className="pt-32">
        <article className="section-padding">
          <div className="container-custom max-w-3xl">
            <Button variant="ghost" size="sm" className="mb-8 gap-2" asChild>
              <Link href="/insights">
                <ArrowLeft className="h-4 w-4" />
                {uiCopy.backToInsights}
              </Link>
            </Button>

            <div className="flex items-center gap-3">
              <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
                {article.category}
              </span>
              <span className="font-mono text-xs text-muted">{article.readTime}</span>
              <span className="font-mono text-xs text-muted">{article.date}</span>
            </div>

            <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {article.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted">{article.excerpt}</p>

            <div className="prose-dark mt-12 space-y-6 text-base leading-relaxed text-muted">
              <p>
                {uiCopy.comingSoon}
              </p>
              <p>
                In the meantime, book a strategy call to discuss this topic directly with our team.
              </p>
            </div>

            <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center">
              <p className="text-muted">
                {uiCopy.strategyPrompt}
              </p>
              <Button className="mt-4" asChild>
                <Link href="/strategy-call">{uiCopy.bookStrategyCall}</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
