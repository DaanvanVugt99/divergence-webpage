import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, WrenchIcon } from "lucide-react";

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
  title: "Manual Setup",
  description:
    "Manual setup placeholder for Pokemon Emerald Rogue: Divergence.",
};

export default function ManualSetupPage() {
  return (
    <PageShell
      eyebrow="Manual setup"
      title="Manual setup"
      description="This page will cover the manual setup path. A browser-based patcher may live here later."
    >
      <div className="space-y-6">
        <LegalNote />
        <Card>
          <CardHeader>
            <WrenchIcon className="size-6 text-primary" />
            <CardTitle>Manual setup placeholder</CardTitle>
            <CardDescription>
              Future manual setup can include patching instructions or a web
              patcher. It will still require users to provide their own legally
              obtained Pokemon Emerald ROM.
            </CardDescription>
          </CardHeader>
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
