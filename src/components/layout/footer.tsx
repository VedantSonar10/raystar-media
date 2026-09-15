import Image from "next/image";
import Link from "next/link";
import { footer, siteConfig } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container-custom section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="group flex items-center">
  <Image
    src="/raystar-media-logo.png"
    alt="Raystar Media"
    width={220}
    height={89}
    priority
    className="h-12 w-auto md:h-13"
  />
</Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">{footer.description}</p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs text-muted">{footer.statusBar.left}</p>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                siteConfig.acceptingClients ? "animate-pulse-dot bg-positive" : "bg-muted"
              )}
            />
            <span className="font-mono text-xs text-positive">{footer.statusBar.status}</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted">{siteConfig.copyright}</p>
          <div className="flex gap-6">
            {footer.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MinimalFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-custom flex flex-col items-center gap-2 text-center">
        <Link href="/" className="font-mono text-sm font-bold tracking-wider text-cyan">
          RAYSTAR_MEDIA
        </Link>
        <p className="text-xs text-muted">{siteConfig.copyright}</p>
      </div>
    </footer>
  );
}
