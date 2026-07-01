import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, DownloadIcon } from "lucide-react";

import { LegalNote } from "@/components/legal-note";
import { PageShell } from "@/components/page-shell";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Launcher Setup",
  description:
    "Launcher setup placeholder for Pokemon Emerald Rogue: Divergence.",
};

export default function LauncherSetupPage() {
  return (
    <PageShell
      eyebrow="Launcher setup"
      title="Launcher setup"
      description="This page will guide the optional Divergence Launcher flow. For now, launcher builds will live on the downloads page."
    >
      <div className="space-y-6">
        <LegalNote />
        <Card>
          <CardHeader>
            <CardTitle>Coming soon</CardTitle>
            <CardDescription>
              This page will explain installing the launcher, selecting your own
              legally obtained Pokemon Emerald ROM, applying Divergence, and
              launching or exporting for native emulator play.
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/downloads" className={cn(buttonVariants())}>
            <DownloadIcon data-icon="inline-start" />
            Launcher downloads
          </Link>
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
