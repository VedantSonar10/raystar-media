import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  headline: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  headline,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {headline}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>
      )}
    </div>
  );
}
