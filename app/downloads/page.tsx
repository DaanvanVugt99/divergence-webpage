import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLinkIcon, PackageIcon } from "lucide-react";

import { LegalNote } from "@/components/legal-note";
import { PageShell } from "@/components/page-shell";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Launcher download notes for Pokemon Emerald Rogue: Divergence.",
};

export default function DownloadsPage() {
  return (
    <PageShell
      eyebrow="Downloads"
      title="Launcher downloads"
      description="The launcher is optional. GitHub Releases will be the initial home for launcher builds while the download process matures."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <Card>
          <CardHeader>
            <PackageIcon className="size-5 text-primary" />
            <CardTitle>GitHub Releases</CardTitle>
            <CardDescription>
              Placeholder link until the real launcher release repository is
              available.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-sm leading-6 text-muted-foreground">
              v0.1 links users out to GitHub instead of proxying or hosting
              launcher files here. Direct platform buttons can be added later
              once release assets, checksums, and legal copy are ready.
            </p>
            <a
              href={siteConfig.launcherReleasesUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
            >
              <ExternalLinkIcon data-icon="inline-start" />
              Open GitHub Releases
            </a>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <LegalNote />
          <Card>
            <CardHeader>
              <CardTitle>Native emulator play remains supported</CardTitle>
              <CardDescription>
                This site is not a launcher gate.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
              <p>
                You do not need the launcher to understand or play Divergence.
                Use the setup guide if you prefer a standard emulator workflow.
              </p>
              <Link
                href="/setup"
                className="font-medium text-primary hover:text-foreground"
              >
                Read setup guide
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
