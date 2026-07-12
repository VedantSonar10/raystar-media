"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { homePage, uiCopy } from "@/content/site-content";
import { SectionReveal } from "@/components/shared/section-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  workEmail: z.string().email("Enter a valid work email"),
  phone: z.string().min(6, "Phone is required"),
});

type StrategyLead = z.infer<typeof schema>;

export function FinalCTA() {
  const { finalCta } = homePage;
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<StrategyLead>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitted(true);
  };

  return (
    <section className="surface-dark section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,140,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(176,92,255,0.14),transparent_32%)]" />
      <div className="container-custom">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border/70 bg-card/70 p-6 shadow-[0_32px_100px_-48px_rgba(0,0,0,0.9)] backdrop-blur-2xl md:p-10 lg:p-14">
            <div className="pointer-events-none absolute top-0 right-0 h-[320px] w-[320px] rounded-full bg-accent/10 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-[220px] w-[220px] rounded-full bg-accent-2/10 blur-[100px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="space-y-8">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                    {finalCta.eyebrow}
                  </span>
                  <h2 className="mt-4 max-w-xl font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                    {finalCta.headline}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                    {finalCta.description}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {finalCta.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="rounded-2xl border border-border/70 bg-background/40 p-4 backdrop-blur-sm"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-positive/10">
                        <Check className="h-4 w-4 text-positive" />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/90">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-border/70 bg-background/30 p-5 backdrop-blur-sm">
                  <p className="text-sm leading-relaxed text-muted">
                    {finalCta.highlights.join(" • ")}
                  </p>
                </div>
              </div>

              <div className="relative rounded-[2rem] border border-border/80 bg-white/8 p-5 shadow-[0_28px_80px_-36px_rgba(0,0,0,0.85)] backdrop-blur-2xl md:p-8">
                <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] opacity-80" />
                <div className="relative">
                  {submitted ? (
                    <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[1.5rem] border border-border/70 bg-background/40 p-8 text-center">
                      <p className="font-heading text-2xl font-semibold text-foreground">
                        Request received.
                      </p>
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                        We&apos;ll follow up shortly with the next step. You can also jump straight to the
                        call booking page below.
                      </p>
                      <Button className="mt-6 gap-2" asChild>
                        <Link href={finalCta.cta.href}>
                          {uiCopy.bookStrategyCall}
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div>
                        <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                          {finalCta.form.title}
                        </span>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {finalCta.form.description}
                        </p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">{finalCta.form.fields.firstName.label}</Label>
                          <Input id="firstName" placeholder={finalCta.form.fields.firstName.placeholder} {...register("firstName")} />
                          {errors.firstName && (
                            <p className="text-xs text-negative">{errors.firstName.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">{finalCta.form.fields.lastName.label}</Label>
                          <Input id="lastName" placeholder={finalCta.form.fields.lastName.placeholder} {...register("lastName")} />
                          {errors.lastName && (
                            <p className="text-xs text-negative">{errors.lastName.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="workEmail">{finalCta.form.fields.workEmail.label}</Label>
                        <Input id="workEmail" type="email" placeholder={finalCta.form.fields.workEmail.placeholder} {...register("workEmail")} />
                        {errors.workEmail && (
                          <p className="text-xs text-negative">{errors.workEmail.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">{finalCta.form.fields.phone.label}</Label>
                        <Input id="phone" placeholder={finalCta.form.fields.phone.placeholder} {...register("phone")} />
                        {errors.phone && <p className="text-xs text-negative">{errors.phone.message}</p>}
                      </div>

                      <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                        {finalCta.form.submit}
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>

                      <p className="text-xs leading-relaxed text-muted">{finalCta.form.note}</p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
