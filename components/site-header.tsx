import Link from "next/link";
import Image from "next/image";

import { ModeToggle } from "@/components/mode-toggle";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group inline-flex w-fit items-center gap-2">
            <Image
              src="/divergence-wordmark-clean.svg"
              alt={siteConfig.shortName}
              width={460}
              height={96}
              className="h-14 w-auto"
              priority
              unoptimized
            />
          </Link>
          <div className="flex items-center gap-2 lg:gap-4">
            <nav
              aria-label="Main navigation"
              className="hidden flex-wrap gap-1 lg:flex"
            >
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ModeToggle />
          </div>
        </div>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-1 lg:hidden">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
