"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/content/site-content";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
          scrolled ? "top-8" : "top-8"
        )}
      >
        <nav
          className={cn(
            "container-custom mx-auto flex h-14 items-center justify-between rounded-2xl px-6 transition-all duration-500",
            scrolled
              ? "glass shadow-lg shadow-black/20"
              : "bg-transparent"
          )}
        >
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

          <div className="hidden items-center gap-8 md:flex">
            {navigation.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <MagneticButton href={navigation.cta.href}>
              <Button size="sm" className="gap-1">
                {navigation.cta.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </MagneticButton>
          </div>

          <button
            type="button"
            className="text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-xl md:hidden"
          >
            {navigation.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-heading font-medium text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <Link href={navigation.cta.href} onClick={() => setMobileOpen(false)}>
                {navigation.cta.label}
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
