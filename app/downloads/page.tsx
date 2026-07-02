import type { Metadata } from "next";
import Link from "next/link";
import {
  AppleIcon,
  DownloadIcon,
  ExternalLinkIcon,
  MonitorIcon,
  PackageIcon,
} from "lucide-react";

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
import { getLauncherRelease } from "@/lib/launcher-release";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Launcher download notes for Pokemon Emerald Rogue: Divergence.",
};

export default async function DownloadsPage() {
  const launcherRelease = await getLauncherRelease();
  const downloadCards = [
    {
      platform: "macOS Apple Silicon",
      description:
        "For Apple Silicon Macs. Use the latest release if macOS warns about an older download.",
      asset: launcherRelease.mac,
      icon: AppleIcon,
    },
    {
      platform: "Windows x64",
      description:
        "For 64-bit Windows. The launcher stays separate from your emulator and ROM files.",
      asset: launcherRelease.windows,
      icon: MonitorIcon,
    },
  ];

  return (
    <PageShell
      eyebrow="Downloads"
      title="Launcher downloads"
      description="The launcher is optional. Use it for the guided desktop flow, or keep using the patched ROM in a normal emulator."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <PackageIcon className="size-5 text-primary" />
              <CardTitle>Current launcher release</CardTitle>
              <CardDescription>
                {launcherRelease.label} is published from GitHub Releases.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-sm leading-6 text-muted-foreground">
                These buttons are loaded from the latest non-draft launcher
                release on GitHub. If a platform file is unavailable, use the
                release page to check whether that build has been published.
              </p>
              {launcherRelease.source === "fallback" ? (
                <p className="text-sm leading-6 text-muted-foreground">
                  GitHub release metadata is temporarily unavailable, so this
                  page is showing the last known release.
                </p>
              ) : null}
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={launcherRelease.releaseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "w-full sm:w-auto",
                  )}
                >
                  <ExternalLinkIcon data-icon="inline-start" />
                  Open release page
                </a>
                <a
                  href={siteConfig.launcherReleasesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "w-full sm:w-auto",
                  )}
                >
                  <ExternalLinkIcon data-icon="inline-start" />
                  All releases
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            {downloadCards.map((download) => {
              const Icon = download.icon;

              return (
                <Card key={download.platform}>
                  <CardHeader>
                    <Icon className="size-5 text-primary" />
                    <CardTitle>{download.platform}</CardTitle>
                    <CardDescription>{download.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="wrap-break-words font-mono text-xs text-muted-foreground">
                      {download.asset?.name ?? "Not available in this release"}
                    </p>
                    {download.asset ? (
                      <a
                        href={download.asset.downloadUrl}
                        className={cn(
                          buttonVariants({ size: "lg" }),
                          "w-full justify-between",
                        )}
                      >
                        <span>Download ZIP</span>
                        <DownloadIcon data-icon="inline-end" />
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        className={cn(
                          buttonVariants({ variant: "outline", size: "lg" }),
                          "w-full justify-between opacity-55",
                        )}
                      >
                        <span>Unavailable</span>
                        <DownloadIcon data-icon="inline-end" />
                      </span>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <LegalNote />
          <Card>
            <CardHeader>
              <CardTitle>Smoke-test path</CardTitle>
              <CardDescription>
                Use this flow for the current launcher build.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                <li>Download the launcher ZIP for your platform.</li>
                <li>Extract it and open the launcher.</li>
                <li>Select your own legally obtained Pokemon Emerald ROM.</li>
                <li>Apply the Divergence patch.</li>
                <li>Configure mGBA, then launch or export the patched ROM.</li>
              </ol>
            </CardContent>
          </Card>
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
