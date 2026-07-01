import { ShieldCheckIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { legalReminder } from "@/content/site";

export function LegalNote({
  title = "ROM ownership required",
}: {
  title?: string;
}) {
  return (
    <Alert className="border-primary/20 bg-primary/5 text-foreground shadow-xs">
      <ShieldCheckIcon className="size-4 text-primary" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="text-muted-foreground">
        {legalReminder}
      </AlertDescription>
    </Alert>
  );
}
