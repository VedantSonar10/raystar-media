"use client";

import { ticker } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function TickerBar() {
  const items = [...ticker.items, ...ticker.items];

  return (
    <div className="relative overflow-hidden border-b border-border bg-card/50 py-2">
      <div className="animate-ticker flex w-max items-center gap-8 whitespace-nowrap">
        {items.map((item, i) => (
          <div key={`${item.symbol}-${i}`} className="flex items-center gap-2 font-mono text-xs">
            <span className="text-muted">{item.symbol}</span>
            <span className="text-foreground">{item.value}</span>
            <span
              className={cn(
                item.direction === "up" ? "text-positive" : "text-negative"
              )}
            >
              {item.direction === "up" ? "▲" : "▼"}
              {item.change}
            </span>
            <span className="text-border">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
