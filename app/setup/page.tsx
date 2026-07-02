import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  DownloadIcon,
  Gamepad2Icon,
  HardDriveIcon,
  MonitorCogIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from "lucide-react";

import { PageShell } from "@/components/page-shell";
import { LauncherPreviewZoom } from "@/components/launcher-preview-zoom";
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

const requirements = [
  {
    title: "Pokemon Emerald ROM",
    description: "You provide your own legally obtained ROM. This site does not host one.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Emulator",
    description: "mGBA is officially supported. Other accurate GBA emulators may work, but are community-compatible.",
    icon: Gamepad2Icon,
  },
  {
    title: "Optional launcher",
    description: "The launcher verifies, patches, stores, exports, and launches the managed ROM.",
    icon: HardDriveIcon,
  },
];

export default function SetupPage() {
  return (
    <PageShell
      eyebrow="Setup"
      title="Start here"
      description="Choose the launcher for the guided desktop flow, or use the manual path if you already have an emulator workflow."
    >
      <div className="space-y-8">
        <div className="grid gap-3 md:grid-cols-3">
          {requirements.map((requirement) => {
            const Icon = requirement.icon;

            return (
              <Card key={requirement.title} className="bg-secondary/40 shadow-xs">
                <CardHeader>
                  <Icon className="size-5" />
                  <CardTitle>{requirement.title}</CardTitle>
                  <CardDescription>{requirement.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="space-y-4">
          <Card className="bg-card/90 shadow-xs">
            <CardContent className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1fr)] lg:items-center">
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <MonitorCogIcon className="size-5 shrink-0 text-primary" />
                    <CardTitle className="text-2xl">Launcher setup</CardTitle>
                    <span className="inline-flex h-5 items-center rounded-full bg-primary px-2 text-xs font-medium leading-none text-primary-foreground">
                      Recommended
                    </span>
                  </div>
                  <CardDescription className="text-base leading-7">
                    Use the desktop launcher for guided local setup, checksum
                    verification, patching, export, and native mGBA launch.
                  </CardDescription>
                </div>
                <Link
                  href="/setup/launcher"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full justify-between sm:w-auto",
                  )}
                >
                  <span>Use launcher setup</span>
                  <ArrowRightIcon data-icon="inline-end" />
                </Link>
              </div>

              <div>
                <LauncherPreviewZoom />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/35 shadow-xs">
            <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
                <WrenchIcon className="mt-0.5 size-5 text-primary" />
                <CardTitle>Manual setup</CardTitle>
                <CardDescription className="col-start-2">
                  Use the patched ROM directly in RetroArch, mobile, handheld,
                  or another emulator.
                </CardDescription>
              </div>
              <Link
                href="/setup/manual"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full justify-between sm:w-auto",
                )}
              >
                <span>Use manual setup</span>
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-3 rounded-xl border bg-card p-4 text-sm text-muted-foreground shadow-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            Looking for the current alpha launcher? Downloads point to the
            GitHub prerelease build.
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
