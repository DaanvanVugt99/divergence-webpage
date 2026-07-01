import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { changelogEntries } from "@/content/changelog";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Release notes and changelog for Divergence.",
};

export default function ChangelogPage() {
  return (
    <PageShell
      eyebrow="Changelog"
      title="Release notes"
      description="Static release notes for v0.1. This can later be connected to GitHub Releases if the project needs automated publishing."
    >
      <div className="space-y-4">
        {changelogEntries.map((entry) => (
          <Card key={entry.version}>
            <CardHeader>
              <CardTitle>{entry.version}</CardTitle>
              <CardDescription>{entry.date}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-6 text-muted-foreground">
                {entry.summary}
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                {entry.changes.map((change) => (
                  <li key={change}>{change}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
