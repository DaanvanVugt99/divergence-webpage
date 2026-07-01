import Link from "next/link";
import {
  BookOpenIcon,
  DownloadIcon,
  Gamepad2Icon,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react";

import { LegalNote } from "@/components/legal-note";
import { TitleScreenWindow } from "@/components/title-screen-window";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const featureCards = [
  {
    title: "Native emulator friendly",
    description:
      "The launcher is optional. Standard emulator play remains supported.",
    icon: Gamepad2Icon,
  },
  {
    title: "Launcher downloads",
    description:
      "Download the optional desktop launcher for macOS or Windows.",
    icon: SparklesIcon,
  },
  {
    title: "Bring your own ROM",
    description:
      "This site does not provide or link to a base Pokemon Emerald ROM.",
    icon: ShieldCheckIcon,
  },
];

const statusItems = [
  {
    label: "Launcher requirement",
    value: "Optional",
  },
  {
    label: "Base ROM hosting",
    value: "Not provided",
  },
  {
    label: "Initial downloads",
    value: "GitHub Releases",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b bg-[radial-gradient(circle_at_80%_18%,oklch(0.68_0.18_158_/_0.42),transparent_25rem),radial-gradient(circle_at_20%_20%,oklch(0.5_0.16_285_/_0.25),transparent_28rem),linear-gradient(135deg,oklch(0.15_0.04_220),oklch(0.2_0.07_178)_58%,oklch(0.13_0.035_225))]">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300/45 to-transparent" />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.78fr)] lg:px-8 lg:py-16">
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/78">
              {siteConfig.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/setup"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-white text-slate-950 hover:bg-emerald-50 sm:w-auto"
                )}
              >
                <BookOpenIcon data-icon="inline-start" />
                Setup guide
              </Link>
              <Link
                href="/downloads"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full border-white/20 bg-white/10 text-white hover:bg-white/15 hover:text-white sm:w-auto"
                )}
              >
                <DownloadIcon data-icon="inline-start" />
                Launcher downloads
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[460px] lg:max-w-[500px]">
            <div className="absolute inset-8 rounded-full bg-emerald-400/25 blur-3xl" />
            <div className="absolute inset-16 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative rotate-1">
              <TitleScreenWindow />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <LegalNote />
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {statusItems.map((item) => (
            <Card key={item.label} className="bg-secondary/45 shadow-xs">
              <CardHeader>
                <CardDescription>{item.label}</CardDescription>
                <CardTitle>{item.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {featureCards.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card key={feature.title} className="bg-card/80 shadow-xs">
                <CardHeader>
                  <Icon className="size-5 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
