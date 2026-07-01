import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { faqItems } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about Divergence, launcher use, setup, and ROM distribution.",
};

export default function FaqPage() {
  return (
    <PageShell
      eyebrow="FAQ"
      title="Common questions"
      description="Short answers for optional launcher use, emulator play, downloads, legal boundaries, and future feature plans."
    >
      <Card>
        <CardContent>
          <Accordion>
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </PageShell>
  );
}
