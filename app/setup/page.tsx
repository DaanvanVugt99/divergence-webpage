import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  DownloadIcon,
  MonitorCogIcon,
  WrenchIcon,
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
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Setup",
  description:
    "Choose launcher setup or manual setup for Pokemon Emerald Rogue: Divergence.",
};

const setupOptions = [
  {
    title: "Launcher setup",
    description:
      "Use the desktop launcher for guided setup, updates, and online play.",
    href: "/setup/launcher",
    icon: MonitorCogIcon,
    action: "Use launcher setup",
    hasPreview: true,
  },
  {
    title: "Manual setup",
    description:
      "Patch Divergence yourself. A browser patcher can live here later.",
    href: "/setup/manual",
    icon: WrenchIcon,
    action: "Use manual setup",
    hasPreview: false,
  },
];

export default function SetupPage() {
  return (
    <PageShell
      eyebrow="Setup"
      title="Choose how to set up Divergence"
      description=""
    >
      <div className="space-y-8">
        <div className="grid items-stretch gap-4 lg:grid-cols-2">
          {setupOptions.map((option) => {
            const Icon = option.icon;

            return (
              <Card key={option.title} className="h-full bg-card/90 shadow-xs">
                <CardHeader className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
                  <div className="mt-0.5 rounded-lg border bg-primary/5 p-2 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-2xl">{option.title}</CardTitle>
                  <CardDescription className="col-start-2 text-base leading-7">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto flex flex-col gap-5">
                  {option.hasPreview ? (
                    <div className="px-1">
                      <Image
                        src="/launcher-preview-light.png"
                        alt="Divergence Launcher preview in light mode"
                        width={2464}
                        height={1744}
                        className="mx-auto block h-auto max-h-[340px] w-full object-contain drop-shadow-xl dark:hidden"
                      />
                      <Image
                        src="/launcher-preview-dark-clean.png"
                        alt="Divergence Launcher preview in dark mode"
                        width={2464}
                        height={1744}
                        className="mx-auto hidden h-auto max-h-[340px] w-full object-contain drop-shadow-xl dark:block"
                      />
                    </div>
                  ) : null}
                  <Link
                    href={option.href}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "w-full justify-between",
                    )}
                  >
                    <span>{option.action}</span>
                    <ArrowRightIcon data-icon="inline-end" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <LegalNote />

        <div className="flex flex-col gap-3 rounded-xl border bg-card p-4 text-sm text-muted-foreground shadow-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            Looking for launcher builds? Downloads will initially point to
            GitHub Releases.
          </p>
          <Link
            href="/downloads"
            className={cn(buttonVariants({ variant: "outline" }), "shrink-0")}
          >
            <DownloadIcon data-icon="inline-start" />
            Downloads
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
