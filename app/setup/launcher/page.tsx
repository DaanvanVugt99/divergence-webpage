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
import { launcherRelease } from "@/content/site";
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

export default function LauncherSetupPage() {
  return (
    <PageShell
      eyebrow="Launcher setup"
      title="Launcher setup"
      description="Use the optional desktop launcher for the cleanest local setup flow. The launcher does not include a base Pokemon Emerald ROM."
      backHref="/setup"
      backLabel="Setup"
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
            <ol className="grid gap-2">
              {setupSteps.map((step, index) => (
                <li
                  key={step}
                  className="grid grid-cols-[2rem_1fr] items-center gap-3 rounded-lg border bg-secondary/35 px-3 py-2.5 text-sm leading-6 text-muted-foreground"
                >
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="text-foreground/85">{step}</span>
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
              {launcherRelease.label} is the current test build linked from this site.
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
