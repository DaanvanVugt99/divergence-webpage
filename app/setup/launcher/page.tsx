import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeftIcon,
  CheckCircle2Icon,
  DownloadIcon,
  ExternalLinkIcon,
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
import { getLauncherRelease } from "@/lib/launcher-release";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Launcher Setup",
  description:
    "Install and use the optional Divergence Launcher.",
};

const setupSteps = [
  "Download the launcher ZIP for your platform.",
  "Extract the app and open Divergence Launcher.",
  "Choose your own legally obtained Pokemon Emerald ROM.",
  "Let the launcher verify the ROM checksum and apply the local Divergence patch.",
  "Configure an externally installed mGBA path.",
  "Launch mGBA from the launcher, or export the patched ROM for another emulator.",
];

export default async function LauncherSetupPage() {
  const launcherRelease = await getLauncherRelease();

  return (
    <PageShell
      eyebrow="Launcher setup"
      title="Launcher setup"
      description="Use the optional desktop launcher for the cleanest local setup flow. The launcher does not include a base Pokemon Emerald ROM."
    >
      <div className="space-y-6">
        <LegalNote />
        <Card>
          <CardHeader>
            <CardTitle>Setup checklist</CardTitle>
            <CardDescription>
              The launcher verifies, patches, stores, and launches the managed
              Divergence ROM locally.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              {setupSteps.map((step, index) => (
                <li
                  key={step}
                  className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-6 text-muted-foreground"
                >
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CheckCircle2Icon className="size-5 text-primary" />
            <CardTitle>Current launcher release</CardTitle>
            <CardDescription>
              {launcherRelease.label} is the current test build linked from
              this site.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 sm:flex-row">
            <Link href="/downloads" className={cn(buttonVariants())}>
              <DownloadIcon data-icon="inline-start" />
              Downloads
            </Link>
            <a
              href={launcherRelease.releaseUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <ExternalLinkIcon data-icon="inline-start" />
              GitHub release
            </a>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/setup"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <ArrowLeftIcon data-icon="inline-start" />
            Back to setup
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
