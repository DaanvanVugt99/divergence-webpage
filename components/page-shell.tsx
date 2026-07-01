import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeftIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  backHref?: string | null;
  backLabel?: string;
};

export function PageShell({
  eyebrow,
  title,
  description,
  children,
  className,
  backHref = null,
  backLabel = "Home",
}: PageShellProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8",
        className,
      )}
    >
      <div className="max-w-3xl">
        {backHref ? (
          <Link
            href={backHref}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "mb-6 w-fit",
            )}
          >
            <ArrowLeftIcon data-icon="inline-start" />
            {backLabel}
          </Link>
        ) : null}
        {eyebrow ? (
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
}
