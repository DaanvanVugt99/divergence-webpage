import Link from "next/link";

import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/45">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-8 text-sm text-muted-foreground sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-medium text-foreground">{siteConfig.name}</p>
          <p className="mt-2 max-w-2xl">
            Fan-made project information site. No base Pokemon Emerald ROMs are
            hosted, distributed, or linked here.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link className="hover:text-foreground" href="/legal">
            Legal notes
          </Link>
          <Link className="hover:text-foreground" href="/downloads">
            Downloads
          </Link>
          <a
            className="hover:text-foreground"
            href={siteConfig.repositoryUrl}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
