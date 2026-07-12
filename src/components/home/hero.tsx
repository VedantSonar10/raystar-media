"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { homePage } from "@/content/site-content";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";

export function Hero() {
  const { hero } = homePage;
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= hero.terminalLines.length) return;

    const currentLine = hero.terminalLines[currentLineIndex];
    const timer = setTimeout(() => {
      if (charIndex < currentLine.length) {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLineIndex] = currentLine.slice(0, charIndex + 1);
          return updated;
        });
        setCharIndex(charIndex + 1);
      } else {
        setCurrentLineIndex(currentLineIndex + 1);
        setCharIndex(0);
      }
    }, 30);

    return () => clearTimeout(timer);
  }, [charIndex, currentLineIndex, hero.terminalLines]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-glow", {
        scale: 0.8,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      });

      gsap.from(".hero-content > *", {
        y: 24,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.to(".hero-float", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden pt-32 pb-20 noise-overlay"
    >
      <div className="hero-glow pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="hero-glow pointer-events-none absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-accent-2/10 blur-[100px]" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="hero-content">
            <motion.span
              initial={false}
              animate={{ opacity: 1 }}
              className="mb-6 inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 font-mono text-xs text-accent"
            >
              {hero.badge}
            </motion.span>

            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              {hero.headline}
              <span className="animate-blink ml-1 inline-block h-[1em] w-[3px] translate-y-[0.1em] bg-accent" />
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {hero.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton href={hero.primaryCta.href}>
                <Button size="lg" className="gap-2">
                  {hero.primaryCta.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </MagneticButton>
              <MagneticButton href={hero.secondaryCta.href}>
                <Button variant="outline" size="lg">
                  {hero.secondaryCta.label}
                </Button>
              </MagneticButton>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="hero-float glass gradient-border rounded-3xl p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-negative/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-positive/80" />
                <span className="ml-2 font-mono text-xs text-muted">raystar_terminal</span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                {displayedLines.map((line, i) => (
                  <p key={i} className="text-accent/90">
                    {line}
                  </p>
                ))}
                {currentLineIndex < hero.terminalLines.length && (
                  <span className="animate-blink inline-block h-4 w-2 bg-accent" />
                )}
              </div>
            </div>

            <div className="hero-float absolute -right-4 -bottom-8 glass rounded-2xl border border-border p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-positive/10">
                  <span className="font-mono text-xs text-positive">▲</span>
                </div>
                <div>
                  <p className="font-mono text-xs text-muted">CPL Trend</p>
                  <p className="font-mono text-lg font-bold text-positive">-73%</p>
                </div>
              </div>
            </div>

            <div className="hero-float absolute -top-4 -left-4 glass rounded-2xl border border-border p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <span className="font-mono text-xs text-accent">✓</span>
                </div>
                <div>
                  <p className="font-mono text-xs text-muted">Compliance</p>
                  <p className="font-mono text-sm font-bold text-foreground">Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
