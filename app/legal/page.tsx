import type { Metadata } from "next";

import { LegalNote } from "@/components/legal-note";
import { PageShell } from "@/components/page-shell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Legal Notes",
  description:
    "Legal and distribution notes for Pokemon Emerald Rogue: Divergence.",
};

const legalSections = [
  {
    title: "No base ROM distribution",
    description:
      "This website does not host, distribute, bundle, or link to a base Pokemon Emerald ROM.",
  },
  {
    title: "Bring your own legally obtained ROM",
    description:
      "Users are responsible for providing their own legally obtained Pokemon Emerald ROM when a setup flow requires one.",
  },
  {
    title: "No official affiliation",
    description:
      "Divergence is a fan-made project and is not affiliated with, endorsed by, sponsored by, or approved by Nintendo, Game Freak, Creatures, or The Pokemon Company.",
  },
  {
    title: "Launcher distribution",
    description:
      "Optional launcher downloads may be linked from GitHub Releases. Those downloads should not include a base Pokemon Emerald ROM.",
  },
  {
    title: "Release links",
    description:
      "GitHub Release links may point to alpha or test builds while distribution is being verified. Release artifacts are launcher files only.",
  },
];

export default function LegalPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Distribution and legal notes"
      description="Clear boundaries for what this site provides, what it does not provide, and what users must supply themselves."
    >
      <div className="space-y-6">
        <LegalNote title="Important distribution boundary" />
        <div className="grid gap-4 md:grid-cols-2">
          {legalSections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                This copy is intentionally visible and plain. It should be
                reviewed before launch if the release process or distribution
                model changes.
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
