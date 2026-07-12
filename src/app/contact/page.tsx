"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Mail, MessageCircle, Calendar, ArrowUpRight } from "lucide-react";
import { TickerBar } from "@/components/layout/ticker-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactPage } from "@/content/site-content";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  companyName: z.string().min(2, "Company name is required"),
  companyType: z.string().min(1, "Please select a company type"),
  message: z.string().min(10, "Please provide more details"),
  budget: z.string().min(1, "Please select a budget range"),
  contactMethod: z.string().min(1, "Please select a contact method"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const altIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  email: Mail,
  whatsapp: MessageCircle,
  linkedin: ArrowUpRight,
  calendly: Calendar,
};

export default function ContactPage() {
  const { form: formContent, alternatives } = contactPage;
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  return (
    <>
      <TickerBar />
      <Navbar />
      <main className="pt-32">
        <section className="section-padding pb-12">
          <div className="container-custom">
            <SectionHeading
              label={contactPage.label}
              headline={contactPage.headline}
              description={contactPage.subheadline}
            />
          </div>
        </section>

        <section className="pb-24">
          <div className="container-custom grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-6 max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                  {contactPage.details.title}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted">{contactPage.details.description}</p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
                {submitted ? (
                  <div className="py-12 text-center">
                    <p className="font-heading text-xl text-foreground">{formContent.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">{formContent.fields.fullName.label}</Label>
                        <Input
                          id="fullName"
                          placeholder={formContent.fields.fullName.placeholder}
                          {...register("fullName")}
                        />
                        {errors.fullName && (
                          <p className="text-xs text-negative">{errors.fullName.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="companyName">{formContent.fields.companyName.label}</Label>
                        <Input
                          id="companyName"
                          placeholder={formContent.fields.companyName.placeholder}
                          {...register("companyName")}
                        />
                        {errors.companyName && (
                          <p className="text-xs text-negative">{errors.companyName.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>{formContent.fields.companyType.label}</Label>
                      <Select onValueChange={(v) => setValue("companyType", v)}>
                        <SelectTrigger>
                          <SelectValue placeholder={formContent.fields.companyType.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {formContent.fields.companyType.options.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.companyType && (
                        <p className="text-xs text-negative">{errors.companyType.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{formContent.fields.message.label}</Label>
                      <Textarea
                        id="message"
                        placeholder={formContent.fields.message.placeholder}
                        {...register("message")}
                      />
                      {errors.message && (
                        <p className="text-xs text-negative">{errors.message.message}</p>
                      )}
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>{formContent.fields.budget.label}</Label>
                        <Select onValueChange={(v) => setValue("budget", v)}>
                          <SelectTrigger>
                            <SelectValue placeholder={formContent.fields.budget.placeholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {formContent.fields.budget.options.map((opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.budget && (
                          <p className="text-xs text-negative">{errors.budget.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label>{formContent.fields.contactMethod.label}</Label>
                        <Select onValueChange={(v) => setValue("contactMethod", v)}>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={formContent.fields.contactMethod.placeholder}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {formContent.fields.contactMethod.options.map((opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.contactMethod && (
                          <p className="text-xs text-negative">{errors.contactMethod.message}</p>
                        )}
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                      {formContent.submit}
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </form>
                )}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {alternatives.label}
              </h3>
              <div className="mt-6 space-y-4">
                {alternatives.items.map((item) => {
                  const Icon = altIcons[item.type] || Mail;
                  return (
                    <Link
                      key={item.type}
                      href={item.href}
                      target={item.type === "calendly" ? "_blank" : undefined}
                      rel={item.type === "calendly" ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent/30"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                        <Icon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        <p className="text-xs text-muted">{item.value}</p>
                      </div>
                      <ArrowUpRight className="ml-auto h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
