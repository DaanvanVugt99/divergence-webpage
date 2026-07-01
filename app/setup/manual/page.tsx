import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, Gamepad2Icon, WrenchIcon } from "lucide-react";

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
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Manual Setup",
  description:
    "Manual setup notes for Pokemon Emerald Rogue: Divergence.",
};

export default function ManualSetupPage() {
  return (
    <PageShell
      eyebrow="Manual setup"
      title="Manual setup"
      description="Use the patched ROM directly in your emulator without relying on launcher-only features."
      backHref="/setup"
      backLabel="Setup"
    >
      <div className="space-y-6">
        <LegalNote />
        <Card>
          <CardHeader>
            <WrenchIcon className="size-6 text-primary" />
            <CardTitle>Manual path</CardTitle>
            <CardDescription>
              Manual setup is for players who prefer RetroArch, mobile,
              handhelds, or another native emulator workflow.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              <li>Provide your own legally obtained Pokemon Emerald ROM.</li>
              <li>Apply the Divergence patch using a supported patching flow.</li>
              <li>Open the patched `.gba` file in your emulator of choice.</li>
              <li>Use launcher-only online features only when running through the launcher later.</li>
            </ol>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Gamepad2Icon className="size-6 text-primary" />
            <CardTitle>What stays supported</CardTitle>
            <CardDescription>
              The game should remain playable offline as a normal ROM file.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            RetroArch, mobile, handheld, and offline players should still be
            able to use the patched ROM. The launcher is a convenience layer,
            not a browser emulator and not a requirement for normal play.
          </CardContent>
        </Card>
        <Link
          href="/setup"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <ArrowLeftIcon data-icon="inline-start" />
          Back to setup
        </Link>
      </div>
    </PageShell>
  );
}
